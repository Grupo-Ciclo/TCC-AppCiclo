<?php 
include_once("../conexao.php");

$postjson = json_decode(file_get_contents("php://input"), true);
$limite = (isset($_GET['limite'])) ? $_GET['limite'] : 6; 
$pagina = (isset($_GET['pagina'])) ? $_GET['pagina'] : 1; 
$inicio = ($limite * $pagina) - $limite; 

$query = $pdo->prepare("SELECT * FROM lixeira $inicio, $limite");
$query->execute();
$res = $query->fetchAll(PDO::FETCH_ASSOC);

for ($i=0; $i < count($res); $i++) { 
    $dados[] = array(
      'id' => $res[$i]['id'],    
      'QRcode' => $res[$i]['QRcode'],        
      'pesoMax' => $res[$i]['pesoMax'],
      'pesoAt' => $res[$i]['pesoAt'],
      'local' => $res[$i]['local'],
      
  );

}

if(count($res) > 0){
    $result = json_encode(array('success'=>true, 'resultado'=>@$dados, 'totalItems'=>@count($dados) + ($inicio)));
}else{
    $result = json_encode(array('success'=>false, 'resultado'=>'0'));
}

echo $result;

?>
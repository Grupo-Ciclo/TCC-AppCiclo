<?php 

include_once('../conexao.php');

$postjson = json_decode(file_get_contents('php://input'), true);

$limite = (isset($_GET['limite'])) ? $_GET['limite'] : 5; 
$pagina = (isset($_GET['pagina'])) ? $_GET['pagina'] : 1; 

$inicio = ($limite * $pagina) - $limite; 

$query = $pdo->prepare("SELECT * FROM coletor ORDER BY id_coletor DESC LIMIT $inicio, $limite");

$query->execute();

$res = $query->fetchAll(PDO::FETCH_ASSOC);



for ($i=0; $i < count($res); $i++) { 
      $dados[] = array(
        'id' => $res[$i]['id_coletor'],    
        'nome' => $res[$i]['nome_coletor'],        
        'email' => $res[$i]['email_coletor'],
        'senha' => $res[$i]['senha_coletor'],
        'pontos' => $res[$i]['pontos_coletor'],
        'telefone' => $res[$i]['telefone_coletor'],
        'conta' => $res[$i]['contabancaria_coletor'],
        
    );

}


if(count($res) > 0){
    $result = json_encode(array('success'=>true, 'resultado'=>@$dados, 'totalItems'=>@count($dados) + ($inicio)));
}else{
    $result = json_encode(array('success'=>false, 'resultado'=>'0'));
}

echo $result;

?>
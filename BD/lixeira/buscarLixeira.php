<?php 

include_once('../conexao.php');

$postjson = json_decode(file_get_contents('php://input'), true);

$buscar = '%' .@$_GET['buscar']. '%';

$query = $pdo->prepare("SELECT * from lixeira");

$query->execute();

$res = $query->fetchAll(PDO::FETCH_ASSOC);
 
for ($i=0; $i < count($res); $i++) { 
    foreach ($res[$i] as $key => $value) {  }      

    $dados[] = array(
        'id' => $res[$i]['id'],
        'QRcode' => $res[$i]['QRcode'],
        'pesoMax' => $res[$i]['pesoMax'],
        'pesoAt' => $res[$i]['pesoAt'],
        'local' => $res[$i]['local'],
    );
}

if(count($res) > 0){
    $result = json_encode(array('success'=>true, 'resultado'=>$dados));
}else{
    $result = json_encode(array('success'=>false, 'resultado'=>'0'));
}

echo $result;

?>
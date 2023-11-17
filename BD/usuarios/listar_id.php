<?php 

include_once('../conexao.php');

$postjson = json_decode(file_get_contents('php://input'), true);

$id = $_GET['user'];

/* $query = $pdo->prepare("SELECT * FROM coletor WHERE coletor.id_coletor = '$id'"); */
$query = $pdo->prepare("SELECT * FROM coletor");

$query->execute();

$res = $query->fetchAll(PDO::FETCH_ASSOC);

for ($i=0; $i < count($res); $i++) { 
    foreach ($res[$i] as $key => $value) {
    }
    $dados = array(        
        'nome_coletor' => $res[$i]['nome_coletor'],        
        'email_coletor' => $res[$i]['email_coletor'],
        'senha_coletor' => $res[$i]['senha_coletor'],
        'pontos_coletor' => $res[$i]['pontos_coletor'],
        'local_coletor' => $res[$i]['local_coletor'],
        'telefone_coletor' => $res[$i]['telefone_coletor'],
        'conta_coletor' => $res[$i]['contabancaria_coletor'],
    );
}

if(count($res) > 0){
    $result = json_encode(array('success'=>true, 'dados'=>$dados));
}else{
    $result = json_encode(array('success'=>false, 'resultado'=>'0'));
}

echo $result;

?>
<?php 

include_once('../conexao.php');

$postjson = json_decode(file_get_contents('php://input'), true);

$id = @$_GET['id_coletor'];

$query = $pdo->prepare("SELECT * FROM all_info INNER JOIN coletor ON id_info_coletor = id_coletor INNER JOIN lixeira ON id_info_lixeira  = id_lixeira where id_coletor = '$id'");

$query->execute();

$res = $query->fetchAll(PDO::FETCH_ASSOC);

for ($i=0; $i < count($res); $i++) { 
    foreach ($res[$i] as $key => $value) {
    }

    $dados = array(        
        'nome' => $res[$i]['nome_coletor'],        
        'email' => $res[$i]['email_coletor'],
        'senha' => $res[$i]['senha_coletor'],
        'pontos' => $res[$i]['pontos_coletor'],
        'local' => $res[$i]['local_coletor'],
        'telefone' => $res[$i]['telefone_coletor'],
        'conta' => $res[$i]['contabancaria_coletor'],
    );
}

if(count($res) > 0){
    $result = json_encode(array('success'=>true, 'dados'=>$dados));
}else{
    $result = json_encode(array('success'=>false, 'resultado'=>'0'));
}

echo $result;

?>
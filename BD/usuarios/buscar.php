<?php 

include_once('../conexao.php');

$postjson = json_decode(file_get_contents('php://input'), true);

$buscar = '%' .@$_GET['buscar']. '%';

$query = $pdo->prepare("SELECT * from all_info INNER JOIN coletor on info_id_coletor = id_coletor INNER JOIN lixeira on info_id_lixeira = id_lixeira where nome_coletor LIKE '$buscar' or email_coletor LIKE '$buscar' order by id_coletor desc");

$query->execute();

$res = $query->fetchAll(PDO::FETCH_ASSOC);

for ($i=0; $i < count($res); $i++) { 
    foreach ($res[$i] as $key => $value) {  }      

    $dados[] = array(
        'id' => $res[$i]['id_coletor'],
        'nome' => $res[$i]['nome_coletor'],        
        'email' => $res[$i]['email_coletor'],
        'senha' => $res[$i]['senha_coletor'],
        'pontos' => $res[$i]['pontos_coletor'],
        'telefone' => $res[$i]['telefone_coletor'],
    );
}

if(count($res) > 0){
    $result = json_encode(array('success'=>true, 'resultado'=>$dados));
}else{
    $result = json_encode(array('success'=>false, 'resultado'=>'0'));
}

echo $result;

?>
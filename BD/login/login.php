<?php
include_once('../conexao.php');

$postjson = json_decode(file_get_contents("php://input"), true);
$senha = $postjson['senha'];
$query_buscar = $pdo->prepare("SELECT * from all_info INNER JOIN coletor on id_info_coletor = id_coletor where email_coletor = :email and senha_coletor = :senha");
// SELECT * from all_info INNER JOIN coletor on id_info_coletor = id_coletor 
$query_buscar->bindValue(":email", "$postjson[email]");
$query_buscar->bindValue(":senha", "$senha");
$query_buscar->execute();

$dados_buscar = $query_buscar->fetchAll(PDO::FETCH_ASSOC);

for ($i = 0; $i < count($dados_buscar); $i++) {
    foreach ($dados_buscar[$i] as $key => $value) {
    }

    $dados[] = array(
        'id' => intVal($dados_buscar[$i]['id_coletor']),
        'email' => $dados_buscar[$i]['email_coletor'],
        'senha' => $dados_buscar[$i]['senha_coletor'],
        'nome' => $dados_buscar[$i]['nome_coletor'],
        'telefone' => $dados_buscar[$i]['telefone_coletor'],
        'pontos' => $dados_buscar[$i]['pontos_coletor'],
    );
}

if (@count($dados_buscar) > 0) {
    $result = json_encode(array('result' => $dados));
    echo $result;

} else {
    $result = json_encode(array('result' => 'Dados Incorretos!'));
    echo $result;
}

?>
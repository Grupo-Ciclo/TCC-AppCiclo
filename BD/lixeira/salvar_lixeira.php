<?php
require_once("../conexao.php");
$tabela = 'lixeira';

$postjson = json_decode(file_get_contents('php://input'), true);

$id = @$postjson['id'];
$local = @$postjson['lixeiraLocal'];
$QRcode = @$postjson['QRcode'];
$pesoAt = @$postjson['pesoAt'];
$pesoMax = @$postjson['pesoMax'];

//validar email
$query = $pdo->query("SELECT * FROM $tabela where id = '$id'");
$res = $query->fetchAll(PDO::FETCH_ASSOC);
$total_reg = @count($res);
if ($total_reg > 0 and $res[0]['id'] != $id) {
	$result = json_encode(array('mensagem' => 'Lixeira já Cadastrada, escolha Outra!', 'sucesso' => false));
	echo $result;
	exit();
}


if ($id == "" || $id == "0") {
	$res = $pdo->prepare("INSERT INTO $tabela SET id = :id, lixeiraLocal = :lixeiraLocal,");

} else {
	$res = $pdo->prepare("UPDATE $tabela SET id = :id, lixeiraLocal = :lixeiraLocal, QRcode = :QRcode, pesoAt = :pesoAt, pesoMax = :pesoMax where id = '$id'");

}

$res->bindValue(":id", "$id");
$res->bindValue(":lixeiraLocal", "$local");
$res->bindValue(":QRcode", "$QRcode");
$res->bindValue(":pesoAt", "$pesoAt");
$res->bindValue(":pesoMax", "$pesoMax");


$res->execute();


$result = json_encode(array('mensagem' => 'Salvo com sucesso!', 'sucesso' => true));

echo $result;

?>
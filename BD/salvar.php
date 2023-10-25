<?php
require_once("conexao.php");
$tabela = 'qrtabela';

$postjson = json_decode(file_get_contents('php://input'), true);

$id = @$postjson['id'];
$link = @$postjson['link'];

if ($id === "") {
  $res = $pdo->prepare("INSERT INTO $tabela (link) VALUES (:link)");
} else {
  $res = $pdo->prepare("UPDATE $tabela SET link = :link WHERE id = :id");

}
$res->bindValue(":id", $id);
$res->bindValue(":link", $link);
$res->execute();

$result = json_encode(array('mensagem' => 'Salvo com sucesso!', 'success' => true));
echo $result;
?>
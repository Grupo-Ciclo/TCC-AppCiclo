<?php
require_once("../conexao.php");
$tabela = 'coletor';

$postjson = json_decode(file_get_contents('php://input'), true);

$id = @$postjson['id_coletor'];
$nome = @$postjson['nome'];
$email = @$postjson['email'];
$localColetor = @$postjson['local'];
$senha = @$postjson['senha'];
$pontosColetor = @$postjson['pontosColetor'];
$telefoneColetor = @$postjson['telefoneColetor'];
$contaBancoColetor = @$postjson['contabancariaColetor'];




//validar email
$query = $pdo->query("SELECT * FROM $tabela where email_coletor = '$email'");
$res = $query->fetchAll(PDO::FETCH_ASSOC);
$total_reg = @count($res);
if ($total_reg > 0 and $res[0]['id_coletor'] != $id) {
	$result = json_encode(array('mensagem' => 'Email já Cadastrado, escolha Outro!', 'sucesso' => false));
	echo $result;
	exit();
}



if ($id == "" || $id == "0") {
	$res = $pdo->prepare("INSERT INTO $tabela SET nome_coletor = :nome, email_coletor = :email, senha_coletor = :senha, telefone_coletor = :telefoneColetor, local_coletor = :localColetor, contabancaria_coletor = :contaBancoColetor, pontos_coletor = :pontosColetor");

} else {
	$res = $pdo->prepare("UPDATE $tabela SET nome_coletor = :nome, email_coletor = :email, senha_coletor = :senha, telefone_coletor = :telefoneColetor, local_coletor = :localColetor, contabancaria_coletor = :contaBancoColetor, pontos_coletor = :pontosColetor where id_coletor = '$id'");

}


$res->bindValue(":nome", "$nome");
$res->bindValue(":senha", "$senha");
$res->bindValue(":email", "$email");
$res->bindValue(":localColetor", "$localColetor");
$res->bindValue(":pontosColetor", "$pontosColetor");
$res->bindValue(":telefoneColetor", "$telefoneColetor");
$res->bindValue(":contaBancoColetor", "$contaBancoColetor");

$res->execute();


$result = json_encode(array('mensagem' => 'Salvo com sucesso!', 'sucesso' => true));

echo $result;

?>
<?php
include("conexao.php");
$tabela = 'qrcode';

$postjson = json_decode(file_get_contents('php://input'), true);

$dados = @$postjson['dados'];
$tipo = @$postjson['tipo'];


?>
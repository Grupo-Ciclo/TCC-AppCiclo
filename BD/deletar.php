<?php
include("conexao.php");
mysqli_query($conexao, "DELETE FROM coletor ORDER BY id_coletor");
    ?>  
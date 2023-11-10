-- --------------------------------------------------------
-- Servidor:                     127.0.0.1
-- Versão do servidor:           10.1.38-MariaDB - mariadb.org binary distribution
-- OS do Servidor:               Win64
-- HeidiSQL Versão:              11.3.0.6295
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Copiando estrutura do banco de dados para bdtcc
CREATE DATABASE IF NOT EXISTS `bdtcc` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `bdtcc`;

-- Copiando estrutura para tabela bdtcc.all_info
CREATE TABLE IF NOT EXISTS `all_info` (
  `id_info` int(11) NOT NULL AUTO_INCREMENT,
  `id_info_coletor` int(11) DEFAULT NULL,
  `id_info_lixeira` int(11) DEFAULT NULL,
  `valorPeso` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_info`),
  KEY `FK_all_info_coletor` (`id_info_coletor`),
  KEY `FK_all_info_lixeira` (`id_info_lixeira`),
  CONSTRAINT `FK_all_info_coletor` FOREIGN KEY (`id_info_coletor`) REFERENCES `coletor` (`id_coletor`),
  CONSTRAINT `FK_all_info_lixeira` FOREIGN KEY (`id_info_lixeira`) REFERENCES `lixeira` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

-- Copiando dados para a tabela bdtcc.all_info: ~4 rows (aproximadamente)
DELETE FROM `all_info`;
/*!40000 ALTER TABLE `all_info` DISABLE KEYS */;
INSERT INTO `all_info` (`id_info`, `id_info_coletor`, `id_info_lixeira`, `valorPeso`) VALUES
	(1, 1, 1, NULL),
	(2, 2, 2, NULL),
	(3, 1, 2, NULL),
	(5, 3, 1, NULL);
/*!40000 ALTER TABLE `all_info` ENABLE KEYS */;

-- Copiando estrutura para tabela bdtcc.ciclo
CREATE TABLE IF NOT EXISTS `ciclo` (
  `cnpj` int(20) NOT NULL,
  `nome_ciclo` varchar(250) NOT NULL,
  `email_ciclo` varchar(250) NOT NULL,
  `senha_ciclo` int(11) DEFAULT NULL,
  `contabancaria_coletor` varchar(250) NOT NULL,
  `cod_compra` int(20) NOT NULL,
  `telefone_ciclo` int(20) NOT NULL,
  PRIMARY KEY (`cnpj`),
  KEY `cod_compra` (`cod_compra`),
  KEY `contabancaria_coletor` (`contabancaria_coletor`),
  CONSTRAINT `FK_ciclo_coletor` FOREIGN KEY (`contabancaria_coletor`) REFERENCES `coletor` (`contabancaria_coletor`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Copiando dados para a tabela bdtcc.ciclo: ~0 rows (aproximadamente)
DELETE FROM `ciclo`;
/*!40000 ALTER TABLE `ciclo` DISABLE KEYS */;
/*!40000 ALTER TABLE `ciclo` ENABLE KEYS */;

-- Copiando estrutura para tabela bdtcc.coletor
CREATE TABLE IF NOT EXISTS `coletor` (
  `id_coletor` int(11) NOT NULL AUTO_INCREMENT,
  `nome_coletor` varchar(250) DEFAULT NULL,
  `email_coletor` varchar(250) DEFAULT NULL,
  `senha_coletor` varchar(50) DEFAULT NULL,
  `telefone_coletor` int(20) DEFAULT NULL,
  `local_coletor` varchar(250) DEFAULT NULL,
  `contabancaria_coletor` varchar(250) DEFAULT NULL,
  `pontos_coletor` int(10) DEFAULT NULL,
  PRIMARY KEY (`id_coletor`),
  KEY `pontos_coletor` (`pontos_coletor`),
  KEY `contabancaria_coletor` (`contabancaria_coletor`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

-- Copiando dados para a tabela bdtcc.coletor: ~3 rows (aproximadamente)
DELETE FROM `coletor`;
/*!40000 ALTER TABLE `coletor` DISABLE KEYS */;
INSERT INTO `coletor` (`id_coletor`, `nome_coletor`, `email_coletor`, `senha_coletor`, `telefone_coletor`, `local_coletor`, `contabancaria_coletor`, `pontos_coletor`) VALUES
	(1, 'Nicolas Kerpen', 'nk@email.com', '1234', 6548, 'Casa', '85421255', 123123),
	(2, 'Marco Capote', 'capote@email.com', '123', 1234678901, 'Casa-Capote', '68574812', 12345),
	(3, 'Luiz', 'Cintra@', '12', 1299999999, 'AAAAAAAAA', '874546', 6542);
/*!40000 ALTER TABLE `coletor` ENABLE KEYS */;

-- Copiando estrutura para tabela bdtcc.empresareciclagem
CREATE TABLE IF NOT EXISTS `empresareciclagem` (
  `CNPJ` int(20) NOT NULL,
  `cod_compra` int(20) DEFAULT NULL,
  `email_empresa` varchar(250) DEFAULT NULL,
  `telefone_empresa` int(20) DEFAULT NULL,
  PRIMARY KEY (`CNPJ`),
  KEY `cod_compra` (`cod_compra`),
  CONSTRAINT `FK_empresareciclagem_ciclo` FOREIGN KEY (`cod_compra`) REFERENCES `ciclo` (`cod_compra`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Copiando dados para a tabela bdtcc.empresareciclagem: ~0 rows (aproximadamente)
DELETE FROM `empresareciclagem`;
/*!40000 ALTER TABLE `empresareciclagem` DISABLE KEYS */;
/*!40000 ALTER TABLE `empresareciclagem` ENABLE KEYS */;

-- Copiando estrutura para tabela bdtcc.lixeira
CREATE TABLE IF NOT EXISTS `lixeira` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `lixeiraLocal` varchar(350) DEFAULT NULL,
  `QRcode` varchar(350) DEFAULT NULL,
  `pesoAt` double DEFAULT NULL,
  `pesoMax` double DEFAULT NULL,
  `EnderecoValor` point DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

-- Copiando dados para a tabela bdtcc.lixeira: ~2 rows (aproximadamente)
DELETE FROM `lixeira`;
/*!40000 ALTER TABLE `lixeira` DISABLE KEYS */;
INSERT INTO `lixeira` (`id`, `lixeiraLocal`, `QRcode`, `pesoAt`, `pesoMax`, `EnderecoValor`) VALUES
	(1, 'Etec', 'QRmuitomassa', 112, 2000, _binary 0x00000000010100000073b515fbcbeb47c0991a57128f8438c0),
	(2, 'Casa', 'QRMELHORAINDA', 1234, 1500, _binary 0x000000000101000000e2f3797bc6ed47c0a3956a55018138c0);
/*!40000 ALTER TABLE `lixeira` ENABLE KEYS */;

-- Copiando estrutura para tabela bdtcc.qrtabela
CREATE TABLE IF NOT EXISTS `qrtabela` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `link` varchar(250) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=latin1;

-- Copiando dados para a tabela bdtcc.qrtabela: ~7 rows (aproximadamente)
DELETE FROM `qrtabela`;
/*!40000 ALTER TABLE `qrtabela` DISABLE KEYS */;
INSERT INTO `qrtabela` (`id`, `link`) VALUES
	(15, 'https://qrco.de/beQQWr'),
	(16, 'https://qrco.de/beQQWr'),
	(18, 'https://qrco.de/beQQWr'),
	(20, 'https://qrco.de/beQQWr'),
	(21, 'https://qrco.de/beQQWr'),
	(23, 'https://qrco.de/beQQWr'),
	(25, 'https://qrco.de/beQQWr');
/*!40000 ALTER TABLE `qrtabela` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;

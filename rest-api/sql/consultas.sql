create database proyecto;
use proyecto

--
-- Table structure for table `comics`
--

DROP TABLE IF EXISTS `comics`;
CREATE TABLE `comics` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) DEFAULT NULL,
  `yimpress` varchar(45) DEFAULT NULL,
  `sinopsis` varchar(90) DEFAULT NULL,
  `editorial` varchar(150) DEFAULT NULL,
  `usuario` varchar(45) not NULL,
  PRIMARY KEY (`id`),
  foreign key (usuario) references usuarios(usuario)
);

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE `usuarios` (
	`usuario` varchar(45),
	`nombre` varchar(45) DEFAULT NULL,
	`password` varchar(45) DEFAULT NULL,
	`fecha_nac` date DEFAULT NULL,
	`sexo` char(1) DEFAULT NULL,
	PRIMARY KEY (usuario)
) ;


select * from usuarios;
select * from comics;




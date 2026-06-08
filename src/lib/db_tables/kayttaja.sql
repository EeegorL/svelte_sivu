CREATE TABLE `kayttaja` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `kayttajanimi` varchar(50) NOT NULL,
  `pwdHash` varchar(61) NOT NULL,
  `rooli` int(11) DEFAULT 0,
  PRIMARY KEY (`id`),
  UNIQUE KEY `kayttajanimi` (`kayttajanimi`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci
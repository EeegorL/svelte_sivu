 CREATE TABLE `henkilo` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nimi` varchar(255) NOT NULL,
  `lyhenne` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `lyhenne` (`lyhenne`)
) ENGINE=InnoDB AUTO_INCREMENT=321 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci
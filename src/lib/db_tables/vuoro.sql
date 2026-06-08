CREATE TABLE `vuoro` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `pv` date NOT NULL,
  `vuoro` int(11) NOT NULL,
  `henkilo` int(11) NOT NULL,
  `note` varchar(255) DEFAULT NULL,
  `aika` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `vuoro` (`vuoro`),
  KEY `henkilo` (`henkilo`),
  CONSTRAINT `vuoro_ibfk_1` FOREIGN KEY (`vuoro`) REFERENCES `vuorotyyppi` (`id`),
  CONSTRAINT `vuoro_ibfk_2` FOREIGN KEY (`henkilo`) REFERENCES `henkilo` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=188 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci 
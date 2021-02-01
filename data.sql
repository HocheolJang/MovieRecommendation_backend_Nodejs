CREATE TABLE `movies` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `title` varchar(100) NOT NULL,
  `release_date` datetime NOT NULL,
  `rating` decimal(2, 1) NOT NULL,
  `poster` varchar(500) NOT NULL,
  `desc` text NOT NULL,
);

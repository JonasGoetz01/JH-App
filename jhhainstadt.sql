-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Erstellungszeit: 12. Nov 2021 um 19:19
-- Server-Version: 10.4.21-MariaDB
-- PHP-Version: 8.0.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Datenbank: `jhhainstadt`
--

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `drink`
--

CREATE TABLE `drink` (
  `id` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  `brand` varchar(45) NOT NULL,
  `price_buy` float NOT NULL,
  `price_intern` float NOT NULL,
  `price_extern` float NOT NULL,
  `box_size` int(11) NOT NULL,
  `stock` int(11) NOT NULL,
  `active` varchar(10) DEFAULT 'active'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Daten für Tabelle `drink`
--

INSERT INTO `drink` (`id`, `name`, `brand`, `price_buy`, `price_intern`, `price_extern`, `box_size`, `stock`, `active`) VALUES
(10, 'Weizen', 'Paulaner', 1.2, 1.5, 2, 24, 43, 'active'),
(11, 'Cola', 'Fritz', 1, 1, 1, 24, 20, 'active');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `sales`
--

CREATE TABLE `sales` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `drink_id` int(11) NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT current_timestamp(),
  `payed` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Daten für Tabelle `sales`
--

INSERT INTO `sales` (`id`, `user_id`, `drink_id`, `timestamp`, `payed`) VALUES
(12, 31, 10, '2021-11-10 20:55:11', 1),
(13, 31, 10, '2021-11-10 20:55:27', 1),
(16, 32, 10, '2021-11-10 21:02:39', 1),
(17, 31, 10, '2021-11-12 17:27:21', 1),
(18, 31, 10, '2021-11-12 17:27:22', 1),
(19, 31, 10, '2021-11-12 17:27:23', 1),
(20, 31, 10, '2021-11-12 17:27:24', 1),
(21, 31, 10, '2021-11-12 17:27:25', 1),
(22, 31, 10, '2021-11-12 17:30:28', 1),
(23, 31, 10, '2021-11-12 17:30:29', 1),
(24, 31, 10, '2021-11-12 17:30:30', 1),
(25, 31, 10, '2021-11-12 17:38:46', 1),
(26, 31, 10, '2021-11-12 17:38:47', 1),
(27, 31, 10, '2021-11-12 17:38:48', 1),
(28, 31, 10, '2021-11-12 17:41:16', 1),
(29, 32, 10, '2021-11-12 18:00:43', 1),
(30, 31, 10, '2021-11-12 18:03:06', 1),
(31, 31, 10, '2021-11-12 18:05:46', 1),
(32, 31, 10, '2021-11-12 18:05:47', 1),
(33, 31, 10, '2021-11-12 18:05:48', 1),
(34, 31, 10, '2021-11-12 18:07:41', 1),
(35, 0, 10, '2021-11-12 18:11:07', 1),
(36, 0, 10, '2021-11-12 18:11:08', 1),
(37, 0, 10, '2021-11-12 18:11:37', 1),
(38, 31, 11, '2021-11-12 18:14:25', 1),
(39, 31, 10, '2021-11-12 18:14:26', 1),
(40, 0, 11, '2021-11-12 18:16:40', 1),
(41, 31, 10, '2021-11-12 18:16:45', 1),
(42, 31, 11, '2021-11-12 18:17:21', 1),
(43, 31, 10, '2021-11-12 18:17:22', 1),
(44, 31, 11, '2021-11-12 18:17:23', 1),
(45, 31, 10, '2021-11-12 18:17:24', 1),
(46, 31, 10, '2021-11-12 18:17:25', 1),
(47, 31, 10, '2021-11-12 18:17:25', 1),
(48, 32, 10, '2021-11-12 18:17:42', 0),
(49, 32, 10, '2021-11-12 18:17:43', 0);

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `first_name` varchar(45) NOT NULL,
  `last_name` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `phone` varchar(45) NOT NULL,
  `comments` text NOT NULL,
  `status` varchar(10) NOT NULL DEFAULT 'active '
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Daten für Tabelle `user`
--

INSERT INTO `user` (`id`, `first_name`, `last_name`, `email`, `phone`, `comments`, `status`) VALUES
(0, 'Wiese', 'Projekt', 'jonas.goetz01@web.de', '015251558872', 'Account für Projekt Wiese. Hier werden alle Getränke bis zum Jahresende gesammelt.', 'active '),
(31, 'Jonas', 'Götz', 'jonas.goetz01@web.de', '015251558872', '123', 'active '),
(32, 'Mira', 'Götz', 'jonas.goetz01@web.de', '', '123', 'active '),
(35, 'Felix', 'Müller', '', '', '', 'active ');

--
-- Indizes der exportierten Tabellen
--

--
-- Indizes für die Tabelle `drink`
--
ALTER TABLE `drink`
  ADD PRIMARY KEY (`id`);

--
-- Indizes für die Tabelle `sales`
--
ALTER TABLE `sales`
  ADD PRIMARY KEY (`id`);

--
-- Indizes für die Tabelle `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT für exportierte Tabellen
--

--
-- AUTO_INCREMENT für Tabelle `drink`
--
ALTER TABLE `drink`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT für Tabelle `sales`
--
ALTER TABLE `sales`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=50;

--
-- AUTO_INCREMENT für Tabelle `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

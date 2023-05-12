-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Erstellungszeit: 12. Mai 2023 um 11:17
-- Server-Version: 10.4.22-MariaDB
-- PHP-Version: 8.0.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Datenbank: `rennen`
--

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `auto`
--

CREATE TABLE `auto` (
  `ID` int(11) NOT NULL,
  `Name` varchar(255) NOT NULL,
  `TeamID` int(11) NOT NULL,
  `Typ` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Daten für Tabelle `auto`
--

INSERT INTO `auto` (`ID`, `Name`, `TeamID`, `Typ`) VALUES
(1, 'Auto 1', 1, 1),
(2, 'Auto 2', 1, 2),
(3, 'Auto 3', 2, 3),
(4, 'Auto 4', 3, 1),
(5, 'Auto 5', 3, 2),
(6, 'Auto 6', 3, 3);

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `autotyp`
--

CREATE TABLE `autotyp` (
  `ID` int(11) NOT NULL,
  `Bezeichnung` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Daten für Tabelle `autotyp`
--

INSERT INTO `autotyp` (`ID`, `Bezeichnung`) VALUES
(1, 'Vierräder'),
(2, 'Zweiräder'),
(3, 'Spezial');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `azubi`
--

CREATE TABLE `azubi` (
  `ID` int(11) NOT NULL,
  `Nachname` varchar(255) NOT NULL,
  `Vorname` varchar(255) NOT NULL,
  `Klasse` char(6) NOT NULL,
  `Passwort` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Daten für Tabelle `azubi`
--

INSERT INTO `azubi` (`ID`, `Nachname`, `Vorname`, `Klasse`, `Passwort`) VALUES
(1, 'Müller', 'Hans', '13a', '123456'),
(2, 'Schmidt', 'Lisa', '13b', 'abcdef'),
(3, 'Meier', 'Max', '13c', 'qwerty');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `fahrzeit`
--

CREATE TABLE `fahrzeit` (
  `ID` int(11) NOT NULL,
  `AutoID` int(11) NOT NULL,
  `RennstreckeID` int(11) NOT NULL,
  `Fahrzeit` bigint(20) DEFAULT NULL,
  `Timestamp` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Daten für Tabelle `fahrzeit`
--

INSERT INTO `fahrzeit` (`ID`, `AutoID`, `RennstreckeID`, `Fahrzeit`, `Timestamp`) VALUES
(1, 1, 1, 13, '2023-05-01 08:00:00'),
(2, 1, 2, 10, '2023-05-01 09:00:00'),
(3, 2, 1, 14, '2023-05-01 08:30:00'),
(4, 3, 3, 15, '2023-05-01 09:30:00'),
(5, 4, 1, NULL, '2023-05-02 08:00:00'),
(6, 5, 2, NULL, '2023-05-02 09:00:00'),
(7, 6, 3, NULL, '2023-05-02 10:00:00');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `rennstrecke`
--

CREATE TABLE `rennstrecke` (
  `ID` int(11) NOT NULL,
  `Name` varchar(255) NOT NULL,
  `Laenge` decimal(10,0) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Daten für Tabelle `rennstrecke`
--

INSERT INTO `rennstrecke` (`ID`, `Name`, `Laenge`) VALUES
(1, 'Strecke 1', '3'),
(2, 'Strecke 2', '3'),
(3, 'Strecke 3', '5'),
(4, 'Strecke 4', '3'),
(5, 'Strecke 5', '10');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `team`
--

CREATE TABLE `team` (
  `ID` int(11) NOT NULL,
  `Name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Daten für Tabelle `team`
--

INSERT INTO `team` (`ID`, `Name`) VALUES
(1, 'Team A'),
(2, 'Team B'),
(3, 'Team C');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `teammitglied`
--

CREATE TABLE `teammitglied` (
  `ID` int(11) NOT NULL,
  `AzubiID` int(11) NOT NULL,
  `TeamID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Daten für Tabelle `teammitglied`
--

INSERT INTO `teammitglied` (`ID`, `AzubiID`, `TeamID`) VALUES
(1, 1, 1),
(4, 1, 3),
(2, 2, 1),
(5, 2, 3),
(3, 3, 2),
(6, 3, 3);

--
-- Indizes der exportierten Tabellen
--

--
-- Indizes für die Tabelle `auto`
--
ALTER TABLE `auto`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `TeamID` (`TeamID`),
  ADD KEY `Typ` (`Typ`);

--
-- Indizes für die Tabelle `autotyp`
--
ALTER TABLE `autotyp`
  ADD PRIMARY KEY (`ID`);

--
-- Indizes für die Tabelle `azubi`
--
ALTER TABLE `azubi`
  ADD PRIMARY KEY (`ID`);

--
-- Indizes für die Tabelle `fahrzeit`
--
ALTER TABLE `fahrzeit`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `AutoID` (`AutoID`),
  ADD KEY `RennstreckeID` (`RennstreckeID`);

--
-- Indizes für die Tabelle `rennstrecke`
--
ALTER TABLE `rennstrecke`
  ADD PRIMARY KEY (`ID`);

--
-- Indizes für die Tabelle `team`
--
ALTER TABLE `team`
  ADD PRIMARY KEY (`ID`);

--
-- Indizes für die Tabelle `teammitglied`
--
ALTER TABLE `teammitglied`
  ADD PRIMARY KEY (`ID`),
  ADD UNIQUE KEY `AzubiID` (`AzubiID`,`TeamID`),
  ADD KEY `TeamID` (`TeamID`);

--
-- AUTO_INCREMENT für exportierte Tabellen
--

--
-- AUTO_INCREMENT für Tabelle `auto`
--
ALTER TABLE `auto`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT für Tabelle `autotyp`
--
ALTER TABLE `autotyp`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT für Tabelle `azubi`
--
ALTER TABLE `azubi`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT für Tabelle `fahrzeit`
--
ALTER TABLE `fahrzeit`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT für Tabelle `rennstrecke`
--
ALTER TABLE `rennstrecke`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT für Tabelle `team`
--
ALTER TABLE `team`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT für Tabelle `teammitglied`
--
ALTER TABLE `teammitglied`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Constraints der exportierten Tabellen
--

--
-- Constraints der Tabelle `auto`
--
ALTER TABLE `auto`
  ADD CONSTRAINT `auto_ibfk_1` FOREIGN KEY (`TeamID`) REFERENCES `team` (`ID`),
  ADD CONSTRAINT `auto_ibfk_2` FOREIGN KEY (`Typ`) REFERENCES `autotyp` (`ID`);

--
-- Constraints der Tabelle `fahrzeit`
--
ALTER TABLE `fahrzeit`
  ADD CONSTRAINT `fahrzeit_ibfk_1` FOREIGN KEY (`AutoID`) REFERENCES `auto` (`ID`),
  ADD CONSTRAINT `fahrzeit_ibfk_2` FOREIGN KEY (`RennstreckeID`) REFERENCES `rennstrecke` (`ID`);

--
-- Constraints der Tabelle `teammitglied`
--
ALTER TABLE `teammitglied`
  ADD CONSTRAINT `teammitglied_ibfk_1` FOREIGN KEY (`AzubiID`) REFERENCES `azubi` (`ID`),
  ADD CONSTRAINT `teammitglied_ibfk_2` FOREIGN KEY (`TeamID`) REFERENCES `team` (`ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

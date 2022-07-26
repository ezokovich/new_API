-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost
-- Généré le : mar. 26 juil. 2022 à 20:02
-- Version du serveur : 10.4.21-MariaDB
-- Version de PHP : 8.0.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `crud_API`
--

-- --------------------------------------------------------

--
-- Structure de la table `foot`
--

CREATE TABLE `foot` (
  `id` int(100) NOT NULL,
  `wins` int(128) NOT NULL,
  `losses` int(123) NOT NULL,
  `points_scored` int(123) NOT NULL,
  `nom` varchar(123) NOT NULL,
  `surnom` varchar(123) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `foot`
--

INSERT INTO `foot` (`id`, `wins`, `losses`, `points_scored`, `nom`, `surnom`) VALUES
(1, 123, 1234, 133, 'ezok', 'mapuzooo'),
(2, 123, 1234, 133, 'ezok', 'mapuzooo'),
(3, 123, 543, 7654, 'DEZR', 'hgfdsfrte'),
(4, 123, 543, 7654, 'DEZR', 'hgfdsfrte'),
(5, 123, 543, 7654, 'DEZR', 'hgfdsfrte'),
(6, 123, 543, 7654, 'DEZR', 'hgfdsfrte');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `foot`
--
ALTER TABLE `foot`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `foot`
--
ALTER TABLE `foot`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

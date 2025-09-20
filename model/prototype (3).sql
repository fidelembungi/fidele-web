-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : jeu. 21 août 2025 à 16:38
-- Version du serveur : 10.4.32-MariaDB
-- Version de PHP : 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `prototype`
--

-- --------------------------------------------------------

--
-- Structure de la table `cards`
--

CREATE TABLE `cards` (
  `id` int(11) NOT NULL,
  `titre` varchar(150) NOT NULL,
  `images` varchar(255) NOT NULL,
  `details` text NOT NULL,
  `date_creee` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `cards`
--

INSERT INTO `cards` (`id`, `titre`, `images`, `details`, `date_creee`) VALUES
(11, 'Conception de pages web dynamiques', 'Conception de pages web dynamiques.jpg', 'Besoin d’une <b>landing page</b>  pour une campagne marketing ? D’une page d’inscription ou d’une interface personnalisée ? Nous créons des pages uniques, centrées sur vos objectifs, avec un design professionnel et une expérience utilisateur fluide.', '2025-04-16 13:50:20'),
(13, 'Création de sites web professionnels', 'Création de sites web professionnels.png', 'Nous concevons des sites web qui répondent à vos besoins spécifiques : sites vitrines, e-commerce, institutionnels,personnels ou portfolios.\r\nTous nos sites sont responsives (compatibles mobiles et tablettes), rapides et optimisés pour le référencement naturel (SEO).', '2025-04-16 14:15:04'),
(14, 'Développement d’applications web', 'Développement d’applications web.jpg', 'Nous développons des applications web sur mesure, selon vos exigences fonctionnelles. Que ce soit un outil de gestion, une plateforme interne ou un service en ligne, nous vous accompagnons de la conception à la réalisation.', '2025-04-16 14:20:37');

-- --------------------------------------------------------

--
-- Structure de la table `commentaires`
--

CREATE TABLE `commentaires` (
  `id` int(11) NOT NULL,
  `noms` varchar(100) NOT NULL,
  `email` varchar(150) DEFAULT NULL,
  `commentaires` text NOT NULL,
  `date_creee` date DEFAULT current_timestamp(),
  `heure` time NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `commentaires`
--

INSERT INTO `commentaires` (`id`, `noms`, `email`, `commentaires`, `date_creee`, `heure`) VALUES
(3, 'fidele', 'fidelembungi@gmail.com', 'c\'est vraiment génial mais rendez les prix publics', '2025-04-14', '13:42:26');

-- --------------------------------------------------------

--
-- Structure de la table `img_essaie`
--

CREATE TABLE `img_essaie` (
  `id` int(11) NOT NULL,
  `nom_img` varchar(100) NOT NULL,
  `details` text NOT NULL,
  `titre` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `messages`
--

CREATE TABLE `messages` (
  `id` int(11) NOT NULL,
  `noms` varchar(150) NOT NULL,
  `email` varchar(100) DEFAULT NULL,
  `telephone` varchar(20) NOT NULL,
  `messages` text NOT NULL,
  `date_creee` date DEFAULT current_timestamp(),
  `heure` time NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `messages`
--

INSERT INTO `messages` (`id`, `noms`, `email`, `telephone`, `messages`, `date_creee`, `heure`) VALUES
(1, 'fidele', 'fidelembungi@gmail.com', '+243812578157', 'je suis intérressé', '2025-04-14', '13:33:34');

-- --------------------------------------------------------

--
-- Structure de la table `paragraphes`
--

CREATE TABLE `paragraphes` (
  `id` int(11) NOT NULL,
  `titre` varchar(150) NOT NULL,
  `details` text NOT NULL,
  `date_creee` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `paragraphes`
--

INSERT INTO `paragraphes` (`id`, `titre`, `details`, `date_creee`) VALUES
(5, 'Votre partenaire digital', 'Chez FD Web, nous sommes spécialisés dans la création de sites web, de pages interactives et d’applications web personnalisées. Notre objectif est simple : aider les entreprises, les indépendants, les associations et même les particuliers à s’imposer dans le monde numérique avec des outils modernes, efficaces et accessibles', '2025-04-16 13:40:54'),
(6, 'FD Web pour des solutions web sur mésure', 'Nous proposons également des formations complètes en développement web, pour\npermettre à chacun d’acquérir les compétences nécessaires et devenir autonome dans la\ncréation de projets web.', '2025-04-16 13:41:35');

-- --------------------------------------------------------

--
-- Structure de la table `services`
--

CREATE TABLE `services` (
  `id` int(11) NOT NULL,
  `grand_titre` varchar(50) NOT NULL,
  `petit_titre` varchar(200) NOT NULL,
  `images` varchar(255) NOT NULL,
  `span` varchar(50) NOT NULL,
  `details` text NOT NULL,
  `date_creee` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `services`
--

INSERT INTO `services` (`id`, `grand_titre`, `petit_titre`, `images`, `span`, `details`, `date_creee`) VALUES
(13, 'Création des sites web', 'sites e-commerce, vitrine, portfolios et autres', 'Création des sites web_sites e-commerce, vitrine, portfolios et autres_Conception des sites modernes.jpg', 'Conception des sites modernes', ' Nous concevons des sites web modernes, esthétiques et performants, adaptés à vos besoins : <strong>Sites vitrines :</strong> pour présenter votre entreprise,  projet ou activité. <strong>Blogs & portfolios :</strong> pour partager vos idées, créations ou passions. <br>\r\nTous nos sites sont responsives (adaptés aux mobiles), rapides et optimisés pour les moteurs de recherche (SEO).', '2025-04-15 19:48:47'),
(14, 'Développement d’applications web', 'Conception des applications à vos besoins spécifiques', 'Développement d’applications web_Conception des applications à vos besoins spécifiques_Développement des solutions web sur mesure.jpg', 'Développement des solutions web sur mesure', 'Vous avez besoin d’une application personnalisée ? Nous développons\r\n            des solutions web sur mesure :\r\n        <ul>\r\n            <li>Portails de gestion interne</li>\r\n            <li>Systèmes d’enregistrement ou de réservation</li>\r\n            <li>Interfaces d’administration</li>\r\n            <li>Outils connectés à des bases de données</li>\r\n        </ul>\r\n        Chaque projet est pensé selon vos besoins, avec sécurité, performance\r\n        et évolutivité.', '2025-04-15 19:53:59'),
(15, 'Conception de pages web dynamiques', 'Landing, pages de présentation et inscription', 'Conception de pages web dynamiques_Landing, pages de présentation et inscription_Page ciblée.png', 'Page ciblée', 'Parfois, vous n’avez pas besoin d’un site complet, mais d’une page\r\n            ciblée :\r\n        <ul>\r\n            <li>Landing pages pour des campagnes marketing</li>\r\n            <li>Pages de présentation d’un événement ou d’un produit</li>\r\n            <li>Pages d’inscription ou de formulaire</li>\r\n        </ul>\r\n        Nous vous aidons à concevoir des pages percutantes, claires et\r\n        efficaces.', '2025-04-15 19:56:21'),
(17, 'Formation en développement web', 'HTML, CSS, JS avec Ajax, PHP & MYSQL', 'Formation en développement web_HTML, CSS, JS avec Ajax, PHP & MYSQL_Formation pratique adaptée à votre Rythme.png', 'Formation pratique adaptée à votre Rythme', 'FD Web propose des formations pour débutants ou passionnés souhaitant\r\n            apprendre à créer eux-mêmes des sites :\r\n        <ul>\r\n            <li><B>HTML, CSS</B> : la base de toute page web</li>\r\n            <li><B>JavaScript</B> : pour rendre votre site interactif</li>\r\n            <li><B>PHP & MySQL</B> : pour les sites dynamiques et connectés aux bases\r\n                de données</li>\r\n            <li><B>Hébergement et mise en ligne</B></li>\r\n        </ul>\r\n        Nos formations sont pratiques, simples, et adaptées au rythme de\r\n        chaque apprenant. Possibilité d\'accompagnement individuel.', '2025-04-16 12:40:24');

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `nom` varchar(255) NOT NULL,
  `prenom` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `mdp` varchar(50) NOT NULL,
  `statut` varchar(50) NOT NULL,
  `img` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `nom`, `prenom`, `username`, `mdp`, `statut`, `img`) VALUES
(1, 'mbungi', 'fidele', 'fidelembungi', 'fidele1709..', 'Admin', 'Fido.jpg'),
(2, 'GB', 'Good', 'GB', 'GB', 'Users', '');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `cards`
--
ALTER TABLE `cards`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `commentaires`
--
ALTER TABLE `commentaires`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `img_essaie`
--
ALTER TABLE `img_essaie`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `messages`
--
ALTER TABLE `messages`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `paragraphes`
--
ALTER TABLE `paragraphes`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `services`
--
ALTER TABLE `services`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `cards`
--
ALTER TABLE `cards`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT pour la table `commentaires`
--
ALTER TABLE `commentaires`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT pour la table `img_essaie`
--
ALTER TABLE `img_essaie`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `messages`
--
ALTER TABLE `messages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `paragraphes`
--
ALTER TABLE `paragraphes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT pour la table `services`
--
ALTER TABLE `services`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

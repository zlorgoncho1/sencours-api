# API de Suivi des Cours Universitaires

Ce projet est une API REST développée avec Node.js et Express pour simuler un système de suivi des cours universitaires. L'API gère des données relatives aux étudiants, professeurs, cours, et salles de cours.

## Prérequis

Avant de démarrer, assurez-vous d'avoir installé :

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (généralement installé avec Node.js)

## Installation

Pour mettre en place le projet, suivez ces étapes :

1. Clonez le dépôt :

   ```bash
   git clone https://github.com/zlorgoncho1/sencours-api.git
   cd sencours-api
   ```

2. Installez les dépendances

   ```bash
   npm install
   ```

3. Démarrer le serveur en mode développement
   ```bash
   npm start
   ```
   Cette commande utilise nodemon pour recharger automatiquement le serveur lors des modifications du code.

## Structure du Projet

- `/src` : Contient les fichiers source TypeScript du projet.
- `/dist` : Contient les fichiers JavaScript compilés (générés lors du build).
- `dist/index.js` : Point d'entrée principal du serveur Node.js/Express.
- `nodemon.json` : Configuration pour `nodemon` pour le rechargement automatique.
- `package.json` : Fichier de configuration du projet et des dépendances.

## Scripts Disponibles

- `npm run start` : Lance le serveur en mode développement avec `nodemon`.
- `npm run build` : Compile les fichiers TypeScript en JavaScript.

## Comment travailler en équipe

Pour que l'on puisse travailler en équipe sur le projet:

- Créez une nouvelle branche pour chaque fonctionnalité ou correction de bug ou membre de l'équipe.
- Faites vos modifications.
- Soumettez une Pull Request pour fusionner vos modifications dans la branche principale.

### _Il s'agit d'un projet de classe développé par le groupe `[UNCHK | Elite Fusion]` composé par: `Ousmane Gueye, Yacine Bar, Fabrice Jordan Ramos, Papa Matar Diop, Ousmane Sow`_

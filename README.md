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

Le projet suit une architecture modulaire avec des contrôleurs séparés pour chaque entité :

- `src/` : Contient les fichiers source TypeScript du projet.
  - `controllers/` : Contrôleurs pour les différentes entités (étudiants, cours, etc.).
  - `data/` : Données mockées pour les entités.
  - `models/` : Modèles d'entités.
  - `index.ts` : Point d'entrée principal de l'application.
- `dist/` : Contient les fichiers JavaScript compilés (générés lors du build).
- `postman/` : Contient la collection Postman pour tester l'API.
- `nodemon.json` : Configuration pour `nodemon` pour le rechargement automatique.
- `package.json` : Fichier de configuration du projet et des dépendances.
- `tsconfig.json` : Configuration TypeScript.

## Scripts Disponibles

- `npm run start` : Lance le serveur en mode développement avec `nodemon`.
- `npm run build` : Compile les fichiers TypeScript en JavaScript.

## Pour tester l'API

1. Ouvrez Postman et choisissez _Import_.
2. Sélectionnez _File_ et cliquez sur _Upload Files_.
3. Naviguez jusqu'au dossier `postman` de ce projet et sélectionnez `api-doc.json`.
4. La collection de requêtes API sera importée dans Postman pour un test facile.

## Comment travailler en équipe

Pour que l'on puisse travailler en équipe sur le projet:

- Créez une nouvelle branche pour chaque fonctionnalité ou correction de bug ou membre de l'équipe.
- Faites vos modifications.
- Soumettez une Pull Request pour fusionner vos modifications dans la branche principale.

### _Il s'agit d'un projet de classe développé par le groupe `[UNCHK | Elite Fusion]` composé par: `Ousmane Gueye, Yacine Bar, Fabrice Jordan Ramos, Papa Matar Diop, Ousmane Sow`_

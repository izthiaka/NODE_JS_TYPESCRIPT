# NODE JS TYPESCRIPT

NodeJs API architecture Typescript 

## Version

1.0.0

## Installation

```bash
npm install
```

```bash
cp .env.example .env
```

```bash
nodemon ou npm start
```

## Scripts disponibles

-   `test_with_rapport`: Exécute les tests avec rapport et couverture de code.
-   `test:watch`: Exécute les tests en mode watch.
-   `test:e2e`: Exécute les tests e2e.
-   `test`: Exécute les tests sans rapport ni couverture de code.
-   `preinstall`: Installe nodemon globalement.
-   `prepare`: Installe husky pour le contrôle des commits.
-   `start`: Démarre le serveur avec nodemon et l'option legacy-watch activée.
-   `eslint_fix`: Fixe automatiquement les erreurs d'ESLint dans le projet.

## Dépendances

-   [@commitlint/cli](https://www.npmjs.com/package/@commitlint/cli) - Validation des messages de commit et des règles de style du code source (Git).

-   [@commitlint/config-conventional](https://www.npmjs.com/package/@commitlint/config-conventional) - Configuration standard pour CommitLint basée sur la convention Conventional Commits (Git).


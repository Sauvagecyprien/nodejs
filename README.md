Initialisation du projet BACK
Se placer dans le répertoire 'back'

cd /simplon_vote/back

Installer des modules
npm install

Configurer la connexion à la base de donnée en ligne:
Copier le fichier .env.example et renommer le fichier copié en .env
Remplacer le contenu de la variable d'environnement db_url avec celui fournis de la base de donnée
Ne pas push l'adresse de la base de donnée dans le fichier .env.example 😅
Les informations de la base de donnée sont dans le fichier config/database.js.
Migration
Copier le fichier back/migrations/migrate-mongo-config-example.js et renommer le fichier copié en back/migrations/migrate-mongo-config.js
Remplacer le contenu des paramètres url et databaseName avec celui fournis de la base de donnée
Ne pas push l'adresse de la base de donnée dans le fichier back/migrations/migrate-mongo-config-example.js 😅
Exécuter toutes les migrations de base de données non appliquées

migrate-mongo up

Annuler la dernière migration de base de données appliquées

migrate-mongo down

Aficher le journal des modifications de la base de données

migrate-mongo status

Pour windows seulement
Dans le fichier packages.json ajouter "SET " dans le script dev exemple:

"dev": "SET NODE_ENV=development && nodemon ./bin/www"

Lancer le serveur
Environnement de developpement

npm run dev

Environnement de production

npm run prod

Documentation
Pour générer la documentation

npm run doc

Pour consulter la documentation : back/docs/index.html
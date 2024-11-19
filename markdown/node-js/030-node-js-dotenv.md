# Node.js | Paramétrer une application avec dotenv

## Sommaire

- [Le module dotenv](#le-module-dotenv)

- [Ne publie jamais d'informations sensibles !](#ne-publie-jamais-dinformations-sensibles)

### Le module dotenv [^](#sommaire)

Utilisez le paquer `dotenv` pour définir les variables d'environnement lors du lancement de l'application.

**Pour installer ce dernier :** `npm install dotenv`

Ce module permets de définir des variables dans un fichier spécial `.env` stocké à la racine du projet.

Les **paramètres d'environnement** stockés dans un fichier `.env` doivent être importé comme çà : `import "dotenv/config";`.

**Exemple :**

```powershell
# .env file
SERVER_PORT=5000
DB_USER=toto
DB_PASSWORD=Ftst453sf2jerfh
SECRET_API_KEY=YGFftyftyfy4565VHCFTD!!YFT
```

**Au lieu de faire...**

```powershell
SERVER_PORT=5000 DB_USER=toto DB_PASSWORD=Ftst453sf2jerfh SECRET_API_KEY=YGFftyftyfy4565VHCFTD!!YFT node server.js
```

**Faire ça pour lancer le serveur...**

```powershell
node server.js
```

...et les variables seront chargées à partir du fichier `.env`.

### Ne publie jamais d'informations sensibles ! [^](#sommaire)

Le fichier `.env` doit **TOUJOURS** être ajouté dans le fichier `.gitignore` afin de ne pas partager des données sensibles via un dépôt public.

```powershell
# .gitignore
node_modules/
.env
```

Mettre dans le dépôt un fichier appelé `.env.sample` avec des **valeurs fictives**, permettant aux contributeurs de savoir quels **paramètres** sont nécessaires pour que l'application fonctionne. Les utilisateurs crééront localement leur propre `.env` à partir de cet exemple :

```powershell
# .env.sample file
SERVER_PORT=5000
DB_USER=YOUR_DB_USER
DB_PASSWORD=YOUR_DB_PASSWORD
SECRET_API_KEY=YOUR_SECRET_API_KEY
```

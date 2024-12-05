# Node.js | `.env` et `dotenv`

## Sommaire

- [Installation de `dotenv`](#)
- [Créer le fichier `.env`](#)

- [Ne publie jamais d'informations sensibles !](#ne-publie-jamais-dinformations-sensibles)

### Installation de dotenv [^](#sommaire)

Le package dotenv est une bibliothèque Node.js qui permet de gérer facilement les variables d'environnement dans vos applications. Il est principalement utilisé pour charger les variables définies dans un fichier .env et les rendre accessibles dans l'objet global process.env.

Cela est particulièrement utile pour stocker des informations sensibles comme des clés d'API, des chaînes de connexion à une base de données ou des configurations spécifiques à un environnement (développement, production, etc.).

Installez le paquet `dotenv` pour définir les variables d'environnement de l'application :

`npm install dotenv`

#### Pourquoi utiliser dotenv ?

1. Sécurité : Les informations sensibles ne sont pas directement dans le code source.
2. Flexibilité : Les configurations changent en fonction de l'environnement (local, test, production).
3. Simplicité : Pas besoin de définir manuellement les variables d'environnement dans chaque machine ou serveur.

### Créer le fichier `.env` [^](#sommaire)

1. dotenv lit un fichier .env (contenant des paires clé-valeur) à la racine de votre projet.
2. Il charge ces paires clé-valeur dans process.env.
3. Vous pouvez ensuite accéder à ces variables dans votre code via process.env.

Le fichier .env contient les variables au format clé-valeur :

API_KEY=12345abcdef
DB_HOST=localhost
DB_USER=root
DB_PASS=securepassword

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

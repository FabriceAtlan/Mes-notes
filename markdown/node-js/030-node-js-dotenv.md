# Node.js | `.env` et `dotenv`

## Sommaire

- [`dotenv`](#)
- [`.env`](#)
- [Importation de `dotenv`](#)
- [`process.env](#)

- [Ne jamais publier d'informations sensibles !](#)

### `dotenv` [^](#sommaire)

Le package `dotenv` est une bibliothèque `Node.js` qui permet de gérer facilement les variables d'environnement dans une application. Il est principalement utilisé pour charger les variables définies dans un fichier `.env` et les rendre accessibles dans l'objet global `process.env`.

Cela est particulièrement utile pour stocker des informations sensibles comme des clés d'**API**, des chaînes de connexion à une base de données ou des configurations spécifiques à un environnement (développement, production, etc.).

Installez le paquet `dotenv` pour définir les variables d'environnement de l'application :

`npm install dotenv`

#### Pourquoi utiliser dotenv ?

1. **Sécurité :** Les informations sensibles ne sont pas directement dans le code source.
2. **Flexibilité :** Les configurations changent en fonction de l'environnement (local, test, production).
3. **Simplicité :** Pas besoin de définir manuellement les variables d'environnement dans chaque machine ou serveur.

### `.env` [^](#sommaire)

1. `dotenv` lit un fichier `.env` (contenant des paires **clé-valeur**) à la racine du projet.
2. Il charge ces paires **clé-valeur** dans `process.env`.
3. il est ensuite possible d'accéder à ces variables dans le code via `process.env`.

Le fichier `.env` contient les variables au format **clé-valeur** :

**Exemple :**

```javascript
API_KEY=12345abcdef
DB_HOST=localhost
DB_USER=root
DB_PASS=securepassword
```

**Création du fichier `.env` :**

`touch .env`

Ajoutez les variables d'environnements nécessaires.

### Importation de `dotenv` [^](#sommaire)

```javascript
import "dotenv/config";
```

### `process.env` [^](#sommaire)

Les variables sont ensuite accessibles dans l'application, via `process.env.KEY`.

### Ne jamais publier d'informations sensibles ! [^](#sommaire)

Le fichier `.env` doit **TOUJOURS** être ajouté dans le fichier `.gitignore` afin de ne pas partager des données sensibles via un dépôt public.

```powershell
// .gitignore
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

#  Express.js | Initialisation d'un nouveau projet

## Sommaire

- [Création d'un nouveau projet](#création-dun-nouveau-projet)

- [Création d'un fichier package.json](#création-dun-fichier-packagejson)

- [Autoriser l'utilisation des module](#autoriser-lutilisation-des-module)

- [Installation d'Express au sein du projet](#installation-dexpress-au-sein-du-projet)

- [Création du fichier index.js](#création-du-fichier-indexjs)

- [Lancement de l'application](#lancement-de-lapplication)

### Création d'un nouveau projet [^](#sommaire)

Créé un nouveau répertoire de projet, et se placer dedans :

```powershell
mkdir hello-express
cd hello-express
```

### Création d'un fichier package.json [^](#sommaire)

Créé un fichier `package.json` pour l'application :

```powershell
npm init -y
```

### Autoriser l'utilisation des module [^](#sommaire)

Ajoute la propriété `"type": "module"` dans ton package.json :

```json
{
  "name": "hello-express",
  "type": "module",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": "",
  "dependencies": {
    "express": "^4.21.0"
  }
}
```

### Installation d'Express au sein du projet [^](#sommaire)

Installer **Express** via `npm` en utilisant la commande suivante :

`npm install express`

### Création du fichier index.js [^](#sommaire)

```javascript
import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const port = 3310;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
```

### Renvoyer un objet tableau au format JSON [^](#sommaire)

Dans le cas d'une **API**, c'est un objet ou un tableau, formaté en JSON qu'il faudra renvoyer. Pour sce faire, utiliser la méthode `res.json()` :

```javascript
const walter = { alias: "Heisenberg" };

const sayMyName = (req, res) => {
  res.json(walter);
};

app.get("/who", sayMyName);
```

### Lancement de l'application [^](#sommaire)

Lancer l'application avec la commande suivante :

`node --watch index.js`

L'option `--watch` provoque le **redémarrage** de l'application à chaque **modification d'un fichier**.

Sans l'option `--watch`, l'application ne redémarrera pas automatiquement. Il faudra arrêter le serveur avec `ctrl + C` et le relancer après chaque modifications.

### Ouverture du navigateur sur le bon port [^](#sommaire)

Ouvrir le navigateur à l'aide de l'url suivante :

`http://localhost:3310/`

Le numéro du port doit correspondre à celui indiquer dans le fichier `index.js`.

[Retour au sommaire](#sommaire)

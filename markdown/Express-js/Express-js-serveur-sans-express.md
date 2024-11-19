# Express.js | Initialisation d'un projet sans Express

## Sommaire

- [Création d'un nouveau projet](#création-dun-nouveau-projet)

- [Création d'un fichier package.json](#création-dun-fichier-packagejson)

- [Création du fichier index.js](#création-du-fichier-indexjs)

- [nodemon pour le redémarrage du serveur](#nodemon-pour-le-redémarrage-du-serveur)

- [Création de l'application serveur](#création-de-lapplication-serveur)

- [Déclaration des routes](#déclaration-des-routes)

- [Écoute du port](#écoute-du-port)

- [Lancement de l'application](#lancement-de-lapplication)

### Création d'un nouveau projet [^](#sommaire)

Créé un nouveau répertoire de projet, et se placer dedans :

```powershell
mkdir hello-http
cd hello-http
```

### Création d'un fichier package.json [^](#sommaire)

Créé un fichier `package.json` pour l'application :

```powershell
npm init
```

### Création du fichier index.js [^](#sommaire)

Créer un fichier `index.js` vierge :

`touch index.js`

### nodemon pour le redémarrage du serveur [^](#sommaire)

Pour que le serveur redémarre automatiquement à chaque modification du code, installez le **package nodemon** en tant que dépendance de développement :

`npm install --save-dev nodemon`

Sans l'option `nodemon`, l'application ne redémarrera pas automatiquement. Il faudra arrêter le serveur avec `ctrl + C` et le relancer après chaque modifications.

### Création de l'application serveur [^](#sommaire)

Le fichier `index.js`, importe le module `node:http` pour créer un **serveur HTTP** :

```javascript
const http = require("node:http");
const app = http.createServer();
```

`node:http` est un module permettant de créer un **serveur HTTP**.

`createServer()` est une fonction qui permet d'initialiser le serveur.

### Déclaration des routes [^](#sommaire)

Chaque fois que le **serveur** reçoit une **requête HTTP**, il doit exécuter une fonction spécifique pour produire la réponse. Cette fonction, appelée **gestionnaire de requêtes**, est définie à l'aide de la méthode `on()` :

```javascript
const handleRequest = (req, res) => {
  res.end("Hello World!");
};

app.on("request", handleRequest);
```
 
### Écoute du port [^](#sommaire)

Le code suivant est identique à un projet serveur avec Express :

```javascript
const port = 3310;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
```

### Lancement de l'application [^](#sommaire)

Lancez l'application avec la commande suivante :

`npx nodemon index.js`

[Retour au sommaire](#sommaire)

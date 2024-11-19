# Node.js | Les paquets NPM

## Sommaire

- [Comment utiliser les paquets NPM](#comment-utiliser-les-paquets-npm)

- [Initialiser un projet Node.js](#initialiser-un-projet-nodejs)

- [package.json](#packagejson)

- [Installation du package chalk](#installation-du-package-chalk)

- [Importer la dépendance chalk](#importer-la-dépendance-chalk)

### Comment utiliser les paquets NPM [^](#sommaire)

Pour installer des **paquets** et les utiliser dans notre code, nous devons d'abord **définir notre fichier manifeste**.

Un **manifeste** est un fichier qui nous permet, entre autres, de **gérer nos dépendances** en listant tous les paquets dont notre code dépend pour fonctionner.

### Initialiser un projet Node.js [^](#sommaire)

Créer un **manifeste** avec **Node.js** consiste généralement à **générer un fichier** qui contient des informations sur le projet ou l'application.

Ce manifeste peut prendre différentes formes selon l'objectif, comme un fichier **package.json** pour un projet **Node.js**, un fichier **manifest.json** pour une **Progressive Web App (PWA)**, ou un autre type de fichier selon les besoins.

```powershell
npm init
```

Cette commande vous demandera des **informations sur votre projet**, comme son **nom**, la **version**, la **description**, le **point d'entrée (main)**, etc. Vous pouvez appuyer sur `Entrée` pour accepter les valeurs par défaut ou entrer les informations de votre choix.

Pour éviter toutes ces questions, initiez le projet **Node.js** avec `-y` :

```powershell
$ npm init -y
Wrote to C:\Users\fabri\Downloads\formation-web\markdown\node-js\npm-getting-started\package.json:

{
  "name": "npm-getting-started",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": ""
}
```

### package.json [^](#sommaire)

Le dossier du projet contient maintenant un nouveau fichier : `package.json`.

```powershell
$ ls -a
./  ../  package.json
```

Ce fichier **JSON** contient, entre autres, la liste de toutes les dépendances que le projet va utiliser.

### Installation du package chalk [^](#sommaire)

Tapez la commande suivante dans le terminal :

```powershell
$ npm install chalk

added 1 package, and audited 2 packages in 1s

1 package is looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```

Avec cette commande, nous disons à notre **terminal** d'aller sur les **serveurs npm** et de **télécharger** un paquet appelé **chalk** et de l'ajouter comme dépendance à notre package.json (si tu ouvres à nouveau le fichier package.json, tu verras chalk listé en dépendance) :

```powershell
{
  "name": "npm-getting-started",
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
    "chalk": "^5.3.0"
  }
}
```

Un nouveau dossier nommé `node_modules` a été créé. Il contient le code de chaque paquet que nous installons :

```powershell
fabri@MSI MINGW64 ~/Downloads/formation-web/markdown/node-js/npm-getting-started (main)
$ ls
node_modules/  package.json  package-lock.json

fabri@MSI MINGW64 ~/Downloads/formation-web/markdown/node-js/npm-getting-started (main)
$ cd node_modules/

fabri@MSI MINGW64 ~/Downloads/formation-web/markdown/node-js/npm-getting-started/node_modules (main)
$ ls
chalk/
```

**Important !** Ne **commit** et ne **pousse** **jamais** un dossier **node_modules** vers **github** ! Cela rendrait ton dépôt trop lourd. Un nouveau projet Node doit avoir un fichier **.gitignore** à la racine du projet, avec **node_modules** à l'intérieur.

Si tu as accidentellement versionné node_modules tu peux facilement réparer çà :

```powershell

# Once you have properly setup the  *.gitignore* file with "node_modules/" in it 
git rm -r --cached ./node_modules # remove all versioned files in node_modules from the index
git add . # add every file except what's in .gitignore to the index
git commit -m "un-version node_modules 😅" # save the changes
git push # send the modifications 
```

Depuis le fichier **package.json** (qui devrait lui être versionné), n'importe quel utilisateur pourra recréer le dossier **node_modules** en lançant simplement `npm install` après avoir cloné ou rapatrié des modifications depuis un dépôt **Node distant**.

### Importer la dépendance chalk [^](#sommaire)

Créé un fichier `index.js` et tapez le code ci-dessous :

```javascript
import chalk from 'chalk';
console.log(chalk.blue('Hello npm!'));
```

Modifier ensuite le fichier `package.json` afin d'avoir ce rendu :

```powershell
{
  "type": "module",
  "dependencies": {
    "chalk": "^5.0.0"
  }
}
```

Exécutons maintenant ce code sur notre terminal avec :

```powershell
node index.js
```

Nous voyons notre message coloré en bleu !

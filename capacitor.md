# Capacitor

## Introduction

Capacitor est un runtime natif multi-plateforme qui facilite la création d'applications mobile pour IOS et Android.

## Guide d'installation

### Créer une nouvelle application Capacitor

Le package `@capacitor/create-app` peut-être utilisé pour créer rapidement une application Capacitor :
```bash
npm init @capacitor/app@latest
```

### Ajouter Capacitor a un projet existant

Capacitor a été conçu pour se lancer dans n'importe quelle application Javascript. Cependant, tous exigences sont requises. Le projet doit contenir :

- 1 fichier `package.json`;
- 1 dossier `dist` ou `www`;
- 1 fichier `index.html`.

**Info**

Pour fonctionner, Capacitor a besoin d'une balise `<head>` dans le fichier `index. html`.

### Installer Capacitor en ligne de commande

```bash
npm i @capacitor/core
npm i -D @capacitor/cli
```

### Initialiser la configuration de Capacitor

Lors de l'initialisation, Capacitor posera quelques questions pour configurer le projet.  Utiliser le questionnaire CLI :

`npx cap init`

Il créera le fichier de configuration incluant le dossier de sortie du projet :

- `www` pour Angular
- `build` pour React
- `public` pour Vue

### Créer une application IO et Android

`npm i @capacitor/android @capacitor/ios`

Une fois les plateformes ajoutées  au `package.json`, les projets peuvent être installés avec les commandes suivantes :

```bash
npx cap add android
npx cap add ios
```

### Synchroniser l'application web

Synchroniser l'application web et installer les dépendances du projet :

`npx cap sync`
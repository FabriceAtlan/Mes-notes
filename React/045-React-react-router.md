# React | React router

## Sommaire

- [Introduction](#introduction)

- [Agir à la racine](#agir-à-la-racine)

- [Mise en place](#mise-en-place)

	- [Installation de react-router-dom](#installation-de-react-router-dom)

- []()

### Introduction [^](#sommaire)

**React Router** est un outil qui facilite la **gestion de la navigation** dans une application React en **synchronisant l’URL du navigateur** avec les composants de page et en fournissant des fonctionnalités de routage avancées.

Voir la documentation [React Router](https://reactrouter.com/en/main).

### Agir à la racine [^](#sommaire)

Pour **modifier l’url du navigateur** et avoir une gestion de la navigation, nous allons mettre de côté `App.tsx` pour l’instant, et nous intéresser à `main.tsx` dont une version allégée ressemble à ceci :

```javascript
// main.tsx

import ReactDOM from "react-dom/client";
import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
```

C’est le **point de départ** de notre application où nous initialisons React et affichons le composant `App`.

**Voici ce qui se passe dans ce code :**

- `import ReactDOM from "react-dom/client";`

	- Cette ligne **importe** le **module react-dom/client** dont nous utiliserons ensuite la **méthode** `createRoot`.
	
	- `createRoot` permet de créer une **racine** à partir de laquelle un **composant React** va pouvoir être **monté** et **affiché** dans le `DOM`.

- `import App from "./App.tsx";`

	- Cette ligne **importe le composant** `App` que nous avons créé dans le fichier `App.tsx`.

- `createRoot(document.getElementById("root")).render(<App />);`

	- Cette partie du code crée une **nouvelle racine** pour l’application (généralement un **élément HTML** avec l’**ID root**) en utilisant `createRoot`. Ensuite, la méthode `.render()` est appelée avec le **composant** `App` en tant que contenu à afficher. Cela signifie que le composant `App` est la racine de notre application React, et il sera rendu dans l’élément avec l’ID `root` dans le `HTML`.

### Mise en place [^](#sommaire)

Nous allons utiliser **React Router** pour **gérer la navigation**. **React Router** est une **bibliothèque** qui nous permet de **définir des routes** pour notre **application React**, ce qui signifie que nous pouvons **associer des composants spécifiques à des URL particulières**.

#### Installation de react-router-dom [^](#sommaire)

`react-router-dom` est la version de **React Router** pour le `DOM`.

**Entrez la commandande suivante :**

```npm install react-router-dom```

**Modifiez ensuite `main.tsx` comme ceci :**

```javascript
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
	{
		path: '/', // indiquez la route
		element: "" // élément à importer
	}
])
```

[Retour au sommaire](#sommaire)
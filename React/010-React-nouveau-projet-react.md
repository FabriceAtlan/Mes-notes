# React | Création d'un projet React

## Sommaire

- [Initialisation d'une application React avec Vite](#initialisation-dune-application-react-avec-vite)

  - [Skipper l'étape du choix](#skipper-létape-du-choix)

- [Se placer dans le dossier de l'application](#se-placer-dans-le-dossier-de-lapplication)

- [Installation des dépendances](#installation-des-dépendances)

- [Lancement de l'application React en mode développement](#lancement-de-lapplication-react-en-mode-développement)

- [Documentation React router](#documentation-react-router)

- [Installation de `react-router-dom`](#installation-de-react-router-dom)

- [Imbrication des routes](#imbrication-des-routes)

- [Modification de `main.tsx`](#modification-de-maintsx)

- [Navigation interne](#navigation-interne)

- [Mise à jour de la page avec `Outlet`](#mise-à-jour-de-la-page-avec-outlet)

### Initialisation d'une application React avec Vite [^](#sommaire)

- `npm create vite@latest nom_de_mon_application`

#### Skipper l'étape du choix [^](#sommaire)

- `npm create vite@latest nom_de_mon_application -- --template react-ts`

### Se placer dans le dossier de l'application [^](#sommaire)

- `cd nom_de_mon_application`

### Installation des dépendances [^](#sommaire)

- `npm install`

### Lancement de l'application React en mode développement [^](#sommaire)

- `npm run dev`

### Documentation React router [^](#sommaire)

**Documentation - [React router](https://reactrouter.com/en/main)**

### Installation de `react-router-dom` [^](#sommaire)

```powershell
npm install react-router-dom
```

Le package `react-router-dom` doit être présent dans le fichier `package.json`  :

```json
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-router-dom": "^6.27.0"
  },
```

### Imbrication des routes [^](#sommaire)

Créer le fichier `router.tsx` :

```javascript
// router.tsx

import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './assets/Pages/Home';
import About from './assets/Pages/About';

const router = createBrowserRouter([
	{
		element: <App/>,
		children : [
			{
				path: '/',
				element: <Home/>
			},
			{
				path: '/about',
				element: <About/>
			}
		]
	}
]);

export default router;
```

### Modification de `main.tsx` [^](#sommaire)

Configurer `main.tsx` afin d'importer et de créer les routes :

```javascript
// main.tsx

import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

import router from './router.tsx';

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router}/>
)
```

L'utilisation de la fonction `createRoot` dans le fichier `main.tsx` permet de créer un **point d’ancrage** dans le **DOM** où notre **application React** sera **rendue**.

Nous remplaçons l’utilisation du composant `App` par un `RouterProvider`, en passant notre instance de routeur en tant que propriété :

```javascript
// main.tsx
//...
createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router}/>
)
```

### Navigation interne [^](#sommaire)

Créez **2 fichiers** à titre d'exemple : `Home.tsx` et `About.tsx`

```javascript
// Home.tsx

function Home () {
	return (
		<h1>Home</h1>
	)
}

export default Home;
```

```javascript
// About.tsx

function About () {
	return (
		<h1>About</h1>
	)
}

export default About;
```

Pour la **navigation interne**, il faut utiliser `<Link/>` ou `NavLink`.

Différence entre `Link` et `NavLink` :

`Link`

- **Utilisation principale :** `Link` est utilisé pour naviguer entre les pages ou les composants dans une application React **sans recharger la page**.

`NavLink`

- **Utilisation principale :** `NavLink` est une extension de `Link` qui offre des fonctionnalités supplémentaires pour gérer l'**état actif** d'un lien.
Il ajoute automatiquement une classe CSS ou un style aux liens correspondant à la route active.

Priviligiez la balise `<a>` pour les **redirections externes**.

Exemple avec `Link` :

```javascript
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <nav>
        <Link to={"/"}>Home</Link>
        <Link to={"about"}>About</Link>
      </nav>
    </>
  )
}
```

Exemple avec `NavLink` :

```javascript
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <>
      <nav>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"about"}>About</NavLink>
      </nav>
    </>
  )
}
```

### Mise à jour de la page avec `Outlet` [^](#sommaire)

Au lieu de spécifier explicitement quel composant doit être affiché dans `<main>`, nous pouvons utiliser un outil très pratique de **React Router** : `<Outlet />`.

```javascript
// App.tsx

import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <nav>
        <Link to={"/"}>Home</Link>
        <Link to={"about"}>About</Link>
      </nav>
      <main><Outlet/></main>
    </>
  )
}
```

[Retour au sommaire](#sommaire)
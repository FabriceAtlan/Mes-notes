# React | useEffect

## Sommaire

- [Importer useEffect](#importer-useeffect)

- [React Router - loader](#react-router---loader)

- [loader globale](#loader-globale)

- [Recharger une page](#recharger-une-page)

- [useEffect vs loader](#useeffect-vs-loader)

- []()

### ... [^](#sommaire)

Nous aurons parfois besoin de déclencher du code dès le **démarrage** de la page. Une **approche courante** pour effectuer des instructions au démarrage de la page consiste à utiliser le **hook** `useEffect`.

### Importer useEffect [^](#sommaire)

```javascript
import { useEffect, useState } from "react";
```

### React Router - loader [^](#sommaire)

L’utilisation de `useEffect` est idéale pour effectuer des **actions au démarrage**, mais **React Router** apporte un **concurrent sérieux** : les **loaders**.

**Importer le **hook** `useLoaderData` dans le composant destiné à récupérer les données :**

```javascript
import { useLoaderData } from "react-router-dom";
```

**Déclarer des données **router** avec `loader` dans le fichier, ici `main.tsx` :**

```javascript
// main.tsx

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => {return getWeatherOfTheDay();}
      },
			// ...
		]
	}
]);

// ...
```

Le **hook** `useLoaderData` permet de récupérer les données du **loader**. Cela garantit que les données sont **disponibles** dès le rendu de la page.

### loader globale [^](#sommaire)

Une alternative intéressante est d’utiliser un **loader global**. Au lieu d’associer le **loader** directement à la **route de la page**, nous pouvons définir un loader au **niveau de l’application**. Ajouter un **id** sur la route de l’application :

```javascript
// router creation

const router = createBrowserRouter([
  {
    element: <App />,
    loader: () => {
      return getWeatherOfTheDay();
    },
    id: "app",
    children: [
      {
        path: "/",
        element: <Home />,
      },
      // ...
    ],
  },
]);

// ...
```

Les données sont **chargées** dès le **démarrage de l’application** et sont **disponibles pour toutes les pages**.

Les données **chargées globalement** peuvent être accessibles dans n’importe quelle partie de l’application, et nous pouvons les récupérer à l’aide du **hook** `useRouteLoaderData` en spécifiant l’identifiant du loader ciblé, dans ce cas, **"app"** :

```javascript
import { useRouteLoaderData } from "react-router-dom";

function Home() {
  const weather = useRouteLoaderData("app") as string;

  return (
    <>
      <h1>Hello from Home</h1>
      <p>Today is a {weather} day</p>
    </>
  );
}

export default Home;
```

### Recharger une page [^](#sommaire)

Lorsqu’il s’agit de **mettre à jour des données** ou d’**effectuer des actions** en réponse à des changements dans l’application, **React** propose l’utilisation de `useEffect` et **React Router** les **loaders**.

Un moyen courant de **gérer les mises à jour** dans un composant React est d’utiliser le **hook** `useEffect` :

```javascript
// Article.tsx

import { useEffect, useState } from "react"; // Déclaration de useEffect
import { useParams } from "react-router-dom";

const allData = [
  {
    id: 1, // identifiant
    title: "Lorem Ipsum",
    content: "Lorem ipsum dolor sit amet",
  }
];

type Data = typeof allData[0];

const getSomeData = (id: number) => {
  return allData.find((article) => article.id === id) as Data | null;
};

function Article() {
  const { id } = useParams();

  const [data, setData] = useState(null as Data | null);

  useEffect(() => {
    const idAsInt = parseInt(id ?? "0");

    const someData = getSomeData(idAsInt);

    setData(someData);
  }, [id]);

  return (
    data != null && (
      <article>
        <h1>{data.title}</h1>
        <p>{data.content}</p>
      </article>
    )
  );
}

export default Article;
```

Une autre approche pour gérer les **mises à jour** consiste à utiliser les **loaders** de **React Router** :

```javascript
// ...

const allData = [
  {
    id: 1,
    title: "Lorem Ipsum",
    content: "Lorem ipsum dolor sit amet",
  },
  {
    id: 2,
    title: "Schnapsum",
    content: "Lorem Elsass ipsum Salut bisamme",
  },
  {
    id: 3,
    title: "Cupcake Ipsum",
    content: "Tiramisu pastry wafer brownie soufflé",
  },
];

type Data = typeof allData[0];

const getSomeData = (id: number) => {
  return allData.find((article) => article.id === id) as Data | null;
};

// router creation

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      // ...
      {
        path: "/articles/:id",
        element: <Article />,
        loader: ({ params }) => {
          const idAsInt = parseInt(params.id ?? "0");

          return getSomeData(idAsInt);
        },
      },
    ],
  },
]);

// ...
```

Dans cet exemple, un **loader** est associé à la route `/articles/:id`. Le **loader** est déclenché automatiquement chaque fois qu’un utilisateur accède à une **URL** correspondant à cette **route**.

De manière similaire aux props des composants, params est extrait du premier paramètre de la fonction, et nous donne accès à l’id dans l’URL.

Rendre le résultat du **loader** (les données de l’article) disponible pour le composant Article via le **hook** `useLoaderData` :

```javascript
import { useLoaderData } from "react-router-dom";

type Data = {
    title: string;
    content: string;
}

function Article() {
  const data = useLoaderData() as Data;

  return (
    <article>
      <h1>{data.title}</h1>
      <p>{data.content}</p>
    </article>
  );
}

export default Article;
```

### useEffect vs loader [^](#sommaire)

|Méthodes|Avantages|Inconvénients|
|:------:|:--------|:------------|
|useEffect| **1. Flexibilité :** `useEffect` permet de réagir à divers types de changements, tels que les modifications d’état ou les mises à jour de props.| **1.** Difficulté à gérer le chargement initial : Pour gérer le chargement initial de manière efficace, des rendus conditionnels ou des états spéciaux sont souvent nécessaires.|
||**2. Contrôle total :** Vous avez un contrôle total sur les actions effectuées en réponse aux changements.| **2.** Peut entraîner des rendus inutiles : useEffect peut être déclenché plusieurs fois pour un même changement, ce qui peut provoquer des rendus inutiles.|
|Loaders | **1. Préchargement des données :** Les loaders de React Router permettent de précharger les données avant le rendu, améliorant ainsi les performances et l’expérience utilisateur. | **Moins de flexibilité :** Les loaders sont conçus pour le chargement de données lors du changement de route, ce qui les limite à ce contexte. Si vous avez besoin de réagir à des changements plus variés, useEffect peut être plus adapté. |
|  | **2. Gestion automatique du chargement initial :** Les loaders sont déclenchés automatiquement lors de l’activation de la route, ce qui facilite la gestion du chargement initial. | |
|| **3. Structure claire :** Les loaders sont associés aux routes correspondantes, ce qui rend la logique de chargement plus claire et structurée.||

[Retour au sommaire](#sommaire)
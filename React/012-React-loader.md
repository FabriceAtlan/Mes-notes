# React | `loaders`

## Sommaire

## 1. Qu'est-ce qu'un loader ?

Un `loader` est une fonction utilisée dans **React Router** pour :

- Charger des données nécessaires à une route avant de rendre le composant.

- Assurer que les données soient prêtes lorsque la route s'affiche.

---

## 2. Comment définir un loader ?

Un `loader` est défini dans l'objet `loader` d'une **route**.

```tsx
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    loader: async () => {
      const data = await fetch("/api/home");
      return data.json();
    },
  },
]);
```

---

## 3. Récupérer les données dans le composant

Les données chargées par le `loader` sont accessibles via le hook `useLoaderData`.

```tsx
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const data = useLoaderData();

  return <div>{JSON.stringify(data)}</div>;
};
```

---

## 4. Gestion des erreurs

Si le `loader` échoue (par exemple, une requête API retourne une erreur), une route peut définir un `errorElement` pour afficher une interface dédiée.

```tsx
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    loader: async () => {
      const response = await fetch("/api/home");
      if (!response.ok) throw new Error("Erreur de chargement");
      return response.json();
    },
    errorElement: <div>Erreur de chargement des données</div>,
  },
]);
```

---

## 5. Exemple complet avec sous-routes

Les `loaders` peuvent être utilisés sur des sous-routes.

### Structure des routes

```tsx
const router = createBrowserRouter([
  {
    path: "/artists",
    element: <Artists />,
    loader: async () => {
      const response = await fetch("/api/artists");
      return response.json();
    },
    children: [
      {
        path: ":artistId",
        element: <ArtistDetail />,
        loader: async ({ params }) => {
          const response = await fetch(`/api/artists/${params.artistId}`);
          return response.json();
        },
      },
    ],
  },
]);
```

### Récupération des données dans les sous-routes

```tsx
const ArtistDetail = () => {
  const artist = useLoaderData();

  return <div>{artist.name}</div>;
};
```

---

## 6. Paramètres dynamiques dans les loaders

Les paramètres d'URL `params` sont automatiquement passés au `loader`, permettant de charger des données spécifiques.

```tsx
const loader = async ({ params }) => {
  const albumId = params.albumId; // Récupérer l'ID de l'album depuis l'URL
  const response = await fetch(`/api/albums/${albumId}`);
  return response.json();
};
```

---

## 7. Combinaison avec `useNavigate`

Un `loader` peut être associé à une navigation dynamique, pour recharger les données lorsque l'URL change.

```tsx
const AlbumList = () => {
  const navigate = useNavigate();

  return (
    <ul>
      <li onClick={() => navigate("/albums/1")}>Album 1</li>
      <li onClick={() => navigate("/albums/2")}>Album 2</li>
    </ul>
  );
};
```

---

## 8. Résumé des étapes

1. **Définir le loader** dans la route.

2. **Charger les données** via une requête asynchrone.

3. **Récupérer les données** avec `useLoaderData` dans le composant.

4. **Gérer les erreurs** avec un `errorElement`.

Les `loaders` garantissent que vos données sont disponibles avant de rendre les composants, améliorant ainsi l'expérience utilisateur.

[Retour au sommaire](#sommaire)
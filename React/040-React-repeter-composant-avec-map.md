# React | Répéter un composant avec map

## Sommaire

- [Répéter des élément contenu dans un tableau](#répéter-des-élément-contenu-dans-un-tableau)

- [Filtrer un tableau](#filtrer-un-tableau)

### Répéter des élément contenu dans un tableau [^](#sommaire)

**React** a besoin d'un **identifiant** unique pour identifier les éléments d'une liste d'un **tableau**. Cet **identifiant** prend la forme d'une **props** que tu dois passer à chaque **noeud JSX** produit par un **map**. Cette **props** se nomme `key` (c'est un mot-clé réservé).

**Concrètement ça donne :**

```javascript
function App() {
  const cart = [
    { name: "apple", emoji: "🍏" },
    { name: "banana", emoji: "🍌" },
    { name: "grape", emoji: "🍇" },
    { name: "watermelon", emoji: "🍉" },
  ];

  return (
    <section>
      <h1>shopping list</h1>
      <ul>
        {cart.map((article, index) => (
          <li key={index}>
            {article.emoji} {article.name}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default App;
```

<p style="padding: 1rem; background-color: rgb(100,0,0);">Utiliser l'index d'un tableau est une mauvaise pratique.</p>

**Considéront le code suivant :**

```javascript
import { useState } from "react";

const initialCart = [
  { name: "apple", emoji: "🍏" },
  { name: "banana", emoji: "🍌" },
  { name: "grape", emoji: "🍇" },
  { name: "watermelon", emoji: "🍉" },
];

function App() {
  const [cart, setCart] = useState(initialCart);

  const removeArticle = (article) => {
    setCart(cart.filter((item) => item !== article));
  };

  return (
    <section>
      <h1>shopping list</h1>
      <ul>
        {cart.map((article) => (
          <li key={article.name}>
            {article.emoji} {article.name}
            <input type="text" defaultValue={article.name} />
            <button onClick={() => removeArticle(article)}>remove</button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default App;
```

### Filtrer un tableau [^](#sommaire)

```javascript
function Article({ name, emoji }) {
  return (
    <li>
      {emoji} {name}
    </li>
  );
}

function App() {
  const cart = [
    { name: "apple", emoji: "🍏" },
    { name: "banana", emoji: "🍌" },
    { name: "grape", emoji: "🍇" },
    { name: "watermelon", emoji: "🍉" },
  ];

  return (
    <section>
      <h1>shopping list</h1>
      <ul>
        {cart
          .filter((article) => article.name.includes("e"))
          .map((article) => (
            <Article
              key={article.name}
              name={article.name}
              emoji={article.emoji}
            />
          ))}
      </ul>
    </section>
  );
}

export default App;
```

Dans cet exemple, nous avons filtré le tableau du state afin de ne récupérer que les fruits contenants la lettre "e", avant de faire le map servant à l'affichage.

[Retour au sommaire](#sommaire)
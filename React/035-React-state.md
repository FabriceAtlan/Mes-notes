# React | Utiliser un state

## Sommaire

- [Introduction](#introduction)

- [Comment ça se présente ?](#comment-ça-se-présente)

- [Convention de nommage](#convention-de-nommage)

- [Comment utiliser le state ?](#comment-utiliser-le-state)

### Introduction [^](#sommaire)

Nous allons voir comment gérer des valeurs dynamiques à l'intérieur d'un composant grâce au **state**.

Dans React, un **state** est géré avec des `fonctions` de type `hook` : ce sont des fonctions dont le nom commence par `use`.

Dans le cas d'un **state**, tu vas « prévenir » **React** que tu veux utiliser un état à l'intérieur de ton composant avec le `hook` `useState` (littéralement, "utiliser un état").

### Comment ça se présente ? [^](#sommaire)

```javascript
import { useState } from "react";

function App() {
  const state = useState("hello");

  console.log(state)

  return <p>Hello world !</p>;
}

export default App;
```

`useState` **renvoie un tableau** avec **2 éléments** :

1. le premier est une **valeur**

2. le second est une **fonction** `dispatchSetState`.

**Le premier élément** de ce tableau est en fait la **valeur dynamique** que nous voulons **manipuler** dans notre composant.

**Le second élément** est une **fonction** qui va nous permettre de **mettre à jour la première valeur** qui représente le `state`.

<p style="background-color:rgb(100,0,0); padding:.5rem;">Pour modifier la valeur d'un state il faut toujours utiliser la fonction prévue à cet effet.</p>

Il est possible de récupérer ces **2 éléments du tableau** retourné par `useState` dans des variables pour plus de lisibilité :

```javascript
const state = useState("hello");
const message = state[0];
const setMessage = state[1];
```

### Convention de nommage [^](#sommaire)

<p style="background-color:rgb(100,0,0); padding:.5rem;">Par convention, il faut nommer le <strong>setter</strong> d'un <strong>state</strong> par le nom de la variable précédé du mot <code>set</code> : si le state est stocké dans une variable <code>foo</code>, alors le setter doit être <code>setFoo</code>.</p>

**Les fonctions transmises aux gestionnaires d'événements doivent être transmises et non appelées. Par exemple :**

- Le passage d'une fonction est correct : `<button onClick={ handleClick }>`.

- L'appel d'une fonction est incorrect : `<button onClick={ handleClick() }>`.

### Comment utiliser le state ? [^](#sommaire)

Avant de commencer, nous allons introduire une notion que nous verrons plus en détail dans la suite du parcours : les **event listeners**.

**Procéder comme suit pour placer un event listener sur un bouton en React :**

```javascript
function App() {
  const handleClick = () => {
    console.log("you clicked");
  };

  return <button type="button" onClick={handleClick}>Click</button>;
}

export default App;
```

<p style="background-color: rgb(100,0,0);"><code>handleClick</code> est un <strong>gestionnaire d'évènements</strong>. Elles doivent être définies à l'intérieur des composants si elles utilisent un ou plusieurs setters de state.<br>
Par convention, elles ont un nom qui commence par <code>handle</code>, suivi du nom de l'événement.</p>

### Primitive / Non Primitive [^](#sommaire)

Nous avons vu précédemment comment mettre à jour un state avec des **valeurs primitives** (des nombres). Qu'en-est-il des valeurs **non primitives** comme les objets ?

Une variable ne **contient pas réellement l'objet**, mais plutôt une **référence** vers celui-ci. Nous devons donc produire un **nouvel objet** pour rendre la modification **visible**, comme suit :

```javascript
import { useState } from "react";

function App() {
  const [user, setUser] = useState({name: "Bob"});

  const handleClick = () => {
    // user.name = "Alice"; => NO !!!
    setUser({ name: "Alice" })
  };

  return (
    <div>
      <p>{user.name}</p>
      <button onClick={handleClick}>Click</button>
    </div>
  );
}

export default App;
```


[Retour au sommaire](#sommaire)
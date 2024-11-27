# React | Props

## Sommaire

- [Qu'est-ce que c'est ?](#quest-ce-que-cest)

- [Quelques règles](#quelques-règles)

- [Comment procéder ?](#comment-procéder)

- [Passer les `props` en paramètre](#passer-les-props-en-paramètre)

- [Passer plusieurs valeur](#passer-plusieurs-valeur)

- [Quelles valeurs je peux faire passer en props ?](#quelles-valeurs-je-peux-faire-passer-en-props)

- [Déstructurer un objet](#déstructurer-un-objet-props)

### Qu'est-ce que c'est ? [^](#sommaire)

Cela sert à passer des valeurs d'un composant à un autre.

### Quelques règles [^](#sommaire)

- Les **composants React** sont des **fonctions**.

- Les **props** peuvent être transmises uniquement d'un **composant parent** vers un **composant enfant**.

- `props` est une convention pour le **premier paramètre** d'une **fonction composant**.

- `props` est un **objet** qui contient toutes les **clés/valeurs** passées au composant.

- Les **chaînes de caractères** `props` sont passées avec des `""`.

- Les **nombres, objets, variables...** sont passées avec des `{}`.

- Les `props` peuvent passer des valeurs de **types primitifs** (string, number, boolean...) et **non primitifs** (function, object).

### Comment procéder ? [^](#sommaire)

En JavaScript :

```javascript
// file : index.js

import App from "./App";

App();

// file : App.js

import SayHello from "./SayHello";

function App() {
	document.body.innerText = SayHello("Wilder");
}

export default App;

// file : SayHello.js

function SayHello(name) {
  return `Hello ${name}!`;
}

export default SayHello;
```

En React :

```javascript
// file : App.js

import SayHello from "./SayHello";

function App() {
  return SayHello("Wilder");
}

export default App;

// file : SayHello.js

function SayHello(name) {
  return `Hello ${name}!`;
}

export default SayHello;
```

La **différence** réside dans le fait que c'est `React` qui gère la **manipulation du DOM**. Cette partie du code dans le premier exemple a disparu :

```javascript
document.body.innerText = SayHello("Wilder");
```

### Passer les `props` en paramètre [^](#sommaire)

Dans `React`, les props doivent être passer au travers d'un objet et non pas directement en paramètre d'une fontction. 

Exemple :

```javascript
// file : App.js

import SayHello from "./SayHello";

function App() {
  return SayHello({name: "Wilder"});
}

export default App;

// file : SayHello.js

function SayHello(props) {
  return `Hello ${props.name}!`;
}

export default SayHello;
```

Dans `React`, les **composants** sont manipulés avec la syntaxe `JSX`. Plutôt que la syntaxe **JS** `SayHello({name: "Wilder"})`, les **composants** doivent être applés avec la syntaxe **JSX** et utilisés comme des attributs `HTML` :

```javascript
// file : App.js

import SayHello from "./SayHello";

function App() {
  return <SayHello name="Wilder" />;
}

export default App;

// file : SayHello.js

function SayHello(props) {
  return `Hello ${props.name}!`;
}

export default SayHello;
```

### Passer plusieurs valeur [^](#sommaire)

Exemple :

```javascript
// file : App.js

import SayHello from "./SayHello";

function App() {
  return <SayHello name="Alice" age={25} />;
}

export default App;

// file : SayHello.js

function SayHello(props) {
  console.log(props);

  return `Hello my name is ${props.name}, I'm ${props.age}!`;
}

export default SayHello;
```

La syntaxe est différente pour `name` et pour `age`.

Les **chaînes de caractères** peuvent être passées dans les `props` avec des `""` comme les *attributs HTML*. C'est le cas pour `name="Alice"`.

Pour toutes les autres valeurs (nombre, objet, variable...), il faut utiliser des `{}` pour entourer les **valeurs JavaScript**. C'est le cas pour `age={25}`.

### Quelles valeurs je peux faire passer en props ? [^](#sommaire)

N'importe quel type de valeur :

- **types primitifs** (string, number, boolean...)

- **non primitifs** (function, object)

### Déstructurer un objet `props` [^](#sommaire)

Exemple **sans destructuration** :

```javascript
function Cart(props) {
  return `You bought ${props.product.quantity} ${props.product.name} for ${props.calculate(props.product)}€`;
}

export default Cart;
```

Exemple **avec destructuration** :

```javascript
function Cart(props) {
  const { product, calculate } = props; // Destructuration du props

  return `You bought ${product.quantity} ${product.name} for ${calculate(product)}€`;
}

export default Cart;
```

Le `JSX` est plus lisible de cette manière. Pour aller plus loin, déstructurer les props directement dans les paramètres de la fonction composant :

```javascript

function Cart({ product, calculate }) {
  return `You bought ${product.quantity} ${product.name} for ${calculate(product)}€`;
}

export default Cart;
```

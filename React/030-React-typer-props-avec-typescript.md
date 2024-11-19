# React | Typer les props avec Typescript

## Sommaire

- [Introduction](#introduction)

- [L'nterface TypeScript](#linterface-typescript)

- [Comment ça marche ?](#comment-ça-marche)

- [Typer les props d'un composant React](#typer-les-props-dun-composant-react)

- [`props` optionnelles](#props-optionnelles)

### Introduction [^](#sommaire)

Nos projets intègrent **Typescript** qui est en mesure de « deviner » tout seul le typage à partir du contexte : c'est l'**inférence de type**.

Le mécanisme fonctionne bien, mais **TypeScript** ne peut pas tout deviner. Il va falloir typer explicitement les props.

### L'interface TypeScript [^](#sommaire)

En **TypeScript**, une **interface** est un moyen de **définir la structure d'un objet**. Elle permet de **spécifier les types des propriétés** attendues pour cet objet, ce qui rend le code plus robuste et facile à maintenir.

Cela est particulièrement utile dans **React**, où les interfaces sont souvent utilisées pour **typer les props des composants**, garantissant ainsi que les données passées à un composant respectent une certaine structure.

### Comment ça marche ? [^](#sommaire)

**TypeScript** permet de type les données de plusieurs manières :

- `interface` pour **typer les props** :

```javascript
import React from 'react';

// Définition de l'interface pour les props
interface PersonProps {
  firstName: string;
  lastName: string;
}

// Composant qui affiche le prénom et le nom
const Person = (props: PersonProps) => {
  return (
    <div>
      <p>First Name: {props.firstName}</p>
      <p>Last Name: {props.lastName}</p>
    </div>
  );
};

export default Person;
```

- `type` permet de faire la même chose :

```javascript
import React from 'react';

// Définition d'un type pour les props
type PersonProps = {
  firstName: string;
  lastName: string;
};

// Composant qui affiche le prénom et le nom
const Person = (props: PersonProps) => {
  return (
    <div>
      <p>First Name: {props.firstName}</p>
      <p>Last Name: {props.lastName}</p>
    </div>
  );
};

export default Person;
```

- Typer directement dans la **signature du composant** :

```javascript
import React from 'react';

// Typage directement dans le composant
const Person = ({ firstName, lastName }: { firstName: string; lastName: string }) => {
  return (
    <div>
      <p>First Name: {firstName}</p>
      <p>Last Name: {lastName}</p>
    </div>
  );
};

export default Person;
```

### Typer les props d'un composant React [^](#sommaire)

Il est possible de typer les `props` d'un **composant** React :

```javascript
interface SayHelloProps {
  name: string;
  age: number;
}

function SayHello({name, age}: SayHelloProps) {
  return <p>Hello, my name is {name}, and i'm {age}.</p>;
}

function App() {
  return <SayHello name="Wilder" age={22} />;
} 

export default App;
```

### `props` optionnelles [^](#sommaire)

Déclarer des `props` dans l'interface rend le typage obligatoire. Il est néanmoins possible de rendre des propriétées optionnelles avec le caractère `?` :

```javascript
interface SayHelloProps {
  name: string;
  age?: number;
}
```

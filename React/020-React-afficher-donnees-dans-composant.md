# React | Afficher des données dans un composant

## Sommaire

- [Quelques règles JSX](#quelques-règles-jsx)

- [Comment afficher des données dans un composant ?](#comment-afficher-des-données-dans-un-composant)

- [Expressions VS Instructions](#expressions-vs-instructions)

- [Démonstration](#démonstration)

### Quelques règles `JSX` [^](#sommaire)

**Attention :**

- le `JSX` supporte uniquement l'affichage des **types primitifs**

- le `JSX` ne peux pas exécuter n'importe quel **code** `javascript`

- le code `JavaScript` écris entre accolades `{}` dans du `JSX` est interprété.

### Comment afficher des données dans un composant ? [^](#sommaire)

`JSX` utilie le balisage dans du `JavaScript`. Dans ce balisage, les accolades permettent de revenir en `JavaScript` afin d'intégrer une variable de le code et l'afficher :

```javascript
function SayHello() {
  const message = "Hello !";

  return <p>{message}</p>
}

export default SayHello;
```

Il est également possible d'exécuter du `JavaScript` :

```javascript
function SayHello() {
  const message = "Hello !";

  return <p>{message.toUpperCase()}</p>
}

export default SayHello;
```

La chaîne de caractères `message` est en majuscules. Cela fonctionne car la méthode `toUpperCase` retourne une valeur de type `String` qui est un **type primitif**.

### Expressions VS Instructions [^](#sommaire)

En `JavaScript`, il faut bien distinguer les **expressions** qui retournent une valeur des **instructions** qui peuvent servir à tester des valeurs comme un `if` ou bien à répéter d'autres instructions comme un `for`.

### Démonstration [^](#sommaire)

Afficher une icône correspondante dans du JSX en fonction d'un mot particulier :

```javascript
function WeatherIcon() {
  const weather = "sunny";

  return <p>{weather === "sunny" ? "☀️" : "☁️"}</p>
}

export default WeatherIcon;
```

Comment faire lorsque les conditions sont plus complexes ou lorsqu'il faut utiliser plusieurs instructions ?

Créer une fonction qui renvoie une valeur :

```javascript
function WeatherIcon() {
  const weather = "sunny";

  const printIcon = (name) => {
    const weatherMap = {
      sunny: "☀️",
      cloudy: "☁️",
      rainy: "🌧️",
      stormy: "🌩️"
    }
  
    return weatherMap[name]
  }

  return <p>{printIcon(weather)}</p>
}

export default WeatherIcon;
```

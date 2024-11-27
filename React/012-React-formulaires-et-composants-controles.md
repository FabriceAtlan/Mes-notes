# React | Formulaires et composants contrôlés

## Sommaire

- [Introduction](#introduction)

- [Formulaire HTML](#formulaire-html)

- [Formulaire REACT](#formulaire-react)

### Introduction [^](#sommaire)

Dans un formulaire HTML classique, il est fréquent de spécifier certains attributs dans les champs `<input>`,`<select>`, `<textarea>` et `id` qui permettait de lier le champ à un `<label>`.

En plus des attributs comme `type` et `placeholder`, il y a deux attributs qui ont une fonction spéciale : `name` et `value`.
Ces **deux attributs** sont utilisés ensemble lors de la **soumission** d'un formulaire.

Les **données** transmises à un **serveur**, lors de la soumission d'un formulaire, sont constituées de **paires clé-valeur**.

- L'attribut `name` permet de spécifier la **clé**. Cette **clé** permettra au serveur traitant le **formulaire** de faire la distinction entre les différents champs.

- L'attribut `value` correspond à la **valeur associée**.

### Formulaire HTML [^](#sommaire)

Dans un formulaire **HTML classique**, changer la valeur de l'attribut `value` modifiera le rendu du `DOM`.

Exemple :

```javascript
<form>
  <label for="character">Character:</label>
  <input id="character" name="character" value="Fabrice" />
</form>
```

### Formulaire REACT [^](#sommaire)

L'exemple suivant montre un formulaire en React: 

```javascript
export default function App() {
  return (
    <form>
      <input name="uncontrolled" placeholder="I can be changed" />
      <input name="controlled" value="I CANT'T be changed" />
    </form>
  );
}
```

- l'entrée dont le `name` est `uncontrolled` n'a pas d'**attribut** `value` et peut être **modifiée** librement

- l'entrée dont le `name` est `controlled` a un **attribut** `controlled` et **ne peut pas être modifié**.

### Différence entre un formulaire HTML et React [^](#sommaire)

La **différence fondamentale** concernant la manière dont les champs sont traités en **HTML** ou avec **React** :

- En **HTML**, l'utilisateur peut **modifier** le champ, que l'attribut `value` soit défini ou non.

- Avec **React**, le champ **ne peut être modifié** que si aucun attribut `value` ne lui est donné.

### Champ non contrôlé [^](#sommaire)

Le code ci-dessous montre l'équivalent **React** d'un **formulaire HTML** avec un code de gestion d'événement :

```javascript
function App() {
  return (
    <form className="QuoteForm">
      <label htmlFor="character">Character:</label>
      <input
        id="character"
        name="character"
        type="text"
        onChange={(event) => {
          const input = event.target;
          console.log("NAME:", input.name, "VALUE:", input.value);
        }}
      />
    </form>
  );
}

export default App;
```

**Quelques points notables :**

- Pour la même raison que nous utilisons `className` à la place de `class`, nous utilisons `htmlFor` au lieu de `for` sur le <label> for est un mot-clé réservé en JavaScript.

- L'utilisation de `onChange` qui permet de détecter la saisie de l'utilisateur (événement change sur l'input). C'est l'écouteur d'événement associé à onChange qui est responsable de l'affichage que tu voies dans la console.

- `event.target` dans l'écouteur d'événement de `onChange` est l'élément de la page sur laquelle l'événement s'est produit : le champ `<input>`.

- La console affiche les attributs du champ `<input>` : `name` (qui ne change pas) et `value` (qui varie au fur et à mesure de la saisie).

- Parce qu'il n'y a pas d'attribut `value` défini sur le champ character, la valeur affichée dans le champ est celle saisie par l'utilisateur.

Dans les **composants non contrôlés**, les données sont gérées par le **DOM** lui-même.


[Retour au sommaire](#sommaire)
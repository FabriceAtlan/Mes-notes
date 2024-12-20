# `JSON.stringify`

## Sommaire

- [Définition](#définition)

- [Syntaxe](#syntaxe)

- [Exemples](#exemples)

- [Cas d'utilisation](#cas-dutilisation)

- [Résumé](#résumé)

### Définition [^](#sommaire)

---

`JSON.stringify()` est une méthode JavaScript qui convertit une **valeur JavaScript** (objet, tableau, ou variable simple) en une **chaîne JSON**.

**Elle est utile pour :**

- **Transmettre des données** (ex. : via une API).

- **Stocker des données** dans des formats lisibles (ex. : localStorage).

- **Afficher** des objets pour déboguer.

### Syntaxe [^](#sommaire)

```javascript
JSON.stringify(value, replacer, space);
```

**Paramètres :**

**`value`** : La valeur à convertir (objet, tableau, etc.).

**`replacer`** :

- Une fonction ou un tableau pour **sélectionner/modifier** les propriétés à inclure.

- Valeur par défaut : `null` (toutes les propriétés sont incluses).
  
**`space`** :

- Un entier ou une chaîne pour définir l'indentation.
  
- Par défaut : aucune mise en forme (sortie compacte).

---

### Exemples [^](#sommaire)

**Exemple basique :**

```javascript
const data = { name: "Alice", age: 25 };
const jsonString = JSON.stringify(data);
console.log(jsonString);
// Résultat : '{"name":"Alice","age":25}'
```

**Avec une mise en forme lisible :**

L'argument `space` ajoute une **indentation** :

```javascript
const jsonString = JSON.stringify(data, null, 2);
console.log(jsonString);
// Résultat :
{
  "name": "Alice",
  "age": 25
}
```

**Avec un `replacer`**

```javascript
const data = { name: "Alice", age: 25, city: "Paris" };
const jsonString = JSON.stringify(data, ["name", "city"]);
console.log(jsonString);
// Résultat : '{"name":"Alice","city":"Paris"}'
```

**Ignorer les valeurs circulaires**

Un objet contenant une référence circulaire provoque une erreur :

```javascript
const obj = {};
obj.self = obj;

JSON.stringify(obj); // Erreur : Converting circular structure to JSON
```

### Cas d'utilisation [^](#sommaire)

1. **API et transmission des données :**

2. **Convertir** un objet en une chaîne `JSON` pour l'envoyer via `fetch`.

```javascript
fetch("/api", {
   method: "POST",
   body: JSON.stringify({ name: "Alice", age: 25 }),
   headers: { "Content-Type": "application/json" },
});
```

3. **Stockage local :** Sauvegarder un objet dans `localStorage`.

```javascript
const user = { name: "Alice", age: 25 };
localStorage.setItem("user", JSON.stringify(user));
```

4. **Affichage formaté pour déboguer :**

```javascript
console.log(JSON.stringify(data, null, 2));
```

### Résumé [^](#sommaire)

| **Point**              | **Détail**                                                                 |
|------------------------|---------------------------------------------------------------------------|
| **Utilité**            | Convertir des objets/valeurs en chaînes JSON.                             |
| **Mise en forme**      | Utiliser le paramètre `space` pour rendre la sortie lisible.              |
| **Filtrage des données**| Utiliser `replacer` pour choisir ou modifier les propriétés.              |
| **Attention**          | Les références circulaires provoquent une erreur.                        |

`JSON.stringify` est essentiel pour travailler avec des données au format JSON dans les applications modernes.

---

[Retour au sommaire](#sommaire)

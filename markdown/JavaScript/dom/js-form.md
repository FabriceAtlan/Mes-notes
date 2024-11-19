# JavaScript | Gestion des événements

## Sommaire

- [form](#form)

- [onsubmit](#onsubmit)

- [pseudo-classes CSS `:valid` et `:invalid`](#pseudo-classes-css-valid-et-invalid)

- [preventDefault](#preventdefault)

### form [^](#sommaire)

```javascript
<form action="" method="get" class="form-example">
  <div class="form-example">
    <label for="name">Enter your name: </label>
    <input type="text" name="name" id="name" required />
  </div>
  <div class="form-example">
    <label for="email">Enter your email: </label>
    <input type="email" name="email" id="email" required />
  </div>
  <div class="form-example">
    <input type="submit" value="Subscribe!" />
  </div>
</form>
```

### pseudo-classes CSS `:valid` et `:invalid` [^](#sommaire)

Il est possible d'utiliser les **pseudo-classes CSS** `:valid` et `:invalid` pour mettre en forme un élément `<form>` selon que le contenu des éléments du **formulaire** est **valide ou non**.

### `onsubmit` [^](#sommaire)

Pour obtenir des informations à partir d'éléments d'un formulaire utiliser la **propriété** `onsubmit` sur l'élément `<form>`.

```javascript
const form = document.querySelector("#form");

form.onsubmit = function () {
  console.log("Hello world!");
};
```

**Inconvénient :** à l'appel de `onsubmit`, la **page se rafraîchit** (comportement par **défaut** des **navigateurs**).

### preventDefault [^](#sommaire)

Pour empêcher la page de se rafraîchir, utiliser une **méthode** obtenue à partir de l'objet `event` appelée `preventDefault`.

```javascript
const form = document.querySelector("#form");

form.onsubmit = function (event) {
  event.preventDefault();
  console.log("Hello, world!");
};
```

**Exemple :**

```javascript
<form id="form">
			<label for="firstname">First Name:</label>
			<input
				type="text"
				name="firstname"
				placeholder="Elon"
				id="firstname"
				value=""
			/>
			<label for="lastname">Last Name:</label>
			<input
				type="text"
				name="lastname"
				placeholder="Musk"
				id="lastname"
				value=""
			/>
			<input type="submit" value="send" /> // Bouton à gérer pour l'envoi des données
		</form>
```

### Empêcher la page de se rafraîchir [^](#sommaire)

`preventDefault`

```javascript
const form = document.querySelector("#form");

form.onsubmit = function (event) {
	event.preventDefault();
	console.log("Hello, world!");
};
```

[Retour au sommaire](#sommaire)
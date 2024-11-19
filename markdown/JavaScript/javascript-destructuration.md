# JavaScript | Destructuration

## Sommaire

- [Destructurer un object](#destructurer-un-object)

- [Destructurer un tableau](#destructurer-un-tableau)

	- [Underscore](#underscore)

	- [Underscore avec nombre](#underscore-avec-nombre)
	
	- [Underscore et valeurs vides](#underscore-et-valeurs-vides)

### Destructurer un object [^](#sommaire)

Tapez le code suivant :

```javascript
const monObj = {
	firstName: 'Fabrice',
	lastName: 'Atlan',
	age: 47,
	location: {city: 'Nantes', street: 'Rue de Perray'}
}

const { firstName, age } = monObj;

console.log(firstName, age);
```

Le code retournera :

```powershell
$ node index.js
Fabrice 47
```

### Destructurer un tableau [^](#sommaire)

Pour destructurer un tableau, il faut obligatoirement passer tous les éléments : 

```javascript
const array = ["a", "b", "c", "d", "e"];

const [e0, e1, e2, e3, e4] = array;

console.log(e1);
```

Il existe des conventions de nommage dans le cas où certains éléments ne sont pas destinés à être utilisés :

#### Underscore [^](#sommaire)

```javascript
const array = ["a", "b", "c", "d", "e"];

const [e0, _, __, ___, e4] = array;
```

#### Underscore avec nombre [^](#sommaire)

```javascript
const array = ["a", "b", "c", "d", "e"];

const [e0, _1, _2, _3, e4] = array;
```

#### Underscore et valeurs vides [^](#sommaire)

```javascript
const array = ["a", "b", "c", "d", "e"];

const [e0,,,, e4] = array;
```

# Nodes.js | Modules

## Sommaire

- [CommonJS](#commonjs)

- [En savoir plus sur CommonJS](#en-savoir-plus-sur-commonjs)

### CommonJS [^](#sommaire)

**Node.js** utilise par défaut le système de modules **CommonJS**.

Avec ce système, nous avons accès à une propriété spéciale **module.exports** dans tous nos fichiers JS. Cette dernière permettra d'exposer une partie de notre code au reste de l'application qui ira l'importer avec l'instruction `require`.

**Exemple :**

```javascript
// Création du fichier userInformation.js avec le contenu ci-dessous: 

const name = 'John Doe';
const age = 26;
const passions = ['Ski', 'Hiking', 'Cinema'];

function displayPassions() {
  console.log(`My passions are :`);
  for (let i = 0; i < passions.length; i += 1) {
    console.log(`- ${passions[i]}`);
  }
}

module.exports = {
  name: name,
  age: age,
  displayPassions: displayPassions,
};
```

```javascript
// Création du fichier index.js avec le contenu ci-dessous: 

const userInformation = require('./userInformation');
console.log(`Hi, my name is ${userInformation.name} and I'm ${userInformation.age} years old`);
userInformation.displayPassions();
```

Exécution du fichier `index.js` :

```powershell
$ node index.js
Hi, my name is John Doe and I'm 26 years old
My passions are :
- Ski
- Hiking
- Cinema
```

### En savoir plus sur CommonJS [^](#sommaire)

[Introduction à CommonJS](https://flaviocopes.com/commonjs/)
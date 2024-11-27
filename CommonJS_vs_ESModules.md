# Différence entre CommonJS et ES Modules

## Sommaire

- [Origine](#origine)

- [Syntaxe](#syntaxe)

- [Chargement des modules](#chargement-des-modules)

- [Utilisation dans Node.js](#utilisation-dans-nodejs)

- [Portée](#portée)

- [Comparatif rapide](#comparatif-rapide)

- [Compatibilité](#compatibilité)

### Origine [^](#sommaire)
---

- **CommonJS** : Créé pour **Node.js** avant l’introduction des modules dans **JavaScript natif**.  

- **ES Modules (ESM)** : Introduit nativement dans le standard **JavaScript (ES6, en 2015)** pour une meilleure **compatibilité** avec les **navigateurs modernes**.

### Syntaxe [^](#sommaire)
---

**CommonJS :**

- Utilise `require` pour importer.

- Utilise `module.exports` ou `exports` pour exporter.

```javascript
// Exportation
module.exports = { add, subtract };

// Importation
const math = require('./math.js');
console.log(math.add(2, 3));
```

**ES Modules :**

- Utilise `import` et `export`.

```javascript
// Exportation
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;

// Importation
import { add, subtract } from './math.js';
console.log(add(2, 3));
```

### Chargement des modules [^](#sommaire)
---

- **CommonJS** : Chargement synchrone (bloquant).  
  - Adapté aux environnements côté serveur (Node.js), où la vitesse d’I/O n’est pas un problème.

- **ES Modules** : Chargement asynchrone (non bloquant).  
  - Idéal pour le navigateur, où les ressources doivent être chargées de manière non bloquante.

### Utilisation dans Node.js [^](#sommaire)
---

- **CommonJS** : Par défaut dans **Node.js**.  

- **ESM** : Utilisable dans Node.js à condition :

  1. D’utiliser l’extension `.mjs` **ou**  

  2. De spécifier `"type": "module"` dans le fichier `package.json`.

### Portée [^](#sommaire)
---

- **CommonJS** : Les modules sont évalués à l’exécution (dynamic imports).  

- **ESM** : Analyse statique, ce qui permet des optimisations comme le *tree shaking* (suppression des imports inutilisés).

### Comparatif rapide [^](#sommaire)
---

| **Critères**             | **CommonJS**                | **ES Modules (ESM)**           |
|---------------------------|-----------------------------|---------------------------------|
| **Importation**           | `require`                  | `import`                       |
| **Exportation**           | `module.exports` ou `exports` | `export` / `export default`    |
| **Chargement**            | Synchrone                  | Asynchrone                     |
| **Support natif**         | Node.js par défaut         | Standard JS (navigateur + Node.js avec config) |
| **Optimisation (tree shaking)** | Non pris en charge         | Pris en charge                 |
| **Interopérabilité**      | Peut importer ESM avec hacks | Peut importer CommonJS         |

### Compatibilité [^](#sommaire)
---

- Pour un projet existant en **Node.js**, **CommonJS** est souvent utilisé **par défaut**.  

- Dans des projets **modernes** ou **front-end**, privilégiez **ES Modules** pour leur **standardisation** et leur **compatibilité** avec les outils modernes (comme Webpack, Vite, etc.).

---
[Retour au sommaire](#sommaire)

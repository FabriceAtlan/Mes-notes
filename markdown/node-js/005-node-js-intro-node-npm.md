# Node.js | Introduction à Node.js et npm

## Sommaire

- [Installation](#installation)

- [Vérifier la version de Node.js](#vérifier-la-version-de-nodejs)

- [Vérifier la version de npm](#vérifier-la-version-de-npm)

- [Exécution dun fichier avec Node.js](#exécution-dun-fichier-avec-nodejs)

---

### Installation [^](#sommaire)

```powershell
# installe fnm (Fast Node Manager)
winget install Schniz.fnm

# configurer l'environnement fnm
fnm env --use-on-cd | Out-String | Invoke-Expression

# télécharger et installer Node.js
fnm use --install-if-missing 20
```

### Vérifier la version de Node.js [^](#sommaire)

```powershell
# vérifie que la bonne version de Node.js est présente dans l'environnement
node -v # devrait imprimer `v20.18.0`
```

### Vérifier la version de npm [^](#sommaire)

```powershell
# vérifie que la bonne version de npm est présente dans l'environnement
npm -v # devrait imprimer `10.8.2`
```

### Exécution d'un fichier avec Node.js [^](#sommaire)

Création d'un fichier index.js :

```javascript
const name = 'John Doe';
const age = 26;
const passions = ['Ski', 'Hiking', 'Cinema'];

console.log(name, age, passions);
```

Tapez simplement `node index.js` dans le terminal :

```powershell
$ node index.js
John Doe 26 [ 'Ski', 'Hiking', 'Cinema' ]
```

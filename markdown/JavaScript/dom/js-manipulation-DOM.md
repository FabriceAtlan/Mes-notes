# Manipulation du DOM

## Sommaire

- [Document Object Model](#document-object-model)

- [Qu'est-ce que le DOM ?](#quest-ce-que-le-dom)

- [Sélectionner des éléments HTML](#sélectionner-des-éléments-html)
	
	- [querySelector](#queryselector)
	
	- [querySelectorAll](#queryselectorall)

	- [getElementById](#getelementbyid)

	- [getElementByTagName](#getelementbytagname)

- [Modifier des éléments HTML](#modifier-des-éléments-html)

### Document Object Model [^](#sommaire)

![Infographie - Dom](./src/DOM-model.svg)

### Qu'est-ce que le DOM ? [^](#sommaire)

**DOM** signifie **Document Object Model**. C'est une **interface** utilisée pour **manipuler** le contenu d'une page **HTML**.

Lorsque le navigateur analyse du code **HTML** et **CSS**, il crée également une **représentation** du document sous la forme d'un **objet Javascript**.

Chaque élément de l'**arbre HTML** est appelé un **noeud**.

Cet objet document et ses **noeuds** sont dotés de **nombreuses propriétés** et **méthodes** (fonctions).

[Liste de toutes les méthodes](https://developer.mozilla.org/fr/docs/Web/API/Document)

### querySelector [^](#sommaire)

Avec `document.querySelector`, s'il y a **plus d'un élément** avec le même sélecteur dans le document (ex multiple h1), celui sélectionné par défaut sera la **première occurrence**.

### querySelectorAll [^](#sommaire)

Permet d'obtenir une liste avec **plusieurs éléments**

La méthode collectera **tous les éléments** qui correspondent au sélecteur :

`const allHeadings = document.querySelectorAll('h1');`

La valeur retournée est de type `HTMLCollection` (ressemble aux tableaux).

Utilisez `[]` pour accéder à un **élément**.

### getElementById [^](#sommaire)

`document.getElementById` permet de **sélectionner** un **élément HTML** grâce à son `id`.

### getElementByTagName [^](#sommaire)

`document.getElementByTagName` permet de **sélectionner** un **élément HTML** grâce à son nom de **balise**.

### Sélectionner des éléments HTML [^](#sommaire)

Pour **sélectionner** un élément du **DOM**, l'objet `document` est fourni avec une **méthode** appelée `querySelector`.

La méthode `querySelector` fonctionne de la même manière qu'un **sélecteur CSS**.

Entre **parenthèses**, il suffit d'écrire le **sélecteur souhaité**.

```javascript
// Une classe se sélectionne avec un .
const someDivClass = document.querySelector('.my-div');

// Une classe se sélectionne avec un .
const someDivId = document.querySelector('#another-div');

// Sélection d'un h1 enfant de la classe my-div
const someH1 = document.querySelector('.my-div h1');
```

### Modifier des éléments HTML [^](#sommaire)

[Retour au sommaire](#sommaire)
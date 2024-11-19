# Javascript | Fetcher des données depuis une API

## Sommaire

- [Introduction](#introduction)

- [L'API fetch](#lapi-fetch)

- [Comment ça fonctionne exactement ?](#comment-ça-fonctionne-exactement)

- [Détails](#détails)
	
	- [Étape 1 : la Promise](#étape-1--la-promise)

	- [Étape 2 : la Response](#étape-2--la-response)

### Introduction [^](#sommaire)

**En anglais**, la définition de **Fetch** est « **Go for and then bring back (someone or something)** » **(Va chercher et puis ramène)**.

L’**API Fetch** est un outil nous permettant de **récupérer des ressources extérieures grâce au réseau**.

Elle est aujourd’hui totalement **intégrée à JavaScript** avec la méthode globale `fetch()`.

### L'API fetch [^](#sommaire)

**À quoi ressemble un `fetch()` :**

```javascript
fetch("https://www.wildcodeschool.com/")
  .then(response => response.text())
  .then(data => console.log(data))
  .catch(err => console.error(err));
```

### Comment ça fonctionne exactement ? [^](#sommaire)

`fetch()` lance une **requête HTTP** sur le **réseau** et **retourne** une `Promise` qui sera résolue dès que la `Response` sera **disponible**.

**`fetch()` peut prendre jusqu’à 2 paramètres :**

1. Le premier est la **ressource** que l’on souhaite **récupérer**.

2. Un second qui représente des **options liées à la requête**. Il se caractérise sous la forme d’un **objet** et il est **optionnel**.

### Détails [^](#sommaire)

#### Étape 1 : la **Promise** [^](#sommaire)

`fetch("https://www.wildcodeschool.com/")`

`fetch()` va aller **chercher la ressource** à l'adresse fournie entre parenthèses et nous **retourner une promesse**.

**La Promise représente une opération asynchrone**, c’est-à-dire une tâche de fond permettant d’**effectuer des actions** sans que le reste du **script ne soit bloqué**.

L’objet Promise représente le **succès ou l'échec** de cette **opération asynchrone** et la valeur qui en résulte.

**Une Promise sera toujours dans un de 3 ces états :**

- **pending (en attente) :** état initial, la promesse n'est **ni tenue**, **ni rompue** ;

- **fulfilled (tenue) :** l'opération a **réussi** ;

- **rejected (rompue) :** l'opération a **échoué**.

**Pourquoi ma promise est-elle <pending> ?**

Elle le sera toujours, tant qu’elle ne sera pas totalement résolue.

#### Étape 2 : la Response [^](#sommaire)

```javascript
fetch("https://www.wildcodeschool.com/")
  .then(response => console.log(response))
```

`.then()` (ensuite en français) permet d’**enregistrer les instructions** à exécuter quand le **serveur aura tenu sa promesse** et nous aura fourni une réponse.

Une fois la **Promise** du `fetch()` **résolue**, on obtient un **nouvel objet `Response`**.

Cette `response` contient le **statut HTTP** renvoyé par le serveur (**200** si tout s'est bien passé).

Mais le contenu n’est **pas exploitable** en l’état et nécessite d’**être transformée** en texte grâce à la méthode .text() pour pouvoir être utilisée par la suite.

Dans notre cas, on souhaite récupérer du contenu HTML via cette URL, tu dois donc demander à transformer cette réponse  (bonne question, mais non : il n'y a pas de méthode .html() 😛).

[Retour au sommaire](#sommaire)
```javascript
useEffect(() => {
  const fetchData = async () => {
    try {
      const res = await fetch('url');
      const videogames = await res.json();
      setData(videogames);
    } catch (error) {
      console.error('Erreur de récupération des données :', error);
    }
  };
  fetchData();
}, []);
```

`GET` - Récupération
`POST` - Création

Un GET fetch('http://localhost:3310/api/videogames') est réalisé côté client.

Côté server, il faut une route pour assurer la concordance entre le get fetch client et le serveur.

**Consulter le fichier router**

Création d'une route sur le endpoint api/videaogames.

```javascript
router.get("api/videogames");
```

**Créer un fichier dans le dossier module**

Création d'un dossier videoGame et d'un fichier `videoGameAction.ts` permettant de renvoyer des jeux vidéos. Pour cet exemple, il s'agit d'un tableau d'objets.

```javascript
import type {RequestHandler} from 'express';

Const arrayVideogame = [{...}]

const browse = (req, res: RequestHandler) => {res.json(arrayVideogame)}

export default {browse};
```

Importer le fichier dans le router

```javascript
import videoGame from '...'

router.get("api/videogames", videoGame.browse);
```

**Pour tester des requêtes avec l'extension `Rest Client`**

- Créer un fichier `.http` sur le dossier server
- Mettre ce fichier dans `.gitignore`

Ajouter cette ligne dans le fichier :

```javascript
GET http://localhost3310/api/videogames
```

En haut à gauche du fichier, cliquez sur le nom du fichier.

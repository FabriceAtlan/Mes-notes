# React | Création d'un composant

## Sommaire

- [Qu'est-ce qu'un composant ?](#)

- [Pourquoi utiliser des composants ?](#)

- [React et le Pascal case](#react-et-le-pascal-case)

- [Répertoire components](#react--création-dun-composant)

- [import / export](#import--export)

### Qu'est-ce qu'un composant ? [^](#sommaire)

Un composant est un morceau d'une interface utilisateur :

- Un composant pour la barre de navigation.

- Un composant pour la partie de droite.

- Un composant pour la partie centrale.

- Un composant pour la partie de gauche.

Il permet d'isoler cet élément et les interactions éventuelles qui y sont liées (un événement au clic par exemple).

Dans `React`, les composants forment une hiérarchie. C'est-à-dire que certains composants sont imbriqués dans d'autres composants.

### Pourquoi utiliser des composants ? [^](#sommaire)

- Les composants sont réutilisables et extensibles.

- Découper une interface complexe en composants permet de gagner du temps lors du développement et lors des phases de debug.

- Lorsque tu as des composants interactifs, le fait qu'ils aient leur propre code JavaScript permet de grandement limiter les bugs éventuels.

### React et le Pascal case [^](#sommaire)

Dans `React`, il est impératif d'utiliser le **Pascal case** pour créer nos composants.

### Répertoire components [^](#sommaire)

Une bonne pratique consiste à créer nos composants dans un répertoire `components` dans le dossier `src` du projet.

### import / export [^](#sommaire)

Un composant est déclaré avec le mot-clé `function`. Puis exporté avec les mots-clés `export default`. En faisant cela, le composant est disponible à l'extérieur du fichier.

Pouvoir utiliser un composant, il faut l'importer comme suit :

```powershell
import nom_du_composant from "chemin_du_composant";
```

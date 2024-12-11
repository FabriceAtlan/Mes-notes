# SQL | Architecture

## Sommaire

- [MVC](#mvc)
- [Hexagonale](#architecture-hexagonale)

### MVC [^](#sommaire)

L'architecture **MVC (Modèle-Vue-Contrôleur)** est centrée sur **3 responsabilités** :

- **Modèle :** accéder aux données.
- **Vue :** formater le contenu pour le renvoyer au client (en HTML, JSON, CSV…).
- **Contrôleur :** orchestrer la totalité.

### Architecture hexagonale [^](#sommaire)

L'**architecture hexagonale**, aussi appelée **port and adapter (ports et adaptateurs)**, est une façon de structurer une application pour la rendre plus flexible, facile à tester, et indépendante des technologies externes (comme une base de données ou une API).

**Principe de base :**

- **Noyau central (domaine)** : contient les règles métier et la logique principale. Il est totalement indépendant des détails techniques.
- **Ports :** des interfaces qui définissent les points d'entrée (ex. : API, interface utilisateur) et de sortie (ex. : stockage, communication avec d'autres systèmes).
- **Adaptateurs :** des implémentations concrètes qui connectent les ports aux technologies externes (comme une base de données ou une interface utilisateur).
En isolant le cœur de l'application des détails techniques, une architecture hexagonale permet de facilement remplacer ou modifier des parties externes (comme changer de base de données) sans toucher à la logique métier.

C'est comme une prise électrique : le noyau est la prise standard, et les adaptateurs permettent de brancher différents appareils selon les besoins.

### Architecture modulaire [^](#sommaire)

Une **architecture modulaire**, est une façon d'organiser une application en **modules indépendants** qui regroupent les **fonctionnalités** liées.

Chaque module contenient tout ce dont il a besoin (comme des contrôleurs, des services, et des modèles) pour remplir une tâche spécifique. Par exemple, un module **utilisateurs** pourrait gérer tout ce qui concerne l'**inscription**, la **connexion** et le **profil** des utilisateurs.

C'est une architecture utilisée par des frameworks comme Nest.js pour rendre le code plus clair, plus facile à maintenir et évolutif.

[Retour au sommaire](#sommaire)
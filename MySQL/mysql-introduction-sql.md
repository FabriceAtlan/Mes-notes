# MySQL | Introduction aux bases de données relationnelles

## Sommaire

- [Isidore de Séville](#isidore-de-séville)
- [Un peu de vocabulaire](#un-peu-de-vocabulaire)
- [Nommage](#nommage)
- [Le langage SQL](#le-langage-sql)

### Isidore de Séville [^](#sommaire)

Saint Isidore de Séville, un évêque espagnol du VIIe siècle, est souvent considéré comme le saint patron des développeurs et de l'informatique ! Pourquoi ? Parce qu'il a compilé les "Étymologies", une sorte de première base de données du savoir de l'époque. Cet ouvrage monumental rassemblait des informations sur divers domaines, de la théologie à la grammaire, et constituait une véritable encyclopédie de la connaissance.

Il est donc vénéré par les devs pour avoir créé un système d'organisation de données... avant même l'invention des ordinateurs !

### Un peu de vocabulaire [^](#sommaire)

**MySQL** est un **système de gestion de bases de données relationnelles** (**SGBDR**) en ligne.

**SGBDR (Système de Gestion de Base de Données Relationnelles) :** logiciel permettant de **créer** et **administrer** des bases de données.

**Autre système :**

- MariaDB
- PostgreSQL
- Microsoft SQL Server
- Oracle

- **SQL (Structured Query Language)** est le langage standard pour interagir avec une base de données. Il est utilisé par tous les SGBD.

- **MySQL** est un SGBD très utilisé, appartenant à l'**entreprise Oracle**.

**MySQL** est un logiciel possédant une **architecture client-serveur**. C'est-à-dire que les **données** sont *stockées* sur un **serveur MySQL**. Mais ce serveur n'a pas d'**interface graphique**. Il est simplement là pour stocker, et répondre aux requêtes. Il faut donc utiliser un **client compatible avec MySQL**, pour **envoyer des requêtes au serveur** et interagir avec. Ces requêtes servent notamment à **lire**, **mettre à jour** ou **ajouter** des données dans la base.

**Il y aura donc toujours 2 étapes fondamentales :**

1. Le **client** **envoie** une requête SQL au serveur
2. Le **serveur analyse** cette requête et renvoie sa réponse au client qui l'affiche si nécessaire.

- **Base de données :** **conteneur** permettant de **stocker des informations** diverses, de manière structurée, dans des tables.

- **Table :** **sous-unité d’une base de données**, contenant des **informations de même type**, que l'on peut regrouper par des **propriétés communes**, ce qui permet de les structurer de manière cohérente.

- **Champ :** **propriété** qui caractérise chaque donnée d’une table. Les champs possèdent des caractéristiques précises (type, longueur, nullable, unicité, etc.).

- **Clé primaire :** C’est un **identifiant unique** qui permet d’identifier rapidement un enregistrement. Une clé primaire est constituée d'un ou plusieurs champs.

- **Tuple :** valeurs d’une seule ligne d’une table.

### Nommage [^](#sommaire)

Nous pouvons imaginer une `base de données` comme un **tableur**, la `table` serait une **feuille de tableur**, le `champ` serait une **colonne**, le `tuple` une **ligne**.

Par convention, le **nom des tables** et *champs* s’écrivent généralement en **anglais**, en `snake_case` (underscores séparant les mots).

Les **noms de tables** sont **toujours au singulier**. Il faut considérer uniquement un seul tuple (d’où le singulier)

#### Bonnes pratiques

**Tables et colonnes:**

- Ne pas utiliser les mots réservés: éviter de nommer une colonne `date` car ce mot est déjà utilisé.
- Ne pas utiliser de caractères spéciaux.
- Eviter les majuscules: utiliser `date_inscription` que `DateInscription`.
- Eviter l’utilisation d’abréviation.

**Noms de tables:**

- Utiliser un nom représentatif du contenu.
- Utiliser un seul mot lorsque c’est possible.
- Privilégier le singulier.

**Noms de colonnes:**

- Préfixer toutes les colonnes de la même façon pour chaque table.
- Dans le cas d’un site à vocation multilingue : indiquer la langue et la zone géographie pour les champs alphanumériques (fr_fr pour le français de France, fr_ca pour le français du Canada, fr_be pour le français de Belgique …).
- Lorsqu’une clé étrangère est utilisée (traduction anglaise : “Foreign Key”), il est pratique de l’indiquer dans le nom de la colonne. La colonne peut contenir le préfixe, puis “fk” pour Foreign Key, puis le nom de la table et enfin se terminer par “id”. Ainsi, une colonne pourrait s’intituler “wp_fk_user_id” (cf. préfixe “wp”, foreign key sur la table utilisateur de la colonne “id”).
- Toujours intitulé de façon similaire certains champs tels que les DATE ou DATETIME. Cela permet d’aider un développeur à savoir ce que va contenir un champ sans nécessairement regarder le contenu.

### Le langage SQL [^](#sommaire)

Bien **structurer ces données** est une phase essentielle et complexe, qui demande une bonne compréhension des besoins métiers, et beaucoup de pratique. C’est ce qui s’appelle la **modélisation de base de données**.

[Retour au sommaire](#sommaire)
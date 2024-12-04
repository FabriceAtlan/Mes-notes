# MySQL | Installation de MySQL

## Sommaire

- [Installer MySQL](#installer-mysql)
- [Lancement de MySQL](#lancement-de-mysql)
- [Configuration de MySQL](#configuration-de-mysql)
- [Créer un nouvel utilisateur](#créer-un-nouvel-utilisateur)
- [Connexion avec le nouvel utilisateur](#connexion-avec-le-nouvel-utilisateur)

### Installer MySQL [^](#sommaire)

- Télécharger le programme d'installation à cette adresse : [https://dev.mysql.com/downloads/installer/](https://dev.mysql.com/downl.oads/installer/)
- Choisir la seconde option.
- Sélectionner **Server only**.
- Suivre les étapes jusqu'à la section **Type and Networking**.
- Créer un mot de passe.
- Suivre les étapes suivantes jusqu'à la fin.

### Lancement de MySQL [^](#sommaire)

- Tapez `MySQL` dans la barre de recherche de Windows "MySQL".
- Saisir le mot de passe renseigné dans les étapes de configuration.

C'est fait !

### Configuration de MySQL [^](#sommaire)

**MySQL** permet de **créer plusieurs utilisateurs** possédant chacun un mot de passe (gérés par MySQL) et ayant chacun plus ou moins de droits. Par défaut, il te créé un *super-utilisateur* appelé `root`, qui a le droit de tout faire, dont créer de nouveaux utilisateurs.

L'installation du serveur MySQL installe aussi automatiquement le client MySQL (celui en ligne de commande).

Une fois connecté avec `root`, il faut **créer un nouvel utilisateur**, car pour des raisons de sécurité, **on n'utilisera jamais directement l'utilisateur root !**

Dans le cas d'un site web mis en production, on cherchera à créer un mot de passe extrêmement sécurisé pour ce nouvel utilisateur, ainsi que les droits les plus restreints possibles afin de limiter les dégâts si l'utilisateur était tout de même compromis.

### Créer un nouvel utilisateur [^](#sommaire)

```bash
mysql > CREATE USER 'babbou'@'localhost' IDENTIFIED BY 'bretagne';
```

Cette commande **créé l'utilisateur** `babbou` avec le **mot de passe** `bretagne`.

**Saisis ensuite ces commandes :**

```bash
mysql > GRANT ALL PRIVILEGES ON * . * TO 'harry'@'localhost';
mysql > FLUSH PRIVILEGES;
```

La commande `GRANT` permet de **modifier les droits**. Ici, on donne tous les droits au nouvel utilisateur car de base il possède des droits trop limités.

Ensuite, le `FLUSH PRIVILEGES` permet de **recharger les données sur les droits des utilisateurs** et donc de prendre en compte les modifications.

Pour sortir du prompt **MySQL** et revenir à ton terminal, tu peux saisir `exit` ou `\q`.

### Connexion avec le nouvel utilisateur [^](#sommaire)

Se connecter, à partir d'un terminal (et non depuis le prompt mysql).

Tapez la commande suivant en utilisant l'identifiant défini précédemment :

```bash
mysql -u babbou -p
```

Puis le mot de passe :

```bash
Enter password: bretagne
```

[Retour au sommaire](#sommaire)

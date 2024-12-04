# MySQL | Premières requêtes SQL

## Sommaire

- [CREATE DATABASE](#create-database)
- [USE](#use)
- [CREATE TABLE](#create-table)
- [SHOW](#show)
- [DESCRIBE](#describe)

Une requête SQL se termine par un point virgule.

### CREATE DATABASE [^](#sommaire)

`CREATE DATABASE`: Créer une base de données.

### USE [^](#sommaire)

`USE`: utiliser cette commande pour passer d'une BDD à l'autre.

### CREATE TABLE [^](#sommaire)

`CREATE TABLE` : commande pour créer une table dans une BDD.
Lors de la création d’une table, il faut également spécifier les champs qui vont constituer la table, ainsi que les caractéristiques de ces champs (type, contraintes…).

Exemple :

```sql
CREATE TABLE wizard (
  id INT NOT NULL AUTO_INCREMENT,
  firstname VARCHAR(100) NOT NULL,
  lastname VARCHAR(100) NOT NULL,
  birthday DATE DEFAULT NULL,
  birth_place VARCHAR(255) DEFAULT NULL,
  biography TEXT DEFAULT NULL,
  PRIMARY KEY (id)
);
```

### SHOW [^](#sommaire)

`SHOW` : la commande `SHOW` permet d’afficher de nombreux types d’informations sur ce que contient ton SGBDR.

Par exemple :

```sql
`SHOW DATABASES`;
```

permet de **lister** toutes les **BDD**.

```sql
`SHOW TABLES`;
```

permet de **lister** toutes les **tables** de la base de données actuellement sélectionnée.

### DESCRIBE [^](#sommaire)

- `DESCRIBE` : permet d’afficher des informations détaillées sur les **colonnes** d’une table, par ex : 

```sql
DESCRIBE nom_de_table;
```

`ALTER` : il existe de nombreuses commandes commençant par ALTER, permettant de modifier la structure d’une BDD/Table existante.

[Retour au sommaire](#sommaire)

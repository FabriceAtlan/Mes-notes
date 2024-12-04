# MySQL | Création d'une base de données

## Sommaire

- [Création d'une BDD](#création-dune-bdd)
- [Suis-je connecté à ma BDD ?](#suis-je-connecté-à-ma-bdd)
- [Se connecter à une BDD](#se-connecter-à-une-bdd)
- [Création d'une table](#création-dune-table)

### Création d'une BDD [^](#sommaire)

```sql
mysql> CREATE DATABASE nom_de_la_bdd;
```

### Suis-je connecté à ma BDD ? [^](#sommaire)

```sql
mysql> SELECT DATABASE();
```

### Se connecter à une BDD [^](#sommaire)

```sql
mysql> USE nom_de_la_bdd;
```

### Création d'une table [^](#sommaire)

```sql
mysql> CREATE TABLE nom_de_table (
    ->   id INT NOT NULL AUTO_INCREMENT,
    ->   firstname VARCHAR(100) NOT NULL,
    ->   lastname VARCHAR(100) NOT NULL,
    ->   birthday DATE DEFAULT NULL,
    ->   birth_place VARCHAR(255) DEFAULT NULL,
    ->   biography TEXT DEFAULT NULL,
    ->   PRIMARY KEY (id)
    -> );
```

[Retour au sommaire](#sommaire)
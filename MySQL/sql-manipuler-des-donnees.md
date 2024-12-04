# MySQL | Manipulation des données

## Sommaire

- [`INSERT` pour ajouter des données](#insert-pour-ajouter-des-données)
- [`UPDATE` pour modifier des données](#update-pour-modifier-des-données)
- [`DELETE` pour supprimer des données](#delete-pour-supprimer-des-données)
- [`TRUNCATE` pour vider totalement une table](#truncate-pour-vider-totalement-une-table)

### `INSERT` pour ajouter des données [^](#sommaire)

Voici la syntaxe que prend une requête `SQL` pour l'ajout de données :

```sql
INSERT INTO table
  (col1, col2, ...)
VALUES
  ('valeur1', 'valeur2', ...);
```

Il est possible de ne renseigner les valeurs que pour un certain nombre de colonnes. Cela fonctionne uniquement si une valeur par défaut est définie pour les colonnes non renseignées dans la requête. Typiquement, tu n’as pas à renseigner un id si celui-ci est auto-incrémenté, cela se fera tout seul.

### `UPDATE` pour modifier des données [^](#sommaire)

Voici la syntaxe que prend une requête `SQL` de mise à jour :

```sql
UPDATE <table>
SET colonne1 = valeur1, colonne2 = valeur2, etc...
WHERE <conditions>;
```

La clause `WHERE` permet de cibler quelles lignes doivent être mises à jour. En cas d'oublies, toutes les données de la table seront modifiées. Dans la très grande majorité des cas, un `UPDATE` se fait donc accompagner d’un `WHERE` (qui fonctionne par ailleurs de la même façon que pour une requête `SELECT`).

### `DELETE` pour supprimer des données [^](#sommaire)

Voici la syntaxe que prend une requête `SQL` pour supprimer une donnée :

```sql
DELETE FROM <table>
WHERE <conditions>;
```

Comme pour l’`update`, le mot-clé `WHERE` spécifie quels `tuples` doivent être supprimés. En cas d'oublies, toutes les données de la table seront supprimées.

La commande DELETE permet donc de supprimer une ou plusieurs lignes, selon certaines conditions.

### `TRUNCATE` pour vider totalement une table [^](#sommaire)

Pour vider une table de toutes ses données (sans supprimer la structure de la table elle-même), il faut utiliser la commande `TRUNCATE` `<table>`. Cette commande sera alors plus performante qu’un `DELETE FROM` `<table>`.

Autre différence notable, `TRUNCATE` réinitialise l’auto-incrémentation, ce qui n’est pas le cas pour `DELETE`.

[Retour au sommaire](#sommaire)
# MySQL | Fonctions d’agrégation

## Sommaire

### Introduction [^](#sommaire)

Ces fonctions permettent de faire un calcul sur un ensemble de lignes.

**Exemple :**

- `COUNT()` permet de retourner le **nombre de tuples concernés par la requête**. Préciser entre parenthèses le nom du champ à compter (les lignes à NULL pour ce champ seront alors ignorées).
- `COUNT(*)` compte toutes les lignes.

```sql
SELECT count(*) as <alias> FROM <nom_de_la_table>;

+-----------+
| nb_school |
+-----------+
|         8 |
+-----------+
```

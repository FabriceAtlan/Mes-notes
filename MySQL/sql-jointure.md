# MySQL | Les jointures

## Sommaire

- [Qu'est-ce qu'une jointure ?](#quest-ce-quune-jointure)

### Qu'est-ce qu'une jointure ?[^](#sommaire)

Pour **relier des tables** entres elles il faut utiliser des **clés étrangères**. Une fois ces relations établient, les **jointures** ont pour fonctions de **récupérer les informations** de plusieurs tables en une **seule requête SQL**.

**Voici la syntaxe de la plus basique d’entre elles :**

```sql
SELECT <column1>, <column2>… 
FROM <table1>
INNER JOIN <table2> ON <condition>
```

`table1` est reliée à la `table2` via le mot-clé `INNER JOIN`, et une **condition**, préfixée par le mot-clé `ON`.

`JOIN` peut être utilisé en tant que raccourci de `INNER JOIN`.

[Retour au sommaire](#sommaire)

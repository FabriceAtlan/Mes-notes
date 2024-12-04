# MySQL | SELECT

## Sommaire

- [Comment récupérer des données ?](#comment-récupérer-des-données)
- [Les alias](#les-alias)
- [WHERE](#where)
- [Les opérateurs logiques](#les-opérateurs-logiques)
- [LIMIT](#limit)
- [OFFSET](#offset)
- [ORDER BY](#order-by)

### Comment récupérer des données ? [^](#sommaire)

Le mot-clé qui permettant de récupérer des données dans une **BDD** est `SELECT`.

**Une requête `SELECT` se décompose de la manière suivante :**

```sql
SELECT <champs> FROM <table>;
```

- `<champs>` : les champs que nous souhaitons récupérer, séparés par des virgules s’il y en a plusieurs. Pour **récupérer tous les champs** d’un **tuple**, utiliser le raccourci `*`.
- `<table>` : la table interrogée


### Les alias [^](#sommaire)

Permet de récupérer une information, en appliquant un alias (renommage temporaire) de la colonne "lastname". L’utilisation des alias peut sembler inutile à première vue, mais cela est très utilisé dans des cas complexes, pour lever certaines ambiguïtés dans les noms des champs.

**Exemple d'alias :**

```sql
SELECT lastname AS student_name FROM wizard;
```

### WHERE  [^](#sommaire)

Utiliser `WHERE` pour récupérer des informations précisent :

```sql
SELECT firstname, birthday FROM wizard WHERE lastname='Weasley';
```

### Les opérateurs logiques [^](#sommaire)

Il est également possible de réaliser des conditions plus complexes :

- une valeur égale `=` ou différente `!=`
- une valeur supérieure `>` (ou égale `>=`), inférieure `<` (ou égale `<=`)
- une valeur parmi plusieurs possibles avec `IN`
- une valeur numérique (ou une date) dans une fourchette avec `BETWEEN xx AND yy`
- une chaîne commençant par ou finissant par avec `LIKE` et le joker `%`
- une valeur `IS NULL` ou `IS NOT NULL`
- les opérateurs `AND` ou `OR` permettent de combiner plusieurs conditions

**Exemple :**

```sql
SELECT firstname, birthday 
FROM wizard 
WHERE 
lastname LIKE 'Weas%' AND
birthday BETWEEN '1970-01-01' AND '2000-01-01';
```

### LIMIT [^](#sommaire)

Utilisez la commande `LIMIT` afin de limiter le nombre d'éléments retournés :

```sql
SELECT * FROM wizard LIMIT 5;
```

### OFFSET [^](#sommaire)

La clause `LIMIT` peut également être **associée** à la clause `OFFSET`, très utile pour une **pagination**. Par défaut, la `LIMIT` renvoie les résultats à partir du **premier trouvé** (le résultat 0). L’offset permet d’indiquer que la `LIMIT` s’appliquera à partir du **Nième résultat** trouvé.

**Exemple:**

Cette requête renvoie les **5 premiers résultats** trouvés, à partir du **20ème** (concrètement les lignes **21 à 25**) :

```sql
SELECT * FROM wizard LIMIT 5 OFFSET 20;
```

### ORDER BY [^](#sommaire)

Cette requête renverra tous les sorciers, classés par ordre alphabétique de nom, puis du plus jeune au plus vieux pour les membres d’une même famille :

```sql
SELECT firstname, lastname FROM wizard ORDER BY lastname ASC, birthday DESC;
```

Cette clause peut être associée au `WHERE` et/ou à une `LIMIT`. Dans ce cas, l’ordre d’appel des clauses est important. Il faudra un `WHERE`, puis un `ORDER BY` pour finir par le `LIMIT/OFFSET`.

Par exemple, la requête suivante renverra les trois plus jeunes membres de la famille Weasley :

```sql
SELECT * FROM wizard WHERE lastname='Weasley' ORDER BY birthday DESC LIMIT 0,3;
```

[Retour au sommaire](#sommaire)
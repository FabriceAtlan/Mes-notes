# MySQL | Liste de requêtes

## Sommaire

- [ALTER](#alter)
	- [Ajouter une colonne](#ajouter-une-colonne)
	- [Supprimer une colonne](#supprimer-une-colonne)
	- [Modifier une colonne](#modifier-une-colonne)
	- [Renommer une colonne](#renommer-une-colonne)
- [CONSTRAINT ](#constraint)
- [CREATE DATABASE](#create-database)
- [CREATE TABLE](#create-table)
- [DELETE](#delete)
- [DROP](#drop)
- [INSERT INTO](#insert-into)
- [TRUNCATE](#truncate)
- [USE](#use)
- [Fonctions d'agrégation](#fonctions-dagrégation)
	- [ABS](#abs)
	- [AVG](#avg)
	- [CONCAT](#concat)
	- [DATEDIFF](#datediff)
	- [LENGTH](#length)
	- [LOWER](#lower)
	- [MAX](#max)
	- [MIN](#min)
	- [MONTH](#month)
	- [NOW](#now)
	- [ROUND](#round)
	- [SIN](#sin)
	- [SUM](#sum)
	- [UPPER](#upper)

---

### ALTER [^](#sommaire)

#### Ajouter une colonne [^](#sommaire)

La commande `ALTER TABLE` en **SQL** permet de modifier une table existante (**ajouter** une colonne, **supprimer** une colonne ou **modifier** une colonne existante, par exemple pour **changer le type**).

```sql
ALTER TABLE <nom_de_la_table> ADD <nom_colonne> <type_de_donnees>;
```

---

#### Supprimer une colonne [^](#sommaire)

Une syntaxe permet également de supprimer une colonne pour une table. Il y a 2 manières totalement équivalente pour supprimer une colonne:

```sql
ALTER TABLE <nom_table>
```

```sql
DROP <nom_colonne>
```

---

#### Modifier une colonne [^](#sommaire)

Pour modifier une colonne (changer le type d’une colonne par exemple):

```sql
ALTER TABLE nom_table MODIFY nom_colonne type_donnees
```

---

#### Renommer une colonne [^](#sommaire)

Pour renommer une colonne, il convient d’indiquer l’ancien nom de la colonne et le nouveau nom de celle-ci.

```sql
ALTER TABLE <nom_table> CHANGE <colonne_ancien_nom>  <colonne_nouveau_nom> type_donnees
```

---

### CONSTRAINT  [^](#sommaire)

---

### CREATE DATABASE [^](#sommaire)

**Syntaxe :**

```slq
CREATE DATABASE <nom_de_la_base>
```

Si une base de données porte déjà ce nom, la requête retournera une erreur. Pour éviter d’avoir cette erreur, il convient d’utiliser la requête suivante :

```sql
CREATE DATABASE IF NOT EXISTS <nom_de_la_base>
```

---

### CREATE TABLE [^](#sommaire)

**Syntaxe :**

```slq
CREATE TABLE nom_de_la_table
(
	colonne1 type_donnees,
	colonne2 type_donnees,
	colonne3 type_donnees,
	colonne4 type_donnees
)
```

Pour chaque colonne, il est également possible de définir des options telles que (liste non-exhaustive):

- `NOT NULL` : empêche d’enregistrer une valeur nulle pour une colonne.
- `DEFAULT` : attribuer une valeur par défaut si aucune données n’est indiquée pour cette colonne lors de l’ajout d’une ligne dans la table.
- `PRIMARY KEY` : indiquer si cette colonne est considérée comme clé primaire pour un index.

---

### DELETE [^](#sommaire)

```sql
delete from <nom_table> where <condition>;
```
---

### DROP [^](#sommaire)

**Exemple :**

```sql
DROP DATABASE IF EXISTS <nom_de_la_table>;
```

- ```DROP DATABASE``` : **Supprime** une base de données entière, y compris toutes ses tables, vues, procédures, et données associées.
- ```IF EXISTS``` : **Vérifie** si la base de données existe avant d'essayer de la supprimer. Si la base de données n'existe pas, cela empêche l'exécution de la commande de générer une erreur.

---

### INSERT INTO [^](#sommaire)

**Exemple :**

```sql
INSERT INTO client (prenom, nom, ville, age)
 VALUES
 ('Rébecca', 'Armand', 'Saint-Didier-des-Bois', 24),
 ('Aimée', 'Hebert', 'Marigny-le-Châtel', 36),
 ('Marielle', 'Ribeiro', 'Maillères', 27),
 ('Hilaire', 'Savary', 'Conie-Molitard', 58);
```

---

### TRUNCATE [^](#sommaire)

Pour supprimer toutes les lignes d’une table, il est aussi possible d’utiliser la commande TRUNCATE.

Cette commande va ré-initialiser l’auto-incrémentation s’il y en a un.

**Syntaxe :**

```sql
TRUNCATE TABLE `utilisateur`
```

---

### USE [^](#sommaire)

**Exemple :**

```sql
USE <nom_de_la_table>;
```

---

### Fonctions d'agrégation [^](#sommaire)

#### Liste des fonctions SQL [^](#sommaire)

**Liens:** [https://sql.sh/fonctions](https://sql.sh/fonctions)

#### ABS [^](#sommaire)

#### AVG [^](#sommaire)

`AVG(<nom_du_champ>)` : effectue la moyenne des valeurs pour le champ entre les parenthèses.

#### CONCAT [^](#sommaire)

**Exemple :**

```sql
SELECT CONCAT(firstname, ' ', lastname) AS fullname FROM <nom_de_la_table>;
```

#### DATEDIFF [^](#sommaire)

#### LENGTH [^](#sommaire)

#### LOWER [^](#sommaire)

#### MAX [^](#sommaire)

`MAX(<nom_du_champ>)` : retourne la valeur maximale du champ sélectionné.

#### MIN [^](#sommaire)

`MIN(<nom_du_champ>)` : retourne la valeur minimale du champ sélectionné.

#### MONTH [^](#sommaire)

#### NOW [^](#sommaire)

#### ROUND [^](#sommaire)

#### SIN [^](#sommaire)

#### SUM [^](#sommaire)

`SUM(<nom_du_champ>)` : effectue la somme des valeurs pour le champ entre les parenthèses.

#### UPPER [^](#sommaire)

[Retour au sommaire](#sommaire)
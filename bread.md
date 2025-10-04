# BREAD

## Sommaire

- [Browse](#browse)
- [Read](#read)
- [Edit](#edit)
- [Add](#add)
- [Destroy](#destroy)
- [Récapitulatif](#récapitulatif)

## Browse [^](#sommaire)

| Nom de l'opération | Méthode HTTP | Chemin d'URL | Corps de la requête | Opération SQL | Statut de la réponse | Corps de la réponse |
|-------- |-------- |-------- |-------- |-------- |-------- |-------- |
| Browse | GET | /categories | (rien) | SELECT | 200 OK | Liste des catégories |

### Fetch [^](#sommaire)

```javascript
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type Category = {
  id: number;
  name: string;
};

function CategoryIndex() {
  const [categories, setCategories] = useState([] as Category[]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/categories`)
      .then((response) => response.json())
      .then((data: Category[]) => {
        setCategories(data);
      });
  }, []);

  return (
    <>
      <Link to={"/categories/new"}>Ajouter</Link>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            <Link to={`/categories/${category.id}`}>{category.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default CategoryIndex;
```

### Action [^](#sommaire)

```javascript
const browse: RequestHandler = async (req, res, next) => {
  try {
    // Fetch all categories
    const categories = await categoryRepository.readAll();

    // Respond with the categories in JSON format
    res.json(categories);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};
```

### Repository [^](#sommaire)

```javascript
async readAll() {
  // Execute the SQL SELECT query to retrieve all categories from the "category" table
  const [rows] = await databaseClient.query<Rows>("select * from category");

  // Return the array of categories
  return rows as Category[];
}
```

## Read [^](#sommaire)

| Nom de l'opération | Méthode HTTP | Chemin d'URL | Corps de la requête | Opération SQL | Statut de la réponse | Corps de la réponse |
|-------- |-------- |-------- |-------- |-------- |-------- |-------- |
| Read | GET | /categories/:id | (rien) | SELECT | 200 OK | Liste des catégories |

### Fetch [^](#sommaire)

```javascript
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import CategoryDeleteForm from "../components/CategoryDeleteForm";

type Program = {
  id: number;
  title: string;
};

type Category = {
  id: number;
  name: string;
  programs: Program[];
};

function CategoryDetails() {
  const { id } = useParams();
  const [category, setCategory] = useState(null as null | Category);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/categories/${id}`)
      .then((response) => response.json())
      .then((data: Category) => {
        setCategory(data);
      });
  }, [id]);

  return (
    category && (
      <>
        <hgroup className="details-hgroup">
          <h1>{category.name}</h1>
          <Link to={`/categories/${category.id}/edit`}>Modifier</Link>
          <CategoryDeleteForm id={category.id}>Supprimer</CategoryDeleteForm>
        </hgroup>
        <ul>
          {category.programs.map((program) => (
            <li key={program.id}>
              <Link to={`/programs/${program.id}`}>{program.title}</Link>
            </li>
          ))}
        </ul>
      </>
    )
  );
}

export default CategoryDetails;
```

### Action [^](#sommaire)

```javascript
const read: RequestHandler = async (req, res, next) => {
  try {
    // Fetch a specific category based on the provided ID
    const categoryId = Number(req.params.id);
    const category = await categoryRepository.read(categoryId);

    // If the category is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the category in JSON format
    if (category == null) {
      res.sendStatus(404);
    } else {
      res.json(category);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};
```

### Repository [^](#sommaire)

```javascript
async read(id: number) {
  // Execute the SQL SELECT query to retrieve a specific category by its ID
  const [rows] = await databaseClient.query<Rows>(
      `
      select 
        category.*, 
        JSON_ARRAYAGG(
          JSON_OBJECT(
            "id", program.id, "title", program.title
          )
        ) as programs 
      from 
        category 
        left join program on program.category_id = category.id 
      where 
        category.id = ? 
      group by 
        category.id
      `,
    [id],
  );

  // Return the first row of the result, which represents the category
  return rows[0] as Category;
}
```

## Edit [^](#sommaire)

| Nom de l'opération | Méthode HTTP | Chemin d'URL | Corps de la requête | Opération SQL | Statut de la réponse | Corps de la réponse |
|-------- |-------- |-------- |-------- |-------- |-------- |-------- |
| Edit (Update) | PUT | /categories/:id | Données mises à jour | UPDATE | 204 No Content | (rien) |

### Fetch [^](#sommaire)

```javascript
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import CategoryForm from "../components/CategoryForm";

type Category = {
  id: number;
  name: string;
};

function CategoryEdit() {
  // ...

  return (
    category && (
      <CategoryForm
        defaultValue={category}
        onSubmit={(categoryData) => {
          fetch(
            `${import.meta.env.VITE_API_URL}/api/categories/${category.id}`,
            {
              method: "put",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(categoryData),
            },
          ).then((response) => {
            if (response.status === 204) {
              navigate(`/categories/${category.id}`);
            }
          });
        }}
      >
        Modifier
      </CategoryForm>
    )
  );
}

export default CategoryEdit;
```

### Activer le parsing de la  requête [^](#sommaire)

Le **parsing** des requêtes est nécessaire pour extraire les données envoyées par le client dans une **requête HTTP**. C'est le cas ici pour accéder au corps de la **requête PUT**.

Dans server/src/app.ts, le code contient des commentaires pour activer différentes manières d'extraire des données :

- **express.json() :** analyse les requêtes avec des données **JSON**.
- **express.urlencoded() :** analyse les requêtes avec des données codées en **URL**.
- **express.text() :** analyse les requêtes avec des données **texte brutes**.
- **express.raw() :** analyse les requêtes avec des données **binaires brutes**.

**Décommenter** une ou plusieurs de ces options selon le format des données envoyées par le client :

```javascript
// app.use(express.json());
app.use(express.json());
// app.use(express.urlencoded());
// app.use(express.text());
// app.use(express.raw());
```

### Action [^](#sommaire)

```javascript
const edit: RequestHandler = async (req, res, next) => {
  try {
    // Update a specific category based on the provided ID
    const category = {
      id: Number(req.params.id),
      name: req.body.name,
    };

    const affectedRows = await categoryRepository.update(category);

    // If the category is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the category in JSON format
    if (affectedRows === 0) {
      res.sendStatus(404);
    } else {
      res.sendStatus(204);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};
```

### Repository [^](#sommaire)

```javascript
async update(category: Category) {
  // Execute the SQL UPDATE query to update an existing category in the "category" table
  const [result] = await databaseClient.query<Result>(
    "update category set name = ? where id = ?",
    [category.name, category.id],
  );

  // Return how many rows were affected
  return result.affectedRows;
}
```

## Add [^](#sommaire)

| Nom de l'opération | Méthode HTTP | Chemin d'URL | Corps de la requête | Opération SQL | Statut de la réponse | Corps de la réponse |
|-------- |-------- |-------- |-------- |-------- |-------- |-------- |
| Add (Create) | POST | /categories | Données de la nouvelle catégorie | INSERT | 201 Created | Id d'insertion |

### Fetch [^](#sommaire)

```javascript
import { useNavigate } from "react-router-dom";

import CategoryForm from "../components/CategoryForm";

function CategoryNew() {
  const navigate = useNavigate();

  const newCategory = {
    name: "",
  };

  return (
    <CategoryForm
      defaultValue={newCategory}
      onSubmit={(categoryData) => {
        fetch(`${import.meta.env.VITE_API_URL}/api/categories`, {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(categoryData),
        })
          .then((response) => response.json())
          .then((data) => {
            navigate(`/categories/${data.insertId}`);
          });
      }}
    >
      Ajouter
    </CategoryForm>
  );
}

export default CategoryNew;
```

### Activer le parsing de la requête [^](#sommaire)

Le **parsing** des requêtes est nécessaire pour extraire les données envoyées par le client dans une **requête HTTP**. C'est le cas ici pour accéder au corps de la **requête POST**.

Dans server/src/app.ts, le code contient des commentaires pour activer différentes manières d'extraire des données :

- **express.json() :** analyse les requêtes avec des données **JSON**.
- **express.urlencoded() :** analyse les requêtes avec des données codées en **URL**.
- **express.text() :** analyse les requêtes avec des données **texte brutes**.
- **express.raw() :** analyse les requêtes avec des données **binaires brutes**.

**Décommenter** une ou plusieurs de ces options selon le format des données envoyées par le client :

```javascript
// app.use(express.json());
app.use(express.json());
// app.use(express.urlencoded());
// app.use(express.text());
// app.use(express.raw());
```

### Action [^](#sommaire)

```javascript
const add: RequestHandler = async (req, res, next) => {
  try {
    // Extract the category data from the request body
    const newCategory = {
      name: req.body.name,
    };

    // Create the category
    const insertId = await categoryRepository.create(newCategory);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted item
    res.status(201).json({ insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};
```

### Repository [^](#sommaire)

```javascript
async create(category: Omit<Category, "id">) {
  // Execute the SQL INSERT query to add a new category to the "category" table
  const [result] = await databaseClient.query<Result>(
    "insert into category (name) values (?)",
    [category.name],
  );

  // Return the ID of the newly inserted item
  return result.insertId;
}
```

## Destroy

| Nom de l'opération | Méthode HTTP | Chemin d'URL | Corps de la requête | Opération SQL | Statut de la réponse | Corps de la réponse |
|-------- |-------- |-------- |-------- |-------- |-------- |-------- |
| Destroy (Delete) | DELETE | /categories/:id | (rien) | DELETE | 204 No Content | (rien) |

### Fetch [^](#sommaire)

```javascript
import type { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

type CategoryDeleteFormProps = {
  id: number;
  children: ReactNode;
};

function CategoryDeleteForm({ id, children }: CategoryDeleteFormProps) {
  const navigate = useNavigate();

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        fetch(`${import.meta.env.VITE_API_URL}/api/categories/${id}`, {
          method: "delete",
        }).then((response) => {
          if (response.status === 204) {
            navigate("/categories");
          }
        });
      }}
    >
      <button type="submit">{children}</button>
    </form>
  );
}

export default CategoryDeleteForm;
```

### Action [^](#sommaire)

```javascript
const destroy: RequestHandler = async (req, res, next) => {
  try {
    // Delete a specific category based on the provided ID
    const categoryId = Number(req.params.id);

    await categoryRepository.delete(categoryId);

    // Respond with HTTP 204 (No Content) anyway
    res.sendStatus(204);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};
```

### Repository [^](#sommaire)

```javascript
async delete(id: number) {
  // Execute the SQL DELETE query to delete an existing category from the "category" table
  const [result] = await databaseClient.query<Result>(
    "delete from category where id = ?",
    [id],
  );

  // Return how many rows were affected
  return result.affectedRows;
}
```

## Récapitulatif [^](#sommaire)

À ce stade, nous avons un CRUD / BREAD complet pour gérer les catégories de notre application. Tu as appris les conventions REST, activé le parsing de JSON, et vu l'implémentation de chaque opération avec une communication entre le client et le serveur.

**Voici un récapitulatif des opérations effectuées :**

**- Browse :** Récupérer et afficher la liste des ressources.

**- Read :** Lire et afficher les détails d'une ressource spécifique.

**- Edit :** Modifier une ressource existante.

**- Add :** Ajouter une nouvelle ressource.

**- Destroy :** Supprimer une ressource existante.

[Retour au sommaire](#sommaire)
## Register

Page : register

Corps de requête :

```javascript
const response = await fetch(
	`${import.meta.env.VITE_API_URL}/api/users`,
	{
		method: "post",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({
			email:
				(emailRef.current as HTMLInputElement).value,
			password,
		}),
	},
);
```

Route pour créer un user :

```javascript
router.post("/api/users", userActions.add);
```

Repository :

```javascript
async create(user: Omit<User, "id" | "is_admin">) {
  // Execute the SQL INSERT query to add a new user to the "user" table
  const [result] = await databaseClient.query<Result>(
    "insert into user (email, password) values (?, ?)",
    [user.email, user.password],
  );

  // Return the ID of the newly inserted user
  return result.insertId;
}
```

## Login

Page : login

Corps de requête :

```javascript
const response = await fetch(
  `${import.meta.env.VITE_API_URL}/api/login`,
  {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email:
        /* rendering process ensures the ref is defined before the form is submitted */
        (emailRef.current as HTMLInputElement).value,
      password:
        /* rendering process ensures the ref is defined before the form is submitted */
        (passwordRef.current as HTMLInputElement).value,
    }),
  },
);
```

Route pour créer un user :

```javascript
router.post("/api/login", authActions.login);
```

Repository :

```javascript
async readByEmail(email: string) {
  // Execute the SQL SELECT query to retrieve a specific user by its email
  const [rows] = await databaseClient.query<Rows>(
    "select * from user where email = ?",
    [email],
  );

  // Return the first row of the result, which represents the user
  return rows[0] as User;
}
```

Hasher les mdp avec Argon2.

Sucture :

`$argon2id$v=19$m=19456,t=2,p=1$nz6t40CzCcijUhj3Ntpz9A$4DW+9sqLdKvj27E3JYbImIIfZAadyDGXHFiwpBHli4s`

- argon2id : Indique l’utilisation de l’algorithme Argon2 avec la variante id.
- v=19 : Version du format de hachage.
- m=19456,t=2,p=1 : Paramètres de coût, indiquant la mémoire (en kilooctets), le temps et le parallélisme utilisés lors du hachage.
- nz6t40CzCcijUhj3Ntpz9A : Sel (une “perturbation”) généré de manière aléatoire.
- 4DW+9sqLdKvj27E3JYbImIIfZAadyDGXHFiwpBHli4s : Haché proprement dit.

Route :

```javascript
router.post("/api/users", authActions.hashPassword, userActions.add);
```

Middleware :

```javascript
const hashPassword: RequestHandler = async (req, res, next) => {
  try {
    // Extraction du mot de passe de la requête
    const { password } = req.body;

    // Hachage du mot de passe avec les options spécifiées
    const hashedPassword = await argon2.hash(password, hashingOptions);

    // Remplacement du mot de passe non haché par le mot de passe haché dans la requête
    req.body.hashed_password = hashedPassword;

    // Oubli du mot de passe non haché de la requête : il restera un secret même pour notre code dans les autres actions
    req.body.password = undefined;

    next();
  } catch (err) {
    next(err);
  }
};
```

Vérification du mot de passe :

```javascript
const verified = await argon2.verify(user.hashed_password, req.body.password);
```

Gestion des erreurs :

```javascript
if (verified) {
  // Respond with the user in JSON format (but without the hashed password)
  const { hashed_password, ...userWithoutHashedPassword } = user;

  res.json(userWithoutHashedPassword);
} else {
  res.sendStatus(422);
}
```
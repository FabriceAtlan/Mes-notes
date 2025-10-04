## installer la lib JWT

L'installation doit être réalisée côté server: 

```bash
cd server
npm i @types/jsonwebtoken
```

Créer un dossier auth/
Créer un fichier
authAtions.ts

```javascript
import { requestHandler} from "express";
import {verify} from "argon2";
import {sign} from "jsonwebtoken";

const login: RequestHandler = async (req, res, next) => {
	const {email, password} = req.body;

	const user = await userRepository.getUserByEmail(email);

	if (user===null || user === undefined) {
		res.sendStatus(404);
		return;
	}

	const isVerified = await verify(user.password, password);

	if (isVerified) {
		const payload = {
			id: user.id,
			email: user.email
		}

		const secretKey = process.env.APP_SECRET;

		if (!secretKey) {
			throw new Error("...");
		}
		const token = sign(payload, secretKey, {expireIn: "1h"});

		res.json({token, user: user.email});
	} else {res.sendStatus(422)}
}

export default {login};
```

Créer un middleware pour récup un user dans le repository

```javascript
interface User {
	id?: number;
	email: string;
	password: string;
}

async getUserByEmail(email: string) {
	const [rows] = await databaseClient.query<Result>(
		"Select * from user where email = ?", [email]
	);

	return rows[0] as User;
}
```

router.ts

```javascript
router.post("api/login", authActions.login)
```

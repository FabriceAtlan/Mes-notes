# Test unitaire

## Sommaire

- [Piqure de rappel](#piqure-de-rappel)
- [Création d'un dossier test](#création-dun-dossier-test)

```bash
mkdir test_express
cd test_express
npm init -y //Initialez un projet node
npm i express //Installer Express
npm i --saved-dev jest supertest //Installation deslibrairies de test pour le mode développement
npm i --saved-dev @types/jest //Installer si fichier en typescript
touch index.test.js
```

**Paramétrer le script du package.json :**
- test avec jest
- start avec nodemon index.js

## Piqure de rappel [^](#sommaire)

```javascript
const express = require("express");
const app = expresss();
const port = 3000;

app.get("api/wilders", (res, req) => {
	res.status(200).send(["coucou", "salut"])
})

const server = app.listen(port, () => {
	console.log(`The server is listning on port ${port}`)
})

module.exports = { app, server };
```

## Création d'un dossier test [^](#sommaire)

```javascript
// index.test.ts

const { app } = require("../index.js");
const supertest = require("supertest");

describe("GET /api/wilders", () => {
	afterAll(() => server.close());

	test("should return a status 200", async () => {
		const response = await supertest(app).get("api/wilders");

		expect(response.status).tobe(200);
		
		//Pour renvoyer un tableau
		expect(typeof response.body).toEqual("object");
	})
});
```

```bash
npm run test
```
const express = require("express");
const app = express();

const port = 3000;

app.get("/api/wilders", (req, res) => {
	res.status(201).send(["Coucou", "Hello"]);
})

const server = app.listen(port, () => {
	console.log(`The server is listening on ${port}.`);
})

module.exports = { app, server };
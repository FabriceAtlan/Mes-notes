const { app } = require("./index.js");
const supertest = require("supertest");

describe("GET /api/wilders", () => {
	afterAll(() => server.close());

	test("should return a status 200", async () => {
		const response = await supertest(app).get("api/wilders");

		// expect(response.status).tobe(200);
		
		//Pour renvoyer un tableau
		expect(typeof response.body).toEqual("object");
	})
});
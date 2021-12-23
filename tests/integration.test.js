const request = require("supertest");


const app = require("../server");
/**
 * tests the GET request of the player database
 */
request(app)
    .get("/players")
    .expect("Content-Type", /json/)
    .expect(200)
    .end(function (err, res) {
        if (err) throw err;
    });
/**
 * tests the POST request of the player database
 */
describe("POST /players", function () {
    it("users.username should be an case-insensitive match for 'johnnyboy'", function (done) {
        request(app)
            .post("/users")
            .expect(function (res) {
                res.body.id = "some fixed id";
                res.body.username = res.body.username.toLowerCase();
            })
            .expect(200, {
                id: "some fixed id",
                username: "johnnyboy"
            }, done);
    });
});
/**
 * tests the UPDATE request of the player database
 */
describe("UPDATE /players/:id", function () {
    it("update the info of a player", function (done) {
        request(app)
            .update("/players/:id")
            .expect(function (res) {
                res.body.id = 'some fixed id';
            })
            .expect(200, {
                id: "some fixed id",
                username: "some new username"
            }, done);
    });
});
/**
 * tests the DELETE request of the player database
 */
describe("DELETE /players/:id", function () {
    it("delete the info of a player", function (done) {
        request(app)
            .delete("/players/:id")
            .expect(function (res) {
                res.body.id = 'some fixed id';
            })
            .expect(200, {
                id: "some fixed id",
                username: "some username"
            }, done);
    });
});
/**
 * tests the GET request of the gender database
 */
request(app)
    .get("/genders")
    .expect("Content-Type", /json/)
    .expect(200)
    .end(function (err, res) {
        if (err) throw err;
    });
/**
 * tests the POST request of the gender database
 */
describe("POST /genders", function () {
    it("users.username should be an case-insensitive match for 'johnnyboy'", function (done) {
        request(app)
            .post("/genders")
            .expect(function (res) {
                res.body.id = "some fixed id";
                res.body.gender = res.body.gender.toLowerCase();
            })
            .expect(200, {
                id: "some fixed id",
                gender: "some gender"
            }, done);
    });
});
/**
 * tests the UPDATE request of the gender database
 */
describe("UPDATE /genders/:id", function () {
    it("update the info of a gender", function (done) {
        request(app)
            .update("/genders/:id")
            .expect(function (res) {
                res.body.id = 'some fixed id';
            })
            .expect(200, {
                id: "some fixed id",
                gender: "some new gender"
            }, done);
    });
});
/**
 * tests the DELETE request of the gender database
 */
describe("DELETE /genders/:id", function () {
    it("delete the info of a gender", function (done) {
        request(app)
            .delete("/genders/:id")
            .expect(function (res) {
                res.body.id = 'some fixed id';
            })
            .expect(200, {
                id: "some fixed id",
                gender: "some gender"
            }, done);
    });
});
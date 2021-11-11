const request = require("supertest");


const app = require("./server");

request(app)
    .get("/users")
    .expect("Content-Type", /json/)
    .expect(200)
    .end(function (err, res) {
        if (err) throw err;
    });

describe("POST /users", function () {
    it("users.username should be an case-insensitive match for 'johnnyboy'", function (done) {
        request(app)
            .post("/users")
            .send("username=johnnyboy")
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

describe("UPDATE /highscores", function () {
    it("update the highscore of a player", function (done) {
        request(app)
            .update("/highscores")
            .send("highscore=99")
            .expect(function (res) {
                res.body.id = 'some fixed id';
            })
            .expect(200, {
                id: "some fixed id",
                highscore: 99
            }, done);
    });
});
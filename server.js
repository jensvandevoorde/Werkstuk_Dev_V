const http = require("http");
const {createTables} = require("./helpers/databasehelper");
const express = require("express");


const app = express();
http.Server(app);
app.use(express.json());

const pg = require("knex")({
    client: "pg",
    connection: {
        host : process.env.POSTGRES_HOST ? process.env.POSTGRES_HOST : "localhost",
        port : 5432,
        user : process.env.POSTGRES_USER ? process.env.POSTGRES_USER : "tester",
        password : process.env.POSTGRES_PASSWORD ? process.env.POSTGRES_PASSWORD : "test",
        database : process.env.POSTGRES_DATABASE ? process.env.POSTGRES_DATABASE : "players"
    }
});

app.get("/", (req, res) =>{
    res.send("hello world test");
});

app.get("/players", (req, res)=>{
    pg.select("*").table("players").then((data)=>{
        res.send(data);
    });
});

app.post('/players', (req, res) => {
    if(req.body) {
      if(checkBodyFields(req.body, ["username", "password"])) {
        pg.insert(req.body).table("players").returning("*").then((data) => {
          res.status(200).send(data);
        })
        .catch((e) => {
          res.status(501).send();
        })
      }
      else {
        res.status(400).send();
      }
    } else {
      res.status(400).send();
    }
  });
createTables(pg);


module.exports = app;


















/*const express = require("express");
const client = require("./connection");
const bodyParser = require("body-parser");

const server = express();
const PORT = 3000;
client.connect();
const player = {
    username: "johnnyboy"
}

server.use(bodyParser.json());
/**
 * Makes server run on a port
 */
/*server.listen(PORT,  () => {
    console.log(`server is listening at port ${PORT}`);
});

server.get('/users', (req, res)=>{
    client.query(`Select * from users`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
});

/**
 * gets info of a player
 */
/*server.get("/users", (req, res) => {
    res.json(player);
}); */
/**
 * posts a new player
 */
/*server.post("/users", (req, res) => {
    res.send(player);
});*/
/**
 * updates the highscore of a player
 */
/*server.update("/highscores", (req, res) => {
    res.send("highscore=99");
});*/


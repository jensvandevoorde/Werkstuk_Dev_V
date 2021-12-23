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
        database : process.env.POSTGRES_DB ? process.env.POSTGRES_DB : "players"
    }
});

app.get("/", (req, res) =>{
    res.send("hello world test");
});
/**
 * gets the info of all players in the database
 */
app.get("/players", (req, res)=>{
    pg.select("*").table("players").then((data)=>{
        res.send(data);
    });
});
/**
 * creates a new player in the database
 */
app.post('/players', async (req, res) => {
    if(req.body) {
      if(checkBodyFields(req.body, ["username", "password"])) {
       await pg.insert(req.body).table("players").returning("*").then((data) => {
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
/**
 * updates the info of a player based on id
 */
app.put("/players/:id", async (req, res)=>{
    if(req.body) {
        if(checkBodyFields(req.body, ["username", "password"])) {
         await pg.table("players").update(req.body).returning("*").then((data) => {
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
/**
 * Deleting the username of a player based on the id
 */
app.delete("/players/:id", async (req, res)=>{
    if (req.params.username) {
        await pg.table('players').delete().where({ username: req.params.username }).returning('*').then((data) => {
          if (data.length > 0) {
            res.sendStatus(200);
          }
          else {
            res.sendStatus(404);
          }
        }).catch((error) => {
          res.send(error).status(400)
        })
      }
      else {
        res.send(400)
      }
});

/**
 * gets the info of all genders in the database
 */
 app.get("/genders", (req, res)=>{
    pg.select("*").table("genders").then((data)=>{
        res.send(data);
    });
});
/**
 * creates a new gender in the database
 */
app.post('/genders', async (req, res) => {
    if(req.body) {
      if(checkBodyFields(req.body, ["gender"])) {
       await pg.insert(req.body).table("genders").returning("*").then((data) => {
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
/**
 * updates the info of a gender based on id
 */
app.put("/genders/:id", async (req, res)=>{
    if(req.body) {
        if(checkBodyFields(req.body, ["gender"])) {
         await pg.table("genders").update(req.body).returning("*").then((data) => {
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
/**
 * Deleting a gender based on the id
 */
app.delete("/genders/:id", async (req, res)=>{
    if (req.params.gender) {
        await pg.table('genders').delete().where({ username: req.params.gender }).returning('*').then((data) => {
          if (data.length > 0) {
            res.sendStatus(200);
          }
          else {
            res.sendStatus(404);
          }
        }).catch((error) => {
          res.send(error).status(400)
        })
      }
      else {
        res.send(400)
      }
});
createTables(pg);


module.exports = app;



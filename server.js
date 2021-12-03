const express = require("express");
const server = express();
const PORT = 3000;
const player = {
    username: "johnnyboy"
}
/**
 * Makes server run on a port
 */
server.listen(PORT, () => {
    console.log(`server is listening at port ${PORT}`);
}); 

/**
 * gets info of a player
 */
server.get("/users", (req, res) => {
    res.send(player);
});
/**
 * posts a new player
 */
server.post("/users", (req, res) => {
    res.send(player);
});
/**
 * updates the highscore of a player
 */
server.update("/highscores", (req, res) => {
    res.send("highscore=99");
});
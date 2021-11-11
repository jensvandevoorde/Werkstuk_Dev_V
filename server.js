const express = require("express");
const server = express();
const PORT = 3000;
/**
 * Makes server run on a port
 */
server.listen(PORT, () => {
    console.log(`server is listening at port ${PORT}`);
});
const player = {
    username: "johnnyboy"
}
/**
 * gets info of a player
 */
server.get("/users", (req, res) => {
    res.send(player);
});
/**
 * posts a new player
 */
server.post("/users").send("username=johnnyboy");
/**
 * updates the highscore of a player
 */
server.update("/highscores").send("highscore=99");
const app = require("./server");

const port  = 3000;

app.listen(port, ()=>{
    console.log(`app listens at port ${port} `);
});





/**
 * 
 * @param {String} str 
 * @returns word that you have translated
 */

function checkWordLenght(str) {
    return str && typeof str == "string" && str.length <= 10 ? str : false;
}
/**
 * 
 * @param {String} str 
 * @returns result of given username check
 */
function checkUserName(str) {
    return str && typeof str == "string" && str.length <= 12 && str.charAt(0) == str.charAt(0).toUpperCase() ? str : false;
}
/**
 * 
 * @param {String} str 
 * @returns result of given password check
 */
function checkPassword(str) {
    let format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    return str && typeof str == "string" && str.length <= 20 && format.test(str) ? str : false;
}
/**
 * 
 * @param {String} username 
 * @param {String} password 
 * @returns returns the username and password
 */
function checkLogin(username, password) {
    return username, password;
}
/**
 * 
 * @param {String} gender 
 * @returns the gender of the player
 */
function checkGender(gender){
    return gender && typeof gender == "string" && gender == "Female" || gender == "Male" ? gender : false;
}

module.exports = { checkWordLenght, checkUserName, checkPassword, checkLogin, checkGender};

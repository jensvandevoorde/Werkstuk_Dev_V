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
 * @param {Boolean} highscore 
 * @returns the highscore of a player
 */
function checkHighscore(highscore) {
    return highscore && typeof highscore != "string" ? highscore : false;
}

module.exports = { checkWordLenght, checkUserName, checkPassword, checkLogin, checkHighscore };

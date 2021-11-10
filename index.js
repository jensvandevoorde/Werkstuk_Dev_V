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

function checkLogin(username, password) {
    return username, password;
}

module.exports = { checkWordLenght };
module.exports = { checkUserName };
module.exports = { checkPassword };
module.exports = { checkLogin };
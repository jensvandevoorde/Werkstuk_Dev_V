const { test, expect } = require("@jest/globals");
const checkWordLenght = require("./../index");
const checkUserName = require("./../index");
const checkPassword = require("./../index");
const checkLogin = require("./../index");

test("checking the lenght of filled in words", () => {
    expect(checkWordLenght()).toBeFalsy();
    expect(checkWordLenght(120)).toBeFalsy();
    expect(checkWordLenght("djn,vnioqljfncoej")).toBeFalsy();

});

test("checking if username is usable", () => {
    expect(checkUserName()).toBeFalsy();
    expect(checkUserName(120)).toBeFalsy();
    expect(checkUserName("djn,vnioqljfncoej")).toBeFalsy();
});

test("checking if password is usable", () => {
    expect(checkPassword()).toBeFalsy();
    expect(checkPassword(120)).toBeFalsy();
    expect(checkPassword("djn,vnioqljfncoej")).toBeFalsy();
});

test("check if inlog username and password are correct", () => {
    expect(checkLogin()).toBeFalsy();
});
const {Router} = require('express');
const getTime = require("../handlers/Users/getUsers");
const postTime = require("../handlers/Users/postUser");


const timeRouter = Router();

timeRouter.post("/", postTime);

timeRouter.get("/", getTime);

module.exports = timeRouter
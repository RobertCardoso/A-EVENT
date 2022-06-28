let express = require("express");

let route = new express.Router();

let controller = require("../Controllers/userController");

route.post("/register", controller.register);

route.post("/login", controller.login)

module.exports = route

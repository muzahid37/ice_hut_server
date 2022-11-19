const express = require("express");
const { getAllChocolates } = require("./controlar/chocolates.controlar");
const chocolateRouter = express.Router();
chocolateRouter.route("/").get(getAllChocolates);

module.exports = chocolateRouter;

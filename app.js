const express = require("express");
const app = express();
const homePage = app.get("/", (request, response) => {
  response.send("Home Page");
});
const aboutPage = app.get("/about", (request, response) => {
  response.send("About Page");
});
module.exports = homePage;
module.exports = aboutPage;

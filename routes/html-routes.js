// Requiring path to so we can use relative routes to our HTML files

// Requiring our custom middleware for checking if a user is logged in
const db = require("../models");

module.exports = function(app) {
  app.get("/", (req, res) => {
    res.render("index", { hello: "hello" });
  });
  app.get("/product", (req, res) => {
    let hbsObj = {};
    db.articles.findAll({}).then(dbArticle => {
      hbsObj = {
        articles: dbArticle
      };
      res.render("product", hbsObj);
    });
  });
  app.get("/solar", (req, res) => {
    res.render("solar", { hello: "hello" });
  });
  app.get("/wind", (req, res) => {
    res.render("wind", { hello: "hello" });
  });
  app.get("/login", (req, res) => {
    res.render("login", { hello: "hello" });
  });
  app.get("/signup", (req, res) => {
    res.render("signup", { hello: "hello" });
  });
  app.get("/profile", (req, res) => {
    res.render("profile", { hello: "hello" });
  });
};

var db = require("./models/");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Article.find({}).then(function(dbArticles) {
      res.render("index", {
        msg: "Welcome!",
        articles: dbArticles
    });
    console.log(dbArticles);
    });
  });
};
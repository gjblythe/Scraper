var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Article.find({}).then(function(dbArticles) {
      res.render("index", {
        msg: "Javascript Libraries",
        articles: dbArticles
    });
    console.log(dbArticles);
    });
  });
  // app.get("/scrape", function(req,res){
  //   res.render("scrape", {
  //     msg: "Scrape is now complete."
  //   })
  // })
};
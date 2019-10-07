// file should include two routes:
// A GET Route to /survey which should display the survey page.
let path = require("path");

module.exports = function(app) {
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    app.use(function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
};
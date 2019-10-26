// Your apiRoutes.js file should contain two routes:
// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
let friends = require("../data/friends");

module.exports = function(app) {
    app.get("/api/friends", function(req, res){
        res.json(friends);
    });

    app.post("/api/friends", function(req, res) {
        console.log(req.body.scores);
        let user = req.body;
        for (let i = 0; i < user.scores.length; i++) {
            user.scores[i] = parseInt(user.scores[i]);
        }
        let friendScore = 0;
        let minScore = 0;

        for (let i = 0; i < friends.length; i++) {
            let total = 0;
            for (var x = 0; x < friends[i].scores.length; x++) {
                let diff = Math.abs(user.scores[x] - friends[i].scores[x]);
                total += diff;   
            }
            
            if (total < minScore) {
                friendScore = i;
                minScore = total;
            }
        }

        friends.push(user);
        res.json(friends[friendScore]);
        
    });
};
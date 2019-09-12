// file should require the basic npm packages we've used in class: express and path.
let require = require("https");
let port = 8080;
function handleRequest(req, res) {
    response.end("Working:" + req.url);
}

let server = http.createServer(handleRequest);

server.listen(port, function() {
    console.log("server is listening: on http://localhost:" + port)
});

let path = req.url;

switch(path) {

    case "/":
        return displayRoot(res);

    case "/friend-finder":
        return displayFriendFinder(res);

    default:
        return display404(path, res);
}

function displayRoot(res) {
    let roothmtl = "<html>" + 
    "<body><h1>Home Page</h1>" +
    "<a href='/friend-finder'>friend-finder</a>" +
    "</body></html>";

    res.writeHead(200, {"Content-Type": "text/html"});
    res.end(roothmtl);
}

function display404(url,res) {
    let roothtml = "<html>" +
    "<body><h1>404 Not found </h1>" +
    "<p> The page you were looking for:" + url + "can not be found</p>" +
    "</body></html>";
    res.writeHead(404, {"Content-Type": "text/html"});
    res.end(roothmtl);
}


//imports functionality old way instead of from .... import ...
const http = require("http");
const app = require("./app");

const port = process.env.PORT || 8080;
const server = http.createServer(app);

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('../frontend/build'))
}

server.listen(port);

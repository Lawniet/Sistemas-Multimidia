t http = require("http");
const express = require("express");
const app = express();

app.get("/", function(req, res) {
    res.send("<h1>Servidor rodando com ExpressJS</h1>");
});

http.createServer(app).listen(process.env.PORT || 5000, () => console.log("Servidor rodando local na porta 5000"));
http = require("http");
const express = require("express");
const app = express();
const path = require('path')

// então, criamos uma rota para '/'
app.get('/', (req, res) => {
  // aqui precisamos enviar o index.html para o cliente
  res.sendFile(path.join(__dirname + '/paginas/index.html'))
})

http.createServer(app).listen(process.env.PORT || 5000, () => console.log("Servidor rodando local na porta 5000"));
var http = require('http');
http.createServer(function (req, res){
    res.write("Sou lindo, sou gostoso, jogo bola e danço!");
    res.end("Bom dia!");
  
}).listen(8080);

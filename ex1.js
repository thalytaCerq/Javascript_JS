var http = require('http');
var url = require('url');

http.createServer(function(req, res){
        res.writeHead(200, {'Content-Type': 'text/html'});
        var q = url.parse(req.url, true).query;
        var txt = "dia: " +q.dia+ "<br> mês: " +q.mês+ "<br> ano: " +q.ano;
        res.end(txt);
    }).listen(80);

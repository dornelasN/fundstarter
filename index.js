var PORT = process.env.PORT || 8080;
var http = require('http');
var fs = requisre('fs');
var requestListener = function (req, res) {
  res.writeHead(200);
  fs.readfile('index.html', 'utf8', function (err, data){
        if(err){
        return console.log(err);
        }
        res.end(data);
  }
}

var server = http.createServer(requestListener);
server.listen(PORT);

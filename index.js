const PORT = process.env.PORT || 8080;
var http = require('http');
var fs = require('fs');

var requestListener = function (req, res) {
  res.writeHead(200);

  var data =  fs.readFileSync('index.html', 'utf8');

  res.end(data);      
}

var server = http.createServer(requestListener);
server.listen(PORT, function(){
	console.log("Server listening");
});

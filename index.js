const PORT = process.env.PORT || 8080;
var http = require('http');
var fs = require('fs');

var requestListener = function (req, res) {
  res.writeHead(200);

  fs.readFile('index.html', 'utf8', function (err, data){
        if(err){
        return console.log(err);
        }
	console.log(data);
        res.end(data);
  });
}

var server = http.createServer(requestListener);
server.listen(PORT, function(){
	console.log("Server listening");
});

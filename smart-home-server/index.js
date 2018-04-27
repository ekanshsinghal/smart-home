var http = require("http");
var PythonShell = require('python-shell');
var pyshell = new PythonShell('my_script.py');

http.createServer(function(req, res) {

	var queryData = url.parse(request.url, true).query;
	res.writeHead(200, {"Content-Type": "text/plain"});
	if(queryData.name){
		pyshell.send(queryData.name);

		pyshell.on('message', function (message) {
			console.log(message);
		});

		response.end('Hello ' + queryData.name + '\n');
	} else {
		response.end("");
	}
	

}).listen(3000);

console.log("running on port 3000");
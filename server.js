console.log('server init');

var 	Module = require('./dar_module/autoload').load('./mod'),
		Processor = require('./dar_module/processor');
	
var 	ip = 'localhost', 
		port = process.argv[2] || 1337;
	
module.exports.start = function start(){
	
	Module.http.createServer(function(req, res){
		
		Module.sys.puts('request http://'+req.headers.host+req.url);
		
		if(req.url == '/favicon.ico'){
		
			res.writeHead(400, {'Content-Type': 'text/plain'});
			res.end('404 not found');
		
		}else{
		
			Processor.spin(req, res, Module);
		
		}
			
	}).listen(port, ip);
		
	Module.sys.puts("wake dar at http://"+ip+":"+port);
	
};

console.log('server ready');
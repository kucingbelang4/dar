console.log('server init');

var 	Module = require('./dar_module/autoload').load('./mod');
	Processor = require('./dar_module/processor');
	
var 	ip = '192.168.244.199', 
	port = '80';

	function fail(res){

		res.writeHead(400, {'Content-Type': 'text/plain'});
		res.end('404 not found');

	}
	
module.exports.start = function start(){
	
	Module.http.createServer(function(req, res){
		
		Module.sys.puts('request http://'+req.headers.host+req.url);
		
		if(req.url == '/favicon.ico'){
		
			fail(res);
		
		}else{
		
			Processor.spin(req, res, Module);
		
		}
			
	}).listen(port, ip);
		
	Module.sys.puts("wake dar at http://"+ip+":"+port);
	
};

console.log('server ready');
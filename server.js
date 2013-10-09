console.log('server ready');

var Module = require('./dar_module/autoload').load(); 

var ip = '192.168.244.199', port = '80';

//var reponseMain = require('./responseMain');

module.exports = {

	start : function start(){
	
		Module.http.createServer(function(req, res){
		
			Module.sys.puts("dar wake");
			
			res.writeHeader(200, {"Content-Type": "text/plain"});
			res.write("Hello World!");
			res.end();
		
		}).listen(this.port, this.ip);
		
		Module.sys.puts("wake dar at http://"+this.ip+":"+this.port);
	
	},
	
	config : function config(port, ip){
	
		this.port = port,
		
		this.ip = ip
	
	},

}

var	count = 0,
	sources = require('../source/registered').sites;
	PATH = require('../source/registered').path;
	pathor = {},
	FILE = '';


function spin(req, res, Module){
	
	console.log('~ spin ~');
	
	for(var site in sources ){
		
		if ( req.headers.host == site ){
		
			if (req.url == '/'){
			
				FILE = PATH+'/'+sources[site]+'/index.html';
				
				MIME = 'text/html';
				
				build(req, res, Module, FILE, MIME);

			}else{
			
				FILE = PATH+'/'+sources[site]+'/'+req.url;
				
				MIME = 'text/'+ validator(req.url);
				
				build(req, res, Module, FILE, MIME);
			
			}
		
		}
	
	}
	
	
	
	function validator(url){
	
		var room = url.split('/');
		
		var last = room[room.length - 1];
		
		console.log('last : '+last);
		
		var extBase = last.split('.');
		
		var ext = extBase[extBase.length - 1];
		
		return ext;
	
	}
	
	function build(req, res, Module, FILE, MIME){
	
		var File = Module.fs.readFileSync(FILE);
		
		var MIME = (MIME === undefined)? 'text/html': MIME;
		
		res.writeHead(res.statusCode, {'Content-Type': MIME});
		res.end(File);
	
	}

}

module.exports = {

	spin : spin

}
console.log('autoload Init');

var load_module = {}; 

function load(args){
	
	var mod = require(args).variable();
	
	reload(mod);
	
	return load_module;

}

function reload(mod){
	
	console.log('reload');
	
	for( var obj in mod ){
		
		if(mod[obj] !== ''){	

			load_module[mod[obj]] = require(obj)[mod[obj]];
			
			console.log(obj);
		
		}else{
		
			load_module[obj] = require(obj);
			
			console.log(obj);
		
		}
		
	}

}

module.exports.load = load;

console.log('autoload ready');
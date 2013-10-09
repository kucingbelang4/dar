console.log('autoload Init');

var module = {
					'http': '', 
					'fs': '', 
					'sys': '',
					'path': '',
				};
				
var load_module = {}; 

exports.load = function load(){
	
	reload();
	
	return this.load_module;

}

exports.load_module = load_module;

function reload(){
	
	console.log('reload');
	
	for( var obj in module ){

		load_module[obj] = require(obj);
		
	}

}

console.log('autoload ready');
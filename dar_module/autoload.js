console.log('autoload ready');

var module = {
					'http': '', 
					'fs': '', 
					'sys': '',
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

/*exports.config = function config(args){

	this.module = args;
	
	reload();

}*/
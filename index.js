var Config = require('./config'),
	Server = require('./server');

var dar = Object.create(Server, { config('192.168.244.199', '80') });

dar.start(); 
var fs = require('fs');
var path = require('path');
var vm = require('vm');

module.exports = function(){
	
	var basePath = path.resolve(__dirname, 'closure', 'goog', 'base.js');
	vm.runInThisContext.call(
      this, fs.readFileSync(basePath), basePath);
	
};
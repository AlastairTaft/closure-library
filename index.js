var fs = require('fs');
var path = require('path');
var vm = require('vm');

module.exports = function(){
	
	var basePath = path.resolve(__dirname, 'closure', 'goog');
	vm.runInThisContext.call(
      this, fs.readFileSync(basePath), path.resolve(basePath, 'base.js'));

  this.goog.global.CLOSURE_BASE_PATH = basePath;
	
};
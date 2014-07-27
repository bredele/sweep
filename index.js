
/**
 * Expose 'sweep'
 */

module.exports = function() {
	var arr = [];
	for(var i = 0, l = arguments.length; i < l; i++) {
		var arg = arguments[i];
		if(typeof arg !== 'object') arg = [arg];
		Array.prototype.push.apply(arr, arg);
	}
  return arr;
};


	// var arr = [];
 //  Array.prototype.push.apply(arr, arg);
 //  return arr;
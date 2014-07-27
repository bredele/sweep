
/**
 * Expose 'sweep'
 *
 * It allows an expression to be expanded in places where 
 * multiple arguments (for function calls)or multiple 
 * elements (for array literals) are expected.
 *
 * Examples:
 *
 *   spread(arguments);
 *   spread(argumens, 'hello');
 *   spread(['hello'], argument, 'world');
 *   spread(function() {
 *   });
 *
 * @return {Array}
 * @api public
 */

module.exports = function spread(fn) {
	var arr = [];
	if(typeof fn === 'function') {
		return function() {
			return fn.apply(null, spread.apply(null, arguments));
		};
	}
	for(var i = 0, l = arguments.length; i < l; i++) {
		var arg = arguments[i];
		if(typeof arg !== 'object') arg = [arg];
		Array.prototype.push.apply(arr, arg);
	}
  return arr;
};

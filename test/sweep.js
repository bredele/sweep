
/**
 * Test dependencies.
 */

var assert = require('assert');
var spread = require('..');

describe("expand arguments", function() {

	var args;
	beforeEach(function() {
		args = function() {
			return arguments;
		};
	});

	it('should transform arguments into an array', function() {
		var arr = spread(args('olivier', 'amy'));
		assert(arr instanceof Array);
		assert.deepEqual(arr, ['olivier', 'amy']); 
	});

	it('should concatenate arguments', function() {
		var arr = spread('hello', args('olivier', 'amy'), 'bruno');
		assert(arr instanceof Array);
		assert.deepEqual(arr, ['hello', 'olivier', 'amy', 'bruno']); 
	});

	it('should be a better array push', function() {
		var arr = spread('hello', args('olivier', 'amy'), ['bruno', 'anne']);
		assert(arr instanceof Array);
		assert.deepEqual(arr, ['hello', 'olivier', 'amy', 'bruno', 'anne']); 
	});

});

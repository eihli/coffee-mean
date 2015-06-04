(function() {
  var should, test;

  should = require('chai').should();

  test = require('../bin/helper');

  describe('Test function', function() {
    return it('should be a function', function() {
      return test.should.be.a('function');
    });
  });

}).call(this);

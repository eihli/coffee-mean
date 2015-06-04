(function() {
  var server, should;

  should = require('chai').should();

  server = require('../bin/server');

  describe('Server', function() {
    return it('Should be a function', function() {
      return server.should.be.a('function');
    });
  });

}).call(this);

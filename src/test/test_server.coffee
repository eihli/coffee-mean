should = require('chai').should()
server = require('../bin/server')

describe 'Server', ->
  it 'Should be a function', ->
    server.should.be.a('function')

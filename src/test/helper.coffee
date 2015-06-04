should = require('chai').should()
test = require '../bin/helper'

describe 'Test function', ->
  it 'should be a function', ->
    test.should.be.a('function')

/* global describe, it */

'use strict';

var expect = require('chai').expect,
    SampleModule = require('../../src/SampleModule.js');

describe('SampleModule', function (){

    it('test should return true', function (){
        var sampleModule = new SampleModule();
        expect(sampleModule.test()).to.be.true;
    });
});

'use strict';

function SampleModule() {}

SampleModule.prototype = {
    test: function() {
        return true;
    }
};

module.exports = SampleModule;

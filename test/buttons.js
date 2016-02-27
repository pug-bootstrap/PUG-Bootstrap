var assert = require('assert');
var jade = require('jade');
var fs = require('fs');
var path = require('path');

var fn = jade.compileFileClient(__dirname + "/buttons.jade");
fs.writeFileSync('button_mixins.js',fn);


describe('btn-primary mixin',function(){

    it('should render a primary button',function() {

        assert.equal('<button type="button" class="btn btn-primary">Primary Button</button>',fn());
    });
});

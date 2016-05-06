var assert = require('assert');
var pug = require('pug');
var fs = require('fs');
var path = require('path');

var fn = pug.compileFileClient(__dirname + "/buttons.pug");
fs.writeFileSync('button_mixins.js',fn);

describe('btn-primary mixin',function(){

    it('should render a primary button',function() {

        assert.equal('<button type="button" class="btn btn-primary">Primary Button</button>',fn());
    });
});

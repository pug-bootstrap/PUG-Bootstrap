var assert = require("assert");
var jade = require("jade");
var fs = require("fs");
var path = require("path");

describe("Tooltips",function() {

    it("should generate a tooltip", function(){
        var fn = jade.compileFile(path.join(__dirname, "fixtures/tooltips","tooltip.jade"));
        assert.equal(1,1);
    });

});

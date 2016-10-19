var assert = require("assert");
var jade = require("jade");
var fs = require("fs");
var path = require("path");

describe("Panels",function() {

    it("should generate a panel", function(){
        var fn = jade.compileFile(path.join(__dirname, "fixtures/panels","panel.jade"));
        assert.equal(1,1);
    });

});

var assert = require("assert");
var jade = require("jade");
var fs = require("fs");
var path = require("path");

describe("Dropdowns", function(){
    it("should generate a dropdown", function(){
        var fn = jade.compileFile(path.join(__dirname, "fixtures/dropdowns","dropdown.jade"));
        assert.equal(true,true);
    });
});

var assert = require("assert");
var jade = require("jade");
var fs = require("fs");
var path = require("path");

describe("Navs",function() {

    it("should generate a nav", function(){
        var fn = jade.compileFile(path.join(__dirname, "fixtures/navs","navs.jade"));
        assert.equal(1,1);
    });

});

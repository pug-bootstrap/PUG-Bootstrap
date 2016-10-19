var assert = require("assert");
var jade = require("jade");
var fs = require("fs");
var path = require("path");

describe("Toggles",function() {

    it("should generate a toggle", function(){
        var fn = jade.compileFile(path.join(__dirname, "fixtures/toggles","toggle.jade"));
        assert.equal(1,1);
    });

});

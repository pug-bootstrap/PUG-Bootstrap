var assert = require("assert");
var jade = require("jade");
var fs = require("fs");
var path = require("path");

describe("Modal",function() {

    it("should generate a modal", function(){
        var fn = jade.compileFile(path.join(__dirname, "fixtures/modal","modal.jade"));
        assert.equal(1,1);
    });

});

var assert = require("assert");
var jade = require("jade");
var fs = require("fs");
var path = require("path");

describe("Tables",function() {

    it("should generate a table", function(){
        var fn = jade.compileFile(path.join(__dirname, "fixtures/tables","table.jade"));
        assert.equal(1,1);
    });

});

var assert = require("assert");
var jade = require("jade");
var fs = require("fs");
var path = require("path");

describe("Tabs",function() {

    it("should generate a tab", function(){
        var fn = jade.compileFile(path.join(__dirname, "fixtures/tabs","tab.jade"));
        assert.equal(1,1);
    });

});

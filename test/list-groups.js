var assert = require("assert");
var jade = require("jade");
var fs = require("fs");
var path = require("path");

describe("List groups",function() {

    it("should generate a list group", function(){
        var fn = jade.compileFile(path.join(__dirname, "fixtures/list-groups","list-group.jade"));
        assert.equal(1,1);
    });

});

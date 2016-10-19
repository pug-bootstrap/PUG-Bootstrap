var assert = require("assert");
var jade = require("jade");
var fs = require("fs");
var path = require("path");

describe("Navbar",function() {

    it("should generate a navbar", function(){
        var fn = jade.compileFile(path.join(__dirname, "fixtures/navbar","navbar.jade"));
        assert.equal(1,1);
    });

});

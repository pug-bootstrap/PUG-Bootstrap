var jade = require("jade");
var assert = require("assert");
var path = require("path");


describe("Bootswatch",function() {
    it("should generate a stylesheet link to bootswatch", function() {
        var fn = jade.compileFile(path.join(__dirname, "fixtures","bootswatch.jade"));
        assert.equal('<link href="https://maxcdn.bootstrapcdn.com/bootswatch/3.3.4/luna/bootstrap.min.css" rel="stylesheet"/>',fn({theme:"luna"}));
    });
});

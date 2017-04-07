var pug = require("pug");
var assert = require("assert");
var path = require("path");


describe("Bootswatch",function() {
    it("should generate a stylesheet link to bootswatch", function() {
        var fn = pug.compileFile(path.join(__dirname, "fixtures","bootswatch.pug"));
        assert.equal('<link href="https://maxcdn.bootstrapcdn.com/bootswatch/3.3.4/luna/bootstrap.min.css" rel="stylesheet"/>',fn({theme:"luna"}));
    });
});

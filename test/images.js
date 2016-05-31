var jade = require("jade");
var assert = require("assert");
var path = require("path");

describe("Images", function() {
    var locals = { _src: "a.jpg", _alt: "My Image" };
    it("should generate a responsive image",function() {
        var fn = jade.compileFile(path.join(__dirname, "fixtures/images","img-responsive.jade"));
        assert.equal('<img src="a.jpg" alt="My Image" class="img-responsive"/>',fn(locals));
    });

    it("should generate a responsive center image",function() {
        var fn = jade.compileFile(path.join(__dirname, "fixtures/images","img-responsive-center.jade"));
        assert.equal('<img src="a.jpg" alt="My Image" class="img-responsive center-block"/>',fn(locals));
    });
    it("should generate a circle image",function() {
        var fn = jade.compileFile(path.join(__dirname, "fixtures/images","img-circle.jade"));
        assert.equal('<img src="a.jpg" alt="My Image" class="img-circle"/>',fn(locals));
    });
    it("should generate a rounded image",function() {
        var fn = jade.compileFile(path.join(__dirname, "fixtures/images","img-rounded.jade"));
        assert.equal('<img src="a.jpg" alt="My Image" class="img-rounded"/>',fn(locals));
    });
    it("should generate a thumbnail image",function() {
        var fn = jade.compileFile(path.join(__dirname, "fixtures/images","img-thumbnail.jade"));
        assert.equal('<img src="a.jpg" alt="My Image" class="img-thumbnail"/>',fn(locals));
    });
});

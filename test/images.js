var pug = require("pug");
var assert = require("assert");
var path = require("path");

describe("Images", function() {
    var locals = { _src: "a.jpg", _alt: "My Image" };
    it("should generate a responsive image",function() {
        var fn = pug.compileFile(path.join(__dirname, "fixtures/images","img-responsive.pug"));
        assert.equal('<img class="img-responsive" src="a.jpg" alt="My Image"/>',fn(locals));
    });

    it("should generate a responsive center image",function() {
        var fn = pug.compileFile(path.join(__dirname, "fixtures/images","img-responsive-center.pug"));
        assert.equal('<img class="img-responsive center-block" src="a.jpg" alt="My Image"/>',fn(locals));
    });
    it("should generate a circle image",function() {
        var fn = pug.compileFile(path.join(__dirname, "fixtures/images","img-circle.pug"));
        assert.equal('<img class="img-circle" src="a.jpg" alt="My Image"/>',fn(locals));
    });
    it("should generate a rounded image",function() {
        var fn = pug.compileFile(path.join(__dirname, "fixtures/images","img-rounded.pug"));
        assert.equal('<img class="img-rounded" src="a.jpg" alt="My Image"/>',fn(locals));
    });
    it("should generate a thumbnail image",function() {
        var fn = pug.compileFile(path.join(__dirname, "fixtures/images","img-thumbnail.pug"));
        assert.equal('<img class="img-thumbnail" src="a.jpg" alt="My Image"/>',fn(locals));
    });
});

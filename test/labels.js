var pug = require("pug");
var assert = require("assert");
var path = require("path");

describe("Labels", function() {
    it("should generate a generic label", function() {
        var fn = pug.compileFile(path.join(__dirname, "fixtures/labels","label.pug"));
        assert.equal('<span class="label label-primary">My Label</span>',fn({type: "primary", text:"My Label"}));
    });
    it("should generate a default label", function() {
        var fn = pug.compileFile(path.join(__dirname, "fixtures/labels","label-default.pug"));
        assert.equal('<span class="label label-default">My Label</span>',fn({ text:"My Label"}));
    });
    it("should generate a primary label", function() {
        var fn = pug.compileFile(path.join(__dirname, "fixtures/labels","label-primary.pug"));
        assert.equal('<span class="label label-primary">My Label</span>',fn({text:"My Label"}));
    });
    it("should generate a info label", function() {
        var fn = pug.compileFile(path.join(__dirname, "fixtures/labels","label-info.pug"));
        assert.equal('<span class="label label-info">My Label</span>',fn({text:"My Label"}));
    });
    it("should generate a warning label", function() {
        var fn = pug.compileFile(path.join(__dirname, "fixtures/labels","label-warning.pug"));
        assert.equal('<span class="label label-warning">My Label</span>',fn({text:"My Label"}));
    });
    it("should generate a danger label", function() {
        var fn = pug.compileFile(path.join(__dirname, "fixtures/labels","label-danger.pug"));
        assert.equal('<span class="label label-danger">My Label</span>',fn({text:"My Label"}));
    });
    it("should generate a success label", function() {
        var fn = pug.compileFile(path.join(__dirname, "fixtures/labels","label-success.pug"));
        assert.equal('<span class="label label-success">My Label</span>',fn({text:"My Label"}));
    });
});

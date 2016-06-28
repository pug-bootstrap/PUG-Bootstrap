var jade = require("jade");
var assert = require("assert");
var path = require("path");

describe("Labels", function() {
    it("should generate a generic label", function() {
        var fn = jade.compileFile(path.join(__dirname, "fixtures/labels","label.jade"));
        assert.equal('<span class="label label-primary">My Label</span>',fn({type: "primary", text:"My Label"}));
    });
    it("should generate a default label", function() {
        var fn = jade.compileFile(path.join(__dirname, "fixtures/labels","label-default.jade"));
        assert.equal('<span class="label label-default">My Label</span>',fn({ text:"My Label"}));
    });
    it("should generate a primary label", function() {
        var fn = jade.compileFile(path.join(__dirname, "fixtures/labels","label-primary.jade"));
        assert.equal('<span class="label label-primary">My Label</span>',fn({text:"My Label"}));
    });
    it("should generate a info label", function() {
        var fn = jade.compileFile(path.join(__dirname, "fixtures/labels","label-info.jade"));
        assert.equal('<span class="label label-info">My Label</span>',fn({text:"My Label"}));
    });
    it("should generate a warning label", function() {
        var fn = jade.compileFile(path.join(__dirname, "fixtures/labels","label-warning.jade"));
        assert.equal('<span class="label label-warning">My Label</span>',fn({text:"My Label"}));
    });
    it("should generate a danger label", function() {
        var fn = jade.compileFile(path.join(__dirname, "fixtures/labels","label-danger.jade"));
        assert.equal('<span class="label label-danger">My Label</span>',fn({text:"My Label"}));
    });
    it("should generate a success label", function() {
        var fn = jade.compileFile(path.join(__dirname, "fixtures/labels","label-success.jade"));
        assert.equal('<span class="label label-success">My Label</span>',fn({text:"My Label"}));
    });
});

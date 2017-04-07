var pug = require("pug");
var assert = require("assert");
var path = require("path");

describe("Icons",function() {
    it("should render a plain icon",function() {
        var fn = pug.compileFile(path.join(__dirname, "fixtures/icons","icon.pug"));
        assert.equal('<span class="glyphicon glyphicon-search" aria-hidden="true"></span>',fn({name:"search"}));
    });

    it("should render a primary icon",function() {
        var fn = pug.compileFile(path.join(__dirname, "fixtures/icons","icon-primary.pug"));
        assert.equal('<span class="glyphicon text-primary glyphicon-search" aria-hidden="true"></span>',fn({name:"search"}));
    });

    it("should render a info icon",function() {
        var fn = pug.compileFile(path.join(__dirname, "fixtures/icons","icon-info.pug"));
        assert.equal('<span class="glyphicon text-info glyphicon-search" aria-hidden="true"></span>',fn({name:"search"}));
    });
    it("should render a warning icon",function() {
        var fn = pug.compileFile(path.join(__dirname, "fixtures/icons","icon-warning.pug"));
        assert.equal('<span class="glyphicon text-warning glyphicon-search" aria-hidden="true"></span>',fn({name:"search"}));
    });
    it("should render a danger icon",function() {
        var fn = pug.compileFile(path.join(__dirname, "fixtures/icons","icon-danger.pug"));
        assert.equal('<span class="glyphicon text-danger glyphicon-search" aria-hidden="true"></span>',fn({name:"search"}));
    });
    it("should render a success icon",function() {
        var fn = pug.compileFile(path.join(__dirname, "fixtures/icons","icon-success.pug"));
        assert.equal('<span class="glyphicon text-success glyphicon-search" aria-hidden="true"></span>',fn({name:"search"}));
    });
});

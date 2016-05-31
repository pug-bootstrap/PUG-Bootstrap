var jade = require("jade");
var assert = require("assert");
var path = require("path");

describe("Icons",function() {
    it("should render a plain icon",function() {
        var fn = jade.compileFile(path.join(__dirname, "fixtures/icons","icon.jade"));
        assert.equal('<span aria-hidden="true" class="glyphicon glyphicon-search"></span>',fn({name:"search"}));
    });

    it("should render a primary icon",function() {
        var fn = jade.compileFile(path.join(__dirname, "fixtures/icons","icon-primary.jade"));
        assert.equal('<span aria-hidden="true" class="glyphicon text-primary glyphicon-search"></span>',fn({name:"search"}));
    });

    it("should render a info icon",function() {
        var fn = jade.compileFile(path.join(__dirname, "fixtures/icons","icon-info.jade"));
        assert.equal('<span aria-hidden="true" class="glyphicon text-info glyphicon-search"></span>',fn({name:"search"}));
    });
    it("should render a warning icon",function() {
        var fn = jade.compileFile(path.join(__dirname, "fixtures/icons","icon-warning.jade"));
        assert.equal('<span aria-hidden="true" class="glyphicon text-warning glyphicon-search"></span>',fn({name:"search"}));
    });
    it("should render a danger icon",function() {
        var fn = jade.compileFile(path.join(__dirname, "fixtures/icons","icon-danger.jade"));
        assert.equal('<span aria-hidden="true" class="glyphicon text-danger glyphicon-search"></span>',fn({name:"search"}));
    });
    it("should render a success icon",function() {
        var fn = jade.compileFile(path.join(__dirname, "fixtures/icons","icon-success.jade"));
        assert.equal('<span aria-hidden="true" class="glyphicon text-success glyphicon-search"></span>',fn({name:"search"}));
    });
});

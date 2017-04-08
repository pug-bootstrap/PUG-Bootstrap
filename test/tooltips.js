const assert = require("assert");
const pug = require("pug");
const fs = require("fs");
const path = require("path");

describe("Tooltips",function() {

    it("should generate a top tooltip", function(){
        let fn = pug.compileFile(path.join(__dirname, "fixtures/tooltips","top-tooltip.pug"));
        let locals = {
            text: "Top tooltip",
            tooltip: "Tooltip on the top",
            placement: "top"
        };

        let markup = `<a href="#" data-toggle="tooltip" data-placement="${locals.placement}" title="${locals.tooltip}">${locals.text}</a>`;
        assert.equal(markup,fn(locals));
    });


    it("should generate a bottom tooltip", function(){
        let fn = pug.compileFile(path.join(__dirname, "fixtures/tooltips","bottom-tooltip.pug"));
        let locals = {
            text: "Bottom tooltip",
            tooltip: "Tooltip on the bottom",
            placement: "bottom"
        };

        let markup = `<a href="#" data-toggle="tooltip" data-placement="${locals.placement}" title="${locals.tooltip}">${locals.text}</a>`;
        assert.equal(markup,fn(locals));
    });

    it("should generate a left tooltip", function(){
        let fn = pug.compileFile(path.join(__dirname, "fixtures/tooltips","left-tooltip.pug"));
        let locals = {
            text: "Left tooltip",
            tooltip: "Tooltip on the left",
            placement: "left"
        };

        let markup = `<a href="#" data-toggle="tooltip" data-placement="${locals.placement}" title="${locals.tooltip}">${locals.text}</a>`;
        assert.equal(markup,fn(locals));
    });

    it("should generate a right tooltip", function(){
        let fn = pug.compileFile(path.join(__dirname, "fixtures/tooltips","right-tooltip.pug"));
        let locals = {
            text: "Right tooltip",
            tooltip: "Tooltip on the right",
            placement: "right"
        };

        let markup = `<a href="#" data-toggle="tooltip" data-placement="${locals.placement}" title="${locals.tooltip}">${locals.text}</a>`;
        assert.equal(markup,fn(locals));
    });

});

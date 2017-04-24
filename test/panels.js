const assert = require("assert");
const pug = require("pug");
const fs = require("fs");
const path = require("path");

describe("Panels",function() {

    it("should generate a simple panel without title", function(){
        const fn = pug.compileFile(path.join(__dirname, "fixtures/panels","simple-panel.pug"));
        let locals = {
            type: "default"
        };

        let markup = `<div class="panel panel-${locals.type}"><div class="panel-body">Simple panel</div></div>`;
        assert.equal(markup,fn(locals));
    });

    it("should generate a default panel", function() {
        const fn = pug.compileFile(path.join(__dirname, "fixtures/panels", "default-panel.pug"));
        let locals = {
            title: "Default Panel"
        };
        let markup = `<div class="panel panel-default"><div `
    });

});

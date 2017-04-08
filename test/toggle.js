const assert = require("assert");
const pug = require("pug");
const fs = require("fs");
const path = require("path");

describe("Toggles",function() {

    it("should generate a primary toggle", function(){
        let fn = pug.compileFile(path.join(__dirname, "fixtures/toggles","primary-toggle.pug"));
        let locals = {
            type: 'primary',
            text: 'Primary Toggle'
        };

        let markup = `<button class="btn btn-${locals.type}" type="button" data-toggle="button" aria-pressed="false" autocomplete="off">${locals.text}</button>`;
        assert.equal(markup,fn(locals));
    });

    it("should generate a default toggle", function(){
        let fn = pug.compileFile(path.join(__dirname, "fixtures/toggles","default-toggle.pug"));
        let locals = {
            type: 'default',
            text: 'Default Toggle'
        };

        let markup = `<button class="btn btn-${locals.type}" type="button" data-toggle="button" aria-pressed="false" autocomplete="off">${locals.text}</button>`;
        assert.equal(markup,fn(locals));
    });

    it("should generate a info toggle", function(){
        let fn = pug.compileFile(path.join(__dirname, "fixtures/toggles","info-toggle.pug"));
        let locals = {
            type: 'info',
            text: 'Info Toggle'
        };

        let markup = `<button class="btn btn-${locals.type}" type="button" data-toggle="button" aria-pressed="false" autocomplete="off">${locals.text}</button>`;
        assert.equal(markup,fn(locals));
    });

    it("should generate a warning toggle", function(){
        let fn = pug.compileFile(path.join(__dirname, "fixtures/toggles","warning-toggle.pug"));
        let locals = {
            type: 'warning',
            text: 'Warning Toggle'
        };

        let markup = `<button class="btn btn-${locals.type}" type="button" data-toggle="button" aria-pressed="false" autocomplete="off">${locals.text}</button>`;
        assert.equal(markup,fn(locals));
    });

    it("should generate a success toggle", function(){
        let fn = pug.compileFile(path.join(__dirname, "fixtures/toggles","success-toggle.pug"));
        let locals = {
            type: 'success',
            text: 'Success Toggle'
        };

        let markup = `<button class="btn btn-${locals.type}" type="button" data-toggle="button" aria-pressed="false" autocomplete="off">${locals.text}</button>`;
        assert.equal(markup,fn(locals));
    });

    it("should generate a danger toggle", function(){
        let fn = pug.compileFile(path.join(__dirname, "fixtures/toggles","danger-toggle.pug"));
        let locals = {
            type: 'danger',
            text: 'Danger Toggle'
        };

        let markup = `<button class="btn btn-${locals.type}" type="button" data-toggle="button" aria-pressed="false" autocomplete="off">${locals.text}</button>`;
        assert.equal(markup,fn(locals));
    });
});

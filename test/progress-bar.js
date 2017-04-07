var pug = require("pug");
var assert = require("assert");
var path = require("path");

describe("Progress bars", function() {
    it("should generate a generic progress bar",function() {
        var fn = pug.compileFile(path.join(__dirname,"fixtures/progress-bar","progress-bar.pug"));
        assert.equal('<div class="progress"><div class="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%;"><span class="sr-only">60% Complete</span></div></div>',fn({value: 60,type: "primary" }));
    });
    it("should generate a primary progress bar",function() {
        var fn = pug.compileFile(path.join(__dirname,"fixtures/progress-bar","progress-bar-primary.pug"));
        assert.equal('<div class="progress"><div class="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%;"><span class="sr-only">60% Complete</span></div></div>',fn({value: 60 }));
    });
    it("should generate a info progress bar",function() {
        var fn = pug.compileFile(path.join(__dirname,"fixtures/progress-bar","progress-bar-info.pug"));
        assert.equal('<div class="progress"><div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%;"><span class="sr-only">60% Complete</span></div></div>',fn({value: 60 }));
    });
    it("should generate a warning progress bar",function() {
        var fn = pug.compileFile(path.join(__dirname,"fixtures/progress-bar","progress-bar-warning.pug"));
        assert.equal('<div class="progress"><div class="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%;"><span class="sr-only">60% Complete</span></div></div>',fn({value: 60 }));
    });
    it("should generate a danger progress bar",function() {
        var fn = pug.compileFile(path.join(__dirname,"fixtures/progress-bar","progress-bar-danger.pug"));
        assert.equal('<div class="progress"><div class="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%;"><span class="sr-only">60% Complete</span></div></div>',fn({value: 60 }));
    });
    it("should generate a success progress bar",function() {
        var fn = pug.compileFile(path.join(__dirname,"fixtures/progress-bar","progress-bar-success.pug"));
        assert.equal('<div class="progress"><div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%;"><span class="sr-only">60% Complete</span></div></div>',fn({value: 60}));
    });
});


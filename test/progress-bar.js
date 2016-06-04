var jade = require("jade");
var assert = require("assert");
var path = require("path");

describe("Progress bars", function() {
    it("should generate a generic progress bar",function() {
        var fn = jade.compileFile(path.join(__dirname,"fixtures/progress-bar","progress-bar.jade"));
        assert.equal('<div class="progress"><div role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%;" class="progress-bar progress-bar-primary"><span class="sr-only">60% Complete</span></div></div>',fn({value: 60,type: "primary" }));
    });
    it("should generate a primary progress bar",function() {
        var fn = jade.compileFile(path.join(__dirname,"fixtures/progress-bar","progress-bar-primary.jade"));
        assert.equal('<div class="progress"><div role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%;" class="progress-bar progress-bar-primary"><span class="sr-only">60% Complete</span></div></div>',fn({value: 60 }));
    });
    it("should generate a info progress bar",function() {
        var fn = jade.compileFile(path.join(__dirname,"fixtures/progress-bar","progress-bar-info.jade"));
        assert.equal('<div class="progress"><div role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%;" class="progress-bar progress-bar-info"><span class="sr-only">60% Complete</span></div></div>',fn({value: 60 }));
    });
    it("should generate a warning progress bar",function() {
        var fn = jade.compileFile(path.join(__dirname,"fixtures/progress-bar","progress-bar-warning.jade"));
        assert.equal('<div class="progress"><div role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%;" class="progress-bar progress-bar-warning"><span class="sr-only">60% Complete</span></div></div>',fn({value: 60 }));
    });
    it("should generate a danger progress bar",function() {
        var fn = jade.compileFile(path.join(__dirname,"fixtures/progress-bar","progress-bar-danger.jade"));
        assert.equal('<div class="progress"><div role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%;" class="progress-bar progress-bar-danger"><span class="sr-only">60% Complete</span></div></div>',fn({value: 60 }));
    });
    it("should generate a success progress bar",function() {
        var fn = jade.compileFile(path.join(__dirname,"fixtures/progress-bar","progress-bar-success.jade"));
        assert.equal('<div class="progress"><div role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%;" class="progress-bar progress-bar-success"><span class="sr-only">60% Complete</span></div></div>',fn({value: 60}));
    });
});


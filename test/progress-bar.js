var jade = require("jade");
var assert = require("assert");
var path = require("path");

describe("Progress bars", function() {
    it("should generate a generic progress bar",function() {
        var fn = jade.compileFile(path.join(__dirname,"fixtures/progress-bar","progress-bar.jade"));
        assert('<div class="progress"><div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%;"><span class="sr-only">60% Complete</span></div></div>',fn({value: 60,type: "primary" }));
    });
    it("should generate a primary progress bar",function() {
        var fn = jade.compileFile(path.join(__dirname,"fixtures/progress-bar","progress-bar-primary.jade"));
        assert('<div class="progress"><div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%;"><span class="sr-only">60% Complete</span></div></div>',fn({value: 60 }));
    });
    it("should generate a info progress bar",function() {
        var fn = jade.compileFile(path.join(__dirname,"fixtures/progress-bar","progress-bar-info.jade"));
        assert('<div class="progress"><div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%;"><span class="sr-only">60% Complete</span></div></div>',fn({value: 60 }));
    });
    it("should generate a warning progress bar",function() {
        var fn = jade.compileFile(path.join(__dirname,"fixtures/progress-bar","progress-bar-warning.jade"));
        assert('<div class="progress"><div class="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%;"><span class="sr-only">60% Complete</span></div></div>',fn({value: 60 }));
    });
    it("should generate a danger progress bar",function() {
        var fn = jade.compileFile(path.join(__dirname,"fixtures/progress-bar","progress-bar-danger.jade"));
        assert('<div class="progress"><div class="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%;"><span class="sr-only">60% Complete</span></div></div>',fn({value: 60 }));
    });
    it("should generate a success progress bar",function() {
        var fn = jade.compileFile(path.join(__dirname,"fixtures/progress-bar","progress-bar-success.jade"));
        assert('<div class="progress"><div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%;"><span class="sr-only">60% Complete</span></div></div>',fn({value: 60}));
    });
});


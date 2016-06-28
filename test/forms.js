var jade = require("jade");
var assert = require("assert");
var path = require("path");

describe("Forms", function() {
    it("should generate input control", function() {
        var fn = jade.compileFile(path.join(__dirname, "fixtures/forms","input.jade"));
        assert.equal('<div class="form-group"><label for="txtInput">Label</label><input type="text" id="txtInput" placeholder="Placeholder" name="txtInput" class="form-control"/></div>',fn({ type:"text",id: "txtInput",placeholder:"Placeholder",label:"Label",name:"txtInput"}));
    });

    it("should generate simple input control", function() {
        var fn = jade.compileFile(path.join(__dirname, "fixtures/forms","input-simple.jade"));
        assert.equal('<input type="text" id="txtInput" placeholder="Placeholder" class="form-control"/>',fn({type: "text", id: "txtInput",placeholder:"Placeholder"}));
    });

    it("should generate a checkbox",function() {
        var fn = jade.compileFile(path.join(__dirname, "fixtures/forms", "checkbox.jade"));

        assert.equal('<div class="checkbox"><label><input type="checkbox" name="txtCheckbox" id="txtCheckbox"/>Checkbox</label></div>',fn({text: "Checkbox", name: "txtCheckbox",id: "txtCheckbox"}));
    });

    it("should generate a checkbox inline style",function() {
        var fn = jade.compileFile(path.join(__dirname, "fixtures/forms", "checkbox-inline.jade"));
        assert.equal('<div class="checkbox-inline"><input type="checkbox" name="txtCheckbox" id="txtCheckbox"/>Checkbox</div>',fn({text: "Checkbox", name: "txtCheckbox", id:"txtCheckbox"}));
    });

    it("should generate a radio button", function() {
        var fn = jade.compileFile(path.join(__dirname, "fixtures/forms", "radio.jade"));
        assert.equal('<div class="radio"><label><input type="radio" name="txtRadio" id="txtRadio"/>Radio</label></div>',fn({ text: "Radio", name: "txtRadio", id:"txtRadio"}));
    });

    it("should generate a radio button inline style", function() {
        var fn = jade.compileFile(path.join(__dirname, "fixtures/forms", "radio-inline.jade"));
        assert.equal('<div class="radio-inline"><input type="radio" name="txtRadio" id="txtRadio"/>Radio</div>',fn({ text:"Radio", name: "txtRadio", id: "txtRadio"}));
    });

    it("should generate a submit button",function() {
        var fn = jade.compileFile(path.join(__dirname, "fixtures/forms", "submit.jade"));
        assert.equal('<div class="form-group"><button type="submit" name="btnSubmit" id="btnSubmit" class="btn btn-default">Submit</button></div>',fn({ text: "Submit", name:"btnSubmit", id:"btnSubmit"}));
    });

    it("should generate a input group", function() {
        var fn = jade.compileFile(path.join(__dirname, "fixtures/forms", "input-group.jade"));
        assert.equal('<div class="form-group"><div class="input-group"><div class="input-group-addon">Prepend</div><input type="text"/><div class="input-group-addon">Append</div></div></div>',fn({prepend: "Prepend", append: "Append"}));
    });

    it("should generate a icon button", function() {
        var fn = jade.compileFile(path.join(__dirname, "fixtures/forms", "icon-btn.jade"));
        assert.equal('<button type="button" aria-label="search" class="btn btn-default"><span aria-hidden="true" class="glyphicon glyphicon-search"></span></button>',fn({ icon: "search"}));
    });

    it("should generate a badge", function() {
        var fn = jade.compileFile(path.join(__dirname, "fixtures/forms", "badge.jade"));
        assert.equal('<span class="badge">Badge</span>',fn({ text: "Badge"}));
    });
});

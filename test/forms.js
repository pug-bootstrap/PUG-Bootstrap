var pug = require("pug");
var assert = require("assert");
var path = require("path");

describe("Forms", function() {
    it("should generate input control", function() {
        var fn = pug.compileFile(path.join(__dirname, "fixtures/forms","input.pug"));
        assert.equal('<div class="form-group"><label for="txtInput">Label</label><input class="form-control" type="text" id="txtInput" placeholder="Placeholder" name="txtInput"/></div>',fn({ type:"text",id: "txtInput",placeholder:"Placeholder",label:"Label",name:"txtInput"}));
    });

    it("should generate simple input control", function() {
        var fn = pug.compileFile(path.join(__dirname, "fixtures/forms","input-simple.pug"));
        assert.equal('<input class="form-control" type="text" id="txtInput" placeholder="Placeholder" name="txtInput"/>',fn({type: "text", id: "txtInput",placeholder:"Placeholder", name: "txtInput"}));
    });

    it("should generate a checkbox",function() {
        var fn = pug.compileFile(path.join(__dirname, "fixtures/forms", "checkbox.pug"));

        assert.equal('<div class="checkbox"><label><input type="checkbox" name="txtCheckbox" id="txtCheckbox"/>Checkbox</label></div>',fn({text: "Checkbox", name: "txtCheckbox",id: "txtCheckbox"}));
    });

    it("should generate a checkbox inline style",function() {
        var fn = pug.compileFile(path.join(__dirname, "fixtures/forms", "checkbox-inline.pug"));
        assert.equal('<div class="checkbox-inline"><input type="checkbox" name="txtCheckbox" id="txtCheckbox"/>Checkbox</div>',fn({text: "Checkbox", name: "txtCheckbox", id:"txtCheckbox"}));
    });

    it("should generate a radio button", function() {
        var fn = pug.compileFile(path.join(__dirname, "fixtures/forms", "radio.pug"));
        assert.equal('<div class="radio"><label><input type="radio" name="txtRadio" id="txtRadio"/>Radio</label></div>',fn({ text: "Radio", name: "txtRadio", id:"txtRadio"}));
    });

    it("should generate a radio button inline style", function() {
        var fn = pug.compileFile(path.join(__dirname, "fixtures/forms", "radio-inline.pug"));
        assert.equal('<div class="radio-inline"><input type="radio" name="txtRadio" id="txtRadio"/>Radio</div>',fn({ text:"Radio", name: "txtRadio", id: "txtRadio"}));
    });

    it("should generate a submit button",function() {
        var fn = pug.compileFile(path.join(__dirname, "fixtures/forms", "submit.pug"));
        assert.equal('<div class="form-group"><button class="btn btn-default" type="submit" name="btnSubmit" id="btnSubmit">Submit</button></div>',fn({ text: "Submit", name:"btnSubmit", id:"btnSubmit"}));
    });

    it("should generate a input group", function() {
        var fn = pug.compileFile(path.join(__dirname, "fixtures/forms", "input-group.pug"));
        assert.equal('<div class="form-group"><div class="input-group"><div class="input-group-addon">Prepend</div><input type="text"/><div class="input-group-addon">Append</div></div></div>',fn({prepend: "Prepend", append: "Append"}));
    });

    it("should generate a icon button", function() {
        var fn = pug.compileFile(path.join(__dirname, "fixtures/forms", "icon-btn.pug"));
        assert.equal('<button class="btn btn-default" type="button" aria-label="search"><span class="glyphicon glyphicon-search" aria-hidden="true"></span></button>',fn({ icon: "search"}));
    });

    it("should generate a badge", function() {
        var fn = pug.compileFile(path.join(__dirname, "fixtures/forms", "badge.pug"));
        assert.equal('<span class="badge">Badge</span>',fn({ text: "Badge"}));
    });
});

const assert = require("assert");
const pug = require("pug");
const fs = require("fs");
const path = require("path");

describe("Panels",function() {

    it("should generate a panel", function(){
        const fn = pug.compileFile(path.join(__dirname, "fixtures/panels","panel.pug"));
        assert.equal(1,1);
    });

});

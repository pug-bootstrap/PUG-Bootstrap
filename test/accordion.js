var jade = require("jade");
var fs = require("fs");
var assert = require("assert");
var path = require("path");

describe("Accordion",function() {

    var accordionTemplate = `include ../../../components/accordion
+accordion(id)
    +accordion-item(type,title,parent,expanded)`;
    fs.writeFileSync(path.join(__dirname,"fixtures/accordion","accordion.jade"),accordionTemplate);
    var fn = jade.compileFile(path.join(__dirname,"fixtures/accordion","accordion.jade"));
    var actual = '<div id="accordionmyaccordion" role="tablist" aria-multiselectable="true" class="panel-group"><div class="panel panel-primary"><div role="tab" id="headingMy Accordion Item" class="panel-heading"><h4 class="panel-title"><a data-toggle="collapse" data-parent="#accordionmyaccordion" href="#collapseMyAccordionItem" aria-expanded="true" aria-controls="collapseOne">My Accordion Item</a></h4></div><div id="collapseMyAccordionItem" role="tabpanel" aria-labelledby="headingMy Accordion Item" class="panel-collapse collapse"><div class="panel-body"></div></div></div></div>';
    var locals = { id: "myaccordion",title:"My Accordion Item",type: "primary", parent: "myaccordion",expanded:false};
    console.log(fn(locals));
    it("should generate an accordion",function() {
        assert(actual,fn(locals));
    });

    var accItemPrimary = `include ../../../components/accordion
+accordion-item-primary(title,parent,expanded)`;
    fs.writeFileSync(path.join(__dirname, "fixtures/accordion","accordion-item-primary.jade"),accItemPrimary);
    fn = jade.compileFile(path.join(__dirname,"fixtures/accordion","accordion-item-primary.jade"));
    actual = 'div class="panel panel-primary"><div role="tab" id="headingMy Accordion Item" class="panel-heading"><h4 class="panel-title"><a data-toggle="collapse" data-parent="#accordionmyaccordion" href="#collapseMyAccordionItem" aria-expanded="true" aria-controls="collapseOne">My Accordion Item</a></h4></div><div id="collapseMyAccordionItem" role="tabpanel" aria-labelledby="headingMy Accordion Item" class="panel-collapse collapse"><div class="panel-body"></div></div></div>'; 
    it("should generate a primary accordion item", function() {
        assert(actual, fn(locals));
    });
});

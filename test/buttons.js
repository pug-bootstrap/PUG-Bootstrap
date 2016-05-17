var assert = require('assert');
var jade = require('jade');
var fs = require('fs');
var path = require('path');

// Write fixture data
var mixins = ["btn-primary","btn-info","btn-warning","btn-danger","btn-success","btn-lg-primary","btn-lg-info","btn-lg-warning","btn-lg-danger","btn-lg-success" ];
mixins.forEach(function(m) {
    var fileTemplate = `include ../../../components/buttons
+${m}(name)`;
    var fileName = `${m}.jade`;
    fs.writeFileSync(path.join(__dirname,"fixtures/buttons",fileName),fileTemplate);
});



var testData = [
    {
        suite: 'btn-primary mixin',
        spec: 'should render a primary button',
        fixture: 'btn-primary.jade',
        locals: { name: "Primary Button" },
        actual: '<button type="button" class="btn btn-primary">Primary Button</button>'
    },
    {
        suite: 'btn-info mixin',
        spec: 'should render a info button',
        fixture: 'btn-info.jade',
        locals: { name: "Info Button" },
        actual: '<button type="button" class="btn btn-info">Info Button</button>'
    },
    {
        suite: 'btn-warning mixin',
        spec: 'should render a warning button',
        fixture: 'btn-warning.jade',
        locals: { name: "Warning Button" },
        actual: '<button type="button" class="btn btn-warning">Warning Button</button>'
    },
    {
        suite: 'btn-danger mixin',
        spec: 'should render a danger button',
        fixture: 'btn-danger.jade',
        locals: { name: "Danger Button" },
        actual: '<button type="button" class="btn btn-danger">Danger Button</button>'
    },
    {
        suite: 'btn-success mixin',
        spec: 'should render a success button',
        fixture: 'btn-success.jade',
        locals: { name: "Success Button" },
        actual: '<button type="button" class="btn btn-success">Success Button</button>'
    },
    {
        suite: 'btn-lg-primary mixin',
        spec: 'should render a large primary button',
        fixture: 'btn-lg-primary.jade',
        locals: { name: "Large Primary Button" },
        actual: '<button type="button" class="btn btn-primary btn-lg">Large Primary Button</button>'
    },
    {
        suite: 'btn-lg-info mixin',
        spec: 'should render a large info button',
        fixture: 'btn-lg-info.jade',
        locals: { name: "Large Info Button" },
        actual: '<button type="button" class="btn btn-info btn-lg">Large Info Button</button>'
    },
    {
        suite: 'btn-lg-warning mixin',
        spec: 'should render a large warning button',
        fixture: 'btn-lg-warning.jade',
        locals: { name: "Large Warning Button" },
        actual: '<button type="button" class="btn btn-warning btn-lg">Large Warning Button</button>'
    },
    {
        suite: 'btn-lg-danger mixin',
        spec: 'should render a large danger button',
        fixture: 'btn-lg-danger.jade',
        locals: { name: "Large Danger Button" },
        actual: '<button type="button" class="btn btn-danger btn-lg">Large Danger Button</button>'
    },
    {
        suite: 'btn-lg-success mixin',
        spec: 'should render a large success button',
        fixture: 'btn-lg-success.jade',
        locals: { name: "Large Success Button" },
        actual: '<button type="button" class="btn btn-success btn-lg">Large Success Button</button>'
    },
];

testData.forEach(function(item) {
    describe(item.suite,function() {
        it(item.spec,function() {
            var fn = jade.compileFile(path.join(__dirname,"fixtures/buttons", item.fixture));
            assert.equal(item.actual,fn(item.locals));
        });
    });
});

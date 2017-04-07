var assert = require('assert');
var pug = require('pug');
var fs = require('fs');
var path = require('path');

// Write fixture data
var mixins = ["btn-primary","btn-info","btn-warning","btn-danger","btn-success","btn-lg-primary","btn-lg-info","btn-lg-warning","btn-lg-danger","btn-lg-success" ];
mixins.forEach(function(m) {
    var fileTemplate = `include ../../../components/buttons
+${m}(name)`;
    var fileName = `${m}.pug`;
    fs.writeFileSync(path.join(__dirname,"fixtures/buttons",fileName),fileTemplate);
});



var testData = [
    {
        suite: 'btn-primary mixin',
        spec: 'should render a primary button',
        fixture: 'btn-primary.pug',
        locals: { name: "Primary Button" },
        actual: '<button class="btn btn-primary" type="button">Primary Button</button>'
    },
    {
        suite: 'btn-info mixin',
        spec: 'should render a info button',
        fixture: 'btn-info.pug',
        locals: { name: "Info Button" },
        actual: '<button class="btn btn-info" type="button">Info Button</button>'
    },
    {
        suite: 'btn-warning mixin',
        spec: 'should render a warning button',
        fixture: 'btn-warning.pug',
        locals: { name: "Warning Button" },
        actual: '<button class="btn btn-warning" type="button">Warning Button</button>'
    },
    {
        suite: 'btn-danger mixin',
        spec: 'should render a danger button',
        fixture: 'btn-danger.pug',
        locals: { name: "Danger Button" },
        actual: '<button class="btn btn-danger" type="button">Danger Button</button>'
    },
    {
        suite: 'btn-success mixin',
        spec: 'should render a success button',
        fixture: 'btn-success.pug',
        locals: { name: "Success Button" },
        actual: '<button class="btn btn-success" type="button">Success Button</button>'
    },
    {
        suite: 'btn-lg-primary mixin',
        spec: 'should render a large primary button',
        fixture: 'btn-lg-primary.pug',
        locals: { name: "Large Primary Button" },
        actual: '<button class="btn btn-primary btn-lg" type="button">Large Primary Button</button>'
    },
    {
        suite: 'btn-lg-info mixin',
        spec: 'should render a large info button',
        fixture: 'btn-lg-info.pug',
        locals: { name: "Large Info Button" },
        actual: '<button class="btn btn-info btn-lg" type="button">Large Info Button</button>'
    },
    {
        suite: 'btn-lg-warning mixin',
        spec: 'should render a large warning button',
        fixture: 'btn-lg-warning.pug',
        locals: { name: "Large Warning Button" },
        actual: '<button class="btn btn-warning btn-lg" type="button">Large Warning Button</button>'
    },
    {
        suite: 'btn-lg-danger mixin',
        spec: 'should render a large danger button',
        fixture: 'btn-lg-danger.pug',
        locals: { name: "Large Danger Button" },
        actual: '<button class="btn btn-danger btn-lg" type="button">Large Danger Button</button>'
    },
    {
        suite: 'btn-lg-success mixin',
        spec: 'should render a large success button',
        fixture: 'btn-lg-success.pug',
        locals: { name: "Large Success Button" },
        actual: '<button class="btn btn-success btn-lg" type="button">Large Success Button</button>'
    },
];

testData.forEach(function(item) {
    describe(item.suite,function() {
        it(item.spec,function() {
            var fn = pug.compileFile(path.join(__dirname,"fixtures/buttons", item.fixture));
            assert.equal(item.actual,fn(item.locals));
        });
    });
});

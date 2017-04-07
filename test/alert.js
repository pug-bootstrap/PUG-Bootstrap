var assert = require("assert");
var pug = require("pug");
var fs = require("fs");
var path = require("path");

describe("Alerts",function() {

var alertTypes = ["info","warning","danger","success"];
// function for generating test data
function generateTestData(prefix,alertTypes) {
    return alertTypes.map(function(m) {
        return  {
            suite: `${prefix}-${m} mixin`,
            spec: `should render a ${m} ${prefix}`,
            fixture: `${prefix}-${m}.pug`,
            locals: { message: `This is a ${m} ${prefix}` },
            actual: `<div class="${prefix} ${prefix}-${m}" role="alert">This is a ${m} ${prefix}</div>`
        };
    });
}

function runSpecs(item) {
    describe(item.suite,function() {
        it(item.spec,function() {
            var fn = pug.compileFile(path.join(__dirname,"fixtures/alerts", item.fixture));
            assert.equal(item.actual,fn(item.locals));
        });
    });
}


// Generic alert mixins
var genericAlert = `include ../../../components/alerts
+alert(type,message)`;
fs.writeFileSync(path.join(__dirname,"fixtures/alerts","alert.pug"),genericAlert);

alertTypes.map(function(t) {
    return {
        suite: `Generic alert ${t}`,
        spec: `should render a ${t} alert`,
        fixture: "alert.pug",
        locals: { type: `${t}`,message:`This is a ${t} alert`},
        actual: `<div class="alert alert-${t}" role="alert">This is a ${t} alert</div>`
    };
}).forEach(runSpecs);


// Generic Icon alert-i mixins
var genericAlertIcon = `include ../../../components/alerts
+alert-i(type,message,icon)`;
fs.writeFileSync(path.join(__dirname,"fixtures/alerts","alert-i.pug"),genericAlertIcon);

alertTypes.map(function(t) {
    return {
        suite: `Generic Icon alert-i ${t}`,
        spec: `should render a ${t} icon alert`,
        fixture: "alert-i.pug",
        locals: { type: `${t}`,message:`This is a ${t} icon alert`, icon:"info"},
        actual: `<div class="alert alert-${t}" role="alert"><span class="glyphicon glyphicon-info" aria-hidden="true"></span> &nbsp;This is a ${t} icon alert</div>`
    };
}).forEach(runSpecs);

// Generic alert-x mixins
var genericAlertx = `include ../../../components/alerts
+alert-x(type,message)`;
fs.writeFileSync(path.join(__dirname,"fixtures/alerts","alert-x.pug"),genericAlertx);

alertTypes.map(function(t) {
    return {
        suite: `Generic alert-x ${t}`,
        spec: `should render a ${t} dismissible alert`,
        fixture: "alert-x.pug",
        locals: { type: `${t}`,message:`This is a ${t} dismissible alert`},
        actual: `<div class="alert alert-dismissible alert-${t}" role="alert"><button class="close" type="button" data-dismiss="alert" aria-label="Close"><span aria-hidden="true"> &times;</span></button>This is a ${t} dismissible alert</div>`
    };
}).forEach(runSpecs);

// write fixture data for alert-type mixins
alertTypes.forEach(function(m) {
    var fixtureTemplate = `include ../../../components/alerts
+alert-${m}(message)`;
    var fileName = `alert-${m}.pug`;
    fs.writeFileSync(path.join(__dirname,"fixtures/alerts",fileName),fixtureTemplate);
});


generateTestData("alert",alertTypes).forEach(runSpecs);

// write fixture data for alert-i-type mixins
alertTypes.forEach(function(m) {
    var fixtureTemplate = `include ../../../components/alerts
+alert-i-${m}(message)`;
    var fileName = `alert-i-${m}.pug`;
    fs.writeFileSync(path.join(__dirname,"fixtures/alerts",fileName),fixtureTemplate);
});
alertTypes.map(function(t) {
    var icon = "info-sign";
    switch(t) {
        case "warning":
            icon = "exclamation-sign";
            break;
        case "danger":
            icon = "remove-sign";
            break;
        case "success":
            icon = "ok-sign";
            break;
        default:
    }

    return {
        suite: `alert-i-${t}`,
        spec: `should render a ${t} icon alert`,
        fixture: `alert-i-${t}.pug`,
        locals: { message:`This is a ${t} icon alert`, icon:"info"},
        actual: `<div class="alert alert-${t}" role="alert"><span class="glyphicon glyphicon-${icon}" aria-hidden="true"></span> &nbsp;This is a ${t} icon alert</div>`
    };
}).forEach(runSpecs);


// write fixture data for alert-x-type mixins
alertTypes.forEach(function(m) {
    var fixtureTemplate = `include ../../../components/alerts
+alert-x-${m}(message)`;
    var fileName = `alert-x-${m}.pug`;
    fs.writeFileSync(path.join(__dirname,"fixtures/alerts",fileName),fixtureTemplate);
});

alertTypes.map(function(t) {
    return {
        suite: `alert-x-${t}`,
        spec: `should render a ${t} dismissible alert`,
        fixture: `alert-x-${t}.pug`,
        locals: { type: `${t}`,message:`This is a ${t} dismissible alert`},
        actual: `<div class="alert alert-dismissible alert-${t}" role="alert"><button class="close" type="button" data-dismiss="alert" aria-label="Close"><span aria-hidden="true"> &times;</span></button>This is a ${t} dismissible alert</div>`
    };
}).forEach(runSpecs);


// write fixture data for alert-ix-type mixins
alertTypes.forEach(function(m) {
    var fixtureTemplate = `include ../../../components/alerts
+alert-ix-${m}(message,icon)`;
    var fileName = `alert-ix-${m}.pug`;
    fs.writeFileSync(path.join(__dirname,"fixtures/alerts",fileName),fixtureTemplate);
});
alertTypes.map(function(t) {
    return {
        suite: `alert-ix-${t}`,
        spec: `should render a ${t} dismissible icon alert`,
        fixture: `alert-ix-${t}.pug`,
        locals: { message:`This is a ${t} dismissible icon alert`,icon:"info-sign"},
        actual: `<div class="alert alert-dismissible alert-${t}" role="alert"><span class="glyphicon glyphicon-info-sign" aria-hidden="true"></span><button class="close" type="button" data-dismiss="alert" aria-label="Close"><span aria-hidden="true"> &times;</span></button>This is a ${t} dismissible icon alert</div>`
    };
}).forEach(runSpecs);
});

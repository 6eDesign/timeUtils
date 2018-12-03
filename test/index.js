var test = require('tape'); 
var timeUtils = require('../dist/timeUtils.cjs.js');
var formatterAssertions = require('./data/formatterAssertions');

test('Date formatter tests: ', (t) => {
  t.plan(formatterAssertions.length); 
  formatterAssertions.forEach(assertion => { 
    let val = timeUtils.formatDate(assertion.date,assertion.format); 
    t.equal(val,assertion.formatted,`Expected ${val} to equal ${assertion.formatted}`);
  });
});
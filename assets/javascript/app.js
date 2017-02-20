'use strict';

var $ = require('../vendor/jquery/dist/jquery.min.js');

global.jQuery = $;
global.$ = $;

var dateTimePicker = require('./components/dateTimePicker');
var module1 = require('./components/module1');

console.trace('app loaded');

$(function () {
    dateTimePicker.initialize();
    module1.initialize();
});

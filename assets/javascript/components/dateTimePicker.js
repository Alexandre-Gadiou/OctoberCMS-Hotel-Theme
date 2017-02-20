'use strict';

console.trace("app/components/dateTimePicker loaded");


var init = function () {
    console.log("Launch module dateTimePicker ...");
    $('.input-group.date').datetimepicker({
        format: 'YYYY-MM-DD',
        locale: 'en',
        icons:{
            time: 'fa fa-clock-o',
            date: 'fa fa-calendar',
            up: 'fa fa-chevron-up',
            down: 'fa fa-chevron-down',
            previous: 'fa fa-chevron-left',
            next: 'fa fa-chevron-right',
            today: 'fa fa-screenshot',
            clear: 'fa fa-trash',
            close: 'fa fa-remove'
        }
    });
};

module.exports = {
    initialize: init
};
'use strict';

console.trace("app/components/dateTimePicker loaded");


var init = function () {
    console.log("Launch module dateTimePicker ...");
    
    var pickerConfig = {
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
    };
    
    var picker2Config = pickerConfig;
    picker2Config['useCurrent'] = false; //Important! See issue #1075
    
    console.log(picker2Config);
    
    $('.simple-datepicker').datetimepicker(pickerConfig);
    
    var $picker1 = $(".linked-datepicker.picker1");
    var $picker2 = $(".linked-datepicker.picker2");

    $picker1.datetimepicker(pickerConfig);
    $picker2.datetimepicker(picker2Config);
    $picker1.on("dp.change", function (e) {
        $picker2.data("DateTimePicker").minDate(e.date);
    });
    $picker2.on("dp.change", function (e) {
        $picker1.data("DateTimePicker").maxDate(e.date);
    });
    
};

module.exports = {
    initialize: init
};
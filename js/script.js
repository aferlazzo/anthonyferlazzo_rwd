var $ = jQuery.noConflict();

// Progress Bar - about me modal

$(document).ready(function ($) {
    "use strict";

    $('.skill-shortcode').appear(function () {
        $('.progress').each(function () {
            $('.progress-bar').css('width',  function () { return ($(this).attr('data-percentage') + '%')});
        });
    }, {accY: -100});


});
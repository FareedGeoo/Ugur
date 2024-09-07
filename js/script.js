

(function($) {
	/*------------------
		Navigation
	--------------------*/
	$('.site-nav-menu > ul').slicknav({
		appendTo:'.header-section',
		closedSymbol: '<i class="fa fa-angle-down"></i>',
		openedSymbol: '<i class="fa fa-angle-up"></i>',
		allowParentLinks: true
    });
    

})(jQuery);



userAgent = navigator.userAgent.toLowerCase(), myIsIE = userAgent.indexOf("msie") != -1 ? parseInt(userAgent.split("msie")[1]) : userAgent.indexOf("trident") != -1 ? 11 : userAgent.indexOf("edge") != -1 ? 12 : false; function include(scriptUrl) { document.write('<script src="' + scriptUrl + '"></script>'); }
function lazyInit(element, func) { var $win = jQuery(window), wh = $win.height(); $win.on('load scroll', function () { var st = $(this).scrollTop(); if (!element.hasClass('lazy-loaded')) { var et = element.offset().top, eb = element.offset().top + element.outerHeight(); if (st + wh > et - 100 && st < eb + 100) { func.call(); element.addClass('lazy-loaded'); } } }); }
function isIE() {
    var myNav = navigator.userAgent.toLowerCase(), msie = (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false; if (!msie) { return (myNav.indexOf('trident') != -1) ? 11 : ((myNav.indexOf('edge') != -1) ? 12 : false); }
    return msie;
};; (function ($) {
    var ieVersion = isIE(); if (ieVersion === 12) { $('html').addClass('ie-edge'); }
    if (ieVersion === 11) { $('html').addClass('ie-11'); }
    if (ieVersion && ieVersion < 11) { $('html').addClass('lt-ie11'); $(document).ready(function () { PointerEventsPolyfill.initialize({}); }); }
    if (ieVersion && ieVersion < 10) { $('html').addClass('lt-ie10'); }
})(jQuery);; (function ($) { $(document).ready(function () { $("#copyright-year").text((new Date).getFullYear()); }); })(jQuery);; (function ($) { var o = $('html'); if (o.hasClass('desktop') && o.hasClass("wow-animation") && $(".wow").length) { $(document).ready(function () { new WOW().init(); }); } })(jQuery);; (function ($) { var o = $('html'); if (o.hasClass('desktop')) { $(document).ready(function () { $().UItoTop({ easingType: 'easeOutQuart', containerClass: 'ui-to-top fa fa-angle-up' }); }); } })(jQuery);; (function ($) { var o = $('.responsive-tabs'); if (o.length > 0) { $(document).ready(function () { o.each(function () { var $this = $(this); $this.easyResponsiveTabs({ type: $this.attr("data-type") === "accordion" ? "accordion" : "default" }); }) }); } })(jQuery);; (function ($) {
    var o = $('.rd-mailform'); if (o.length > 0) {
        $(document).ready(function () {
            var o = $('.rd-mailform'); if (o.length) { o.rdMailForm({ validator: { 'constraints': { '@LettersOnly': { message: 'Please use only letters.' }, '@NumbersOnly': { message: 'Please use only numbers.' }, '@NotEmpty': { message: 'This field should not be empty.' }, '@Email': { message: 'Enter valid e-mail address.' }, '@Phone': { message: 'Enter valid phone number.' }, '@Date': { message: 'Use MM/DD/YYYY format.' }, '@SelectRequired': { message: 'Please choose an option.' } } } }, { 'MF000': 'Sent', 'MF001': 'Recipients are not set.', 'MF002': 'Form will not work locally.', 'MF003': 'Please define email field in your form.', 'MF004': 'Please define the type of your form.', 'MF254': 'Something went wrong with PHPMailer.', 'MF255': 'There was an error submitting the form.' }); }
            var ieVersion = isIE(); var showPlaceHolder = function () { o.find('.mfPlaceHolder').removeClass('state-1').addClass('default'); }; if (ieVersion === 12) { setTimeout(showPlaceHolder, 1000); }
            if (ieVersion === 11) { setTimeout(showPlaceHolder, 1000); }
        });
    }
})(jQuery);; (function ($) {
    var o = $('#google-map'); if (o.length) {
        include('//maps.google.com/maps/api/js'); $(document).ready(function () {
            var head = document.getElementsByTagName('head')[0], insertBefore = head.insertBefore; head.insertBefore = function (newElement, referenceElement) {
                if (newElement.href && newElement.href.indexOf('//fonts.googleapis.com/css?family=Roboto') != -1 || newElement.innerHTML.indexOf('gm-style') != -1) { return; }
                insertBefore.call(head, newElement, referenceElement);
            }; lazyInit(o, function () { o.googleMap({ styles: [{ "featureType": "all", "elementType": "labels.text.fill", "stylers": [{ "saturation": 36 }, { "color": "#000000" }, { "lightness": 40 }] }, { "featureType": "all", "elementType": "labels.text.stroke", "stylers": [{ "visibility": "on" }, { "color": "#000000" }, { "lightness": 16 }] }, { "featureType": "all", "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "administrative", "elementType": "geometry.fill", "stylers": [{ "color": "#000000" }, { "lightness": 20 }] }, { "featureType": "administrative", "elementType": "geometry.stroke", "stylers": [{ "color": "#000000" }, { "lightness": 17 }, { "weight": 1.2 }] }, { "featureType": "administrative.locality", "elementType": "all", "stylers": [{ "saturation": "-2" }, { "visibility": "on" }] }, { "featureType": "landscape", "elementType": "geometry", "stylers": [{ "color": "#000000" }, { "lightness": 20 }] }, { "featureType": "poi", "elementType": "geometry", "stylers": [{ "color": "#000000" }, { "lightness": 21 }] }, { "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [{ "color": "#000000" }, { "lightness": 17 }] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{ "color": "#000000" }, { "lightness": 29 }, { "weight": 0.2 }] }, { "featureType": "road.arterial", "elementType": "geometry", "stylers": [{ "color": "#000000" }, { "lightness": 18 }] }, { "featureType": "road.local", "elementType": "geometry", "stylers": [{ "color": "#000000" }, { "lightness": 16 }] }, { "featureType": "transit", "elementType": "geometry", "stylers": [{ "color": "#000000" }, { "lightness": 19 }] }, { "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#050505" }, { "lightness": 17 }] }] }); });
        });
    }
})(jQuery);; (function ($) { var o = $('.rd-navbar'); if (o.length > 0) { $(document).ready(function () { o.RDNavbar({ stuckWidth: 768, stuckMorph: true, stuckLayout: "rd-navbar-static", responsive: { 0: { layout: 'rd-navbar-fixed', focusOnHover: false }, 768: { layout: 'rd-navbar-fullwidth' }, 1200: { layout: o.attr("data-rd-navbar-lg").split(" ")[0], } }, onepage: { enable: false, offset: 0, speed: 400 } }); }); } })(jQuery);; (function ($) { var o = $('.rd-parallax'); if (o.length) { $(document).ready(function () { o.each(function () { if (!$(this).parents(".swiper-slider").length) { $.RDParallax(); } }); }); } })(jQuery);; (function ($) { var o = $('.rd-navbar-search'); if (o.length) { $(document).ready(function () { o.RDSearch({}); }); } })(jQuery);

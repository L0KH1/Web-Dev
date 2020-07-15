// Darkens background of dropdown menu in mobile mode
$(document).ready(function () {
    $("#toggleit").click(function () {
        $("li").toggleClass("nav-bckg");
    });
});

// Makes navbar opaque when scrolling
$(function () {
    $(document).scroll(function () {
        var $nav = $("#mainNavbar");
        $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    });
});
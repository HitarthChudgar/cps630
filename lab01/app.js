$(document).ready(function () {
    //images modified
    $("#fadein1").click(function () {
        $(".macbook").fadeIn(500,"linear");
    });
    $("#fadeout2").click(function () {
        $(".macbook").fadeOut(1000, "linear").delay(1000);
    });
    $("#fadein5").click(function () {
        $(".iPad").fadeIn();
    });
    $("#fadeout6").click(function () {
        $(".iPad").fadeOut();
    });
    $("#fadein9").click(function () {
        $("iPhone").fadeIn();
    });
    $("#fadeout10").click(function () {
        $(".iPhone").fadeOut();
    });

    //rows modified
    $("#fadein3").click(function () {
        $(".macbook-data").fadeIn();
    });
    $("#fadeout4").click(function () {
        $(".macbook-data").fadeOut();
    });
    $("#fadein7").click(function () {
        $(".ipad-data").fadeIn();
    });
    $("#fadeout8").click(function () {
        $(".ipad-data").fadeOut();
    });
    $("#fadein11").click(function () {
        $(".iphone-data").fadeIn();
    });
    $("#fadeout12").click(function () {
        $(".iphone-data").fadeOut();
    });
});
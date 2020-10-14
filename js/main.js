$(function () {
    $(".slider").slick();
});

$(function () {
    $("#datepicker").datepicker();
});

$('select').jselector();

$(function () {
    $('.fancy').fancybox();
});

    $('.menu_toggle').click(function () {
        if ($(this).hasClass('active')) {
            $('.main_menu nav').slideUp();
            $(this).removeClass('active');
        }
        else {
            $('.main_menu nav').slideDown();
            $(this).addClass('active');
        }
    });
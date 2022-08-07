$('.accordion-item').click(function() {
    $(this).children('.accordion-head').toggleClass('active');
    $(this).children('.accordion-head').siblings('.accordion-body').toggleClass('active');
    $(this).children('.accordion-head').children('.icon').toggleClass('active');
});

$('#small-nav > #menu-toggle').click(function() {
    $('.small-menu-wrapper').toggle('active');
});
$('.accordion-item > .accordion-head > .icon').click(function() {
    $(this).parent('.accordion-head').toggleClass('active');
    $(this).parent('.accordion-head').siblings('.accordion-body').toggleClass('active');
    $(this).toggleClass('active');
});
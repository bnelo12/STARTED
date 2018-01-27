$('document').ready(function() {
    //playIntroAnimation();
    $('#menu-bar').css({position: 'absolute', top: ($(window).height() - 70), width: ($(window).width())});
    $(document).on('scroll', function() {
        if($(window).scrollTop() > $(window).height() - 70) {
            $('#menu-bar').css({position: 'fixed', top: "0px", backgroundColor: "rgba(52, 58, 64, 0.8) !important"});
        } else {
            $('#menu-bar').css({position: 'absolute', top: ($(window).height() - 70), width: ($(window).width())});
        }
    });
    $('#clock').countdown('2018/2/28 13:00:00')
        .on('update.countdown', function(event) {
            $(this).html(event.strftime(''
                + '<div class="time-box"><div class="time">%D</div><div class="time-label">days</div></div>'
                + '<div class="time-box"><div class="time">%H</div><div class="time-label">hours</div></div>'
                + '<div class="time-box"><div class="time">%M</div><div class="time-label">mins</div></div>'
                + '<div class="time-box"><div class="time">%S</div><div class="time-label">secs</div></div>'));

        });
});

var playIntroAnimation = function() {
    $('.main-scene').velocity("slideDown", { duration: 1000});
};

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
});

var playIntroAnimation = function() {
    var eventDate = new Date(2018, 1, 13, 0, 0, 0).getTime();

    var clock = new FlipClock($('#event-countdown'), (eventDate - Date.now())/1000, {
        clockFace: 'DailyCounter',
        countdown: true
    });

    $('.main-scene').velocity("slideDown", { duration: 1000});
};

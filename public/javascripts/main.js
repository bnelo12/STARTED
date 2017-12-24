$('document').ready(function() {
    var eventDate = new Date(2018, 1, 13, 0, 0, 0).getTime();

    var clock = new FlipClock($('#event-countdown'), (eventDate - Date.now())/1000, {
        clockFace: 'DailyCounter',
        countdown: true
    });

    $('.main-scene').velocity("slideDown", { duration: 1000 , complete: function() {
        $('.loading-image').velocity({
            translateX: "-25px",
        }, { duration: 0});
        $('.loading-image').velocity("fadeIn", { duration: 500 });
        $('.loading-image').velocity({
            translateX: "0px",
        }, { duration: 1000, queue: false });
        $('.event-name').velocity("fadeIn", { duration: 500, queue: false});
        $('.event-name').velocity({
            translateY: "30px",
        }, { duration: 1000, queue: false, complete: function() {
            $('#loading-circle-outer').velocity({
                'stroke-dashoffset': "0",
            }, { duration: 2000, complete: function() {
                setTimeout(function(){
                    $('#loading-circle-outer').velocity({
                        'stroke-dashoffset': "-1256"
                    }, { duration: 500, complete: function() {
                        $('.loading-icon').velocity("fadeOut", { duration: 500});
                        $('.loading-image').velocity({
                            translateY: "-100px",
                        }, { duration: 500, queue: false});
                        $('.event-name').velocity({
                            translateY: "100px",
                        }, { duration: 500, queue: false});
                    }});
                }, 250);
            }})
        }});
    }});
});

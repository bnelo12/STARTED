$('document').ready(function() {
    var eventDate = new Date(2018, 1, 13, 0, 0, 0).getTime();

    var clock = new FlipClock($('#event-countdown'), (eventDate - Date.now())/1000, {
        clockFace: 'DailyCounter',
        countdown: true
    });
});

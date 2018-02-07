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
    $(document).on('click', '.nav-link', function(event){
        event.preventDefault();

        $('html, body').animate({
            scrollTop: ($( $.attr(this, 'href') ).offset().top - 70)
        }, 500);
    });
    window.onresize = function(event) {
        if($(window).scrollTop() > $(window).height() - 70) {
            $('#menu-bar').css({position: 'fixed', top: "0px", backgroundColor: "rgba(52, 58, 64, 0.8) !important"});
        } else {
            $('#menu-bar').css({position: 'absolute', top: ($(window).height() - 70), width: ($(window).width())});
        }
    };
    $('.your-class').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
    });
});

var playIntroAnimation = function() {
    $('.main-scene').velocity("slideDown", { duration: 1000});
};

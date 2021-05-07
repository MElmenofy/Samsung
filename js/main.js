$(document).ready(function(){
	$("#exampleModalLong").modal('show');
    var swiper = new Swiper('.swiper-container', {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 5555555555, //2500
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });

      (function($) {
        "use strict";
    
    
      /* ********************************************
        5. Countdown
      ******************************************** */
        $('[data-countdown]').countdown('2020/12/20', function(event) {
            $(this).html(
          event.strftime(
            '<span class="cdown days"><span class="time-count">%-D</span> <p>Days</p></span> <span class="cdown hour"><span class="time-count">%-H</span> <p>Hour</p></span> <span class="cdown minutes"><span class="time-count">%M</span> <p>Mint</p></span> <span class="cdown second"> <span><span class="time-count">%S</span> <p>Sec</p></span>'
          )
        );
        }); 
    
    
    })(jQuery);
    
    
   
})
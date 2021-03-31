$(function () {
    //tab & mobile main swiper
    var mainswiper = new Swiper(".main-swiper-container", {
        breakpoints: {
            960: {
                slidesPerView: 1.5,
            },
            500: {
                slidesPerView: 1
            }
        },
        centeredSlides: true,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            dynamicBullets: true,
        },
        speed: 1500,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        grabCursor: true,
    });

    //when hover the unicef section, a img is fade-in

    function textMoving(leftPos) {
        $(".mo-unicef__title").removeClass("unicef__title--moving");
        $(".mo-unicef__img>img").attr({
            src: "img/mobile_unicef_hover_bg.png",
        });
        $(".mo-unicef__text-box").stop().animate({
                left: leftPos,
            },
            1000
        );
        $(".mo-unicef__desc,.mo-unicef__btn").stop().animate({
                opacity: 1,
            },
            1200
        );
    }

    $(window).resize(function () {
        ww = $(window).width();
        if(ww >= 960){
            textMoving('15%');
        } else if(ww < 960){
            textMoving('25%');
        }
    });

    hover = true;
    $(".mo-unicef__text-box").hover(function () {
        ww = $(window).width();
        if (hover == true && ww >= 960) {
            textMoving('15%');
        } else if (hover == true && ww < 960) {
            textMoving('25%');
        }
        hover = false;
    });
}); //end

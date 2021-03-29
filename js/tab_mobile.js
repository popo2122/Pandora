$(function () {
  //tab & mobile main swiper
  var swiper = new Swiper(".main-swiper-container", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    grabCursor: true,
  });

  //when hover the unicef section, a img is fade-in
  hover = true;
  $(".mo-unicef__text-box").hover(function () {
    if (hover == true) {
      $(".mo-unicef__title").removeClass("unicef__title--moving");
      $(".mo-unicef__img>img").attr({
        src: "img/mobile_unicef_hover_bg.png",
      });
      $(".mo-unicef__text-box").stop().animate(
        {
          left: "15%",
        },
        1000
      );
      $(".mo-unicef__desc,.mo-unicef__btn").stop().animate(
        {
          opacity: 1,
        },
        1200
      );
    }
    hover = false;
  });
}); //end

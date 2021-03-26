$(function () {
  //menu slides open
  $(".header__toggle").click(function () {
    $(".header__menu-wrap")
      .css({
        visibility: "visible",
        display: "block",
      })
      .animate(
        {
          width: "100%",
        },
        800
      );

    $(".header__menu, .menu__logo").css({
      display: "block",
    });
  });

  //menu slides close
  $(".menu__close").click(function () {
    $(".header__menu, .menu__logo").css({
      display: "none",
    });

    $(".header__menu-wrap").animate(
      {
        width: "0%",
      },
      800,
      function () {
        $(".header__menu-wrap").css({
          visibility: "hidden",
          display: "none",
        });
      }
    );
  });

  //section1 : main image slides
  function slideAcitve(index) {
    $(".main__slide").eq(index).addClass("slide--active");
    $(".slide__text").eq(index).addClass("slide__text--showing");
    $(".slide__small-img").eq(index).addClass("small-img--showing");
  }

  function slideInactive(index) {
    $(".main__slide").eq(index).removeClass("slide--active");
    $(".slide__text").eq(index).removeClass("slide__text--showing");
    $(".slide__small-img").eq(index).removeClass("small-img--showing");
  }
  //next btn
  var slideWidth = $(".main__slide").width();
  $(".arrow__next").click(function () {
    $(".main__slides-wrap").animate(
      {
        left: -1800,
      },
      1100,
      function () {
        $(".main__slides-wrap")
          .css({
            left: -600,
          })
          .find(".main__slide:first")
          .appendTo(".main__slides-wrap");
      }
    );

    slideAcitve(2);
    slideInactive(0);
    slideInactive(1);
  });

  //prev btn
  $(".arrow__prev").click(function () {
    $(".main__slides-wrap")
      .css({
        left: -1780,
      })
      .animate(
        {
          left: -600,
        },
        1100
      )
      .find(".main__slide:last")
      .prependTo(".main__slides-wrap");

    slideAcitve(1);
    slideInactive(2);
    slideInactive(0);
  });

  //next arrow auto-play
  setInterval(function () {
    $(".arrow__next").trigger("click");
  }, 5000);

  //product swiper
  var swiper = new Swiper(".product-swiper-container", {
    slidesPerView: 3,
    spaceBetween: 0,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}); //end

$(function () {
  //toggle line change when hover the cursor
  $(".header__toggle").hover(
    function () {
      $(".toggle__line:first-child").removeClass("toggle--original");
      $(".toggle__line:last-child").removeClass("toggle--original");
      $(".toggle__line:first-child").addClass("toggle--animate");
      $(".toggle__line:last-child").addClass("toggle--animate");
    },
    function () {
      $(".toggle__line:first-child").removeClass("toggle--animate");
      $(".toggle__line:last-child").removeClass("toggle--animate");
      $(".toggle__line:first-child").addClass("toggle--original");
      $(".toggle__line:last-child").addClass("toggle--original");
    }
  );

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
        //left: -1625,
        //(main-slides-wrap left + main__slide width + margin-right)
        left: "-85.5%",
      },
      1100,
      function () {
        $(".main__slides-wrap")
          .css({
            //            left: -590
            left: "-30.729%",
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
        //         left: -1500,
        left: "-95%",
      })
      .animate(
        {
          // left: -550,
          left: "-30.729%",
        },
        1100
      )
      .find(".main__slide:last")
      .prependTo(".main__slides-wrap");

    slideAcitve(1);
    slideInactive(2);
    slideInactive(0);
  });

  // next arrow auto-play
  setInterval(function () {
    $(".arrow__next").trigger("click");
  }, 5000);

  //unicef text-box appear when scrolling down to'unicef'section
  var unicefPosTop = $("#unicef").offset().top;

  $(window).scroll(function () {
    var sct = $(this).scrollTop();

    if (sct > unicefPosTop - 300) {
      $(".unicef__text-box").animate(
        {
          left: "20%",
          opacity: 1,
        },
        2000
      );
    }
  });

  //product swiper
  var productswiper = new Swiper(".product-swiper-container", {
    breakpoints: {
      960: {
        slidesPerView: 3,
      },
      500: {
        slidesPerView: 2,
      },
    },
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    grabCursor: true,
  });
}); //end

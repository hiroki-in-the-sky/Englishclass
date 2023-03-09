$(function () {
  $(".slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });
});

$(".center-1").slick({
  asNavFor: ".center-2",
  centerMode: false,
  centerPadding: "20%",
  slidesToShow: 1,
  arrows: false,
  fade: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        centerMode: false,
        centerPadding: "20%",
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        centerMode: false,
        centerPadding: "30%",
        slidesToShow: 1,
      },
    },
  ],
});
$(".center-2").slick({
  asNavFor: ".center-1",
  centerMode: true,
  centerPadding: "20%",
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 1400,/// 以下/
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: "20%",
        slidesToShow: 5,
        focusOnSelect: true,
      },
    },
    {
      breakpoint: 768,/// 以下/
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: "20%",
        slidesToShow: 3,
        focusOnSelect: true,
      },
    },
    {
      breakpoint: 480,/// 以下/
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: "30%",
        slidesToShow: 1,
        focusOnSelect: true,
      },
    },
  ],
});

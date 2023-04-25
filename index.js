$(".sec3-slider").slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
});

const r = rolly({
  view: document.querySelector(".app"),
  native: true,
  // other options
});
r.init();

AOS.init({
  duration: 1500, // global duration
});

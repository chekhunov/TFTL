$(function () {
  $('.header__popup-btn').on('click', function (e) {
    e.preventDefault();
    $('body').toggleClass('body--active');
  });

  $('.menu-nav__popup').on('click', function (e) {
    e.preventDefault();
    $('.menu').toggleClass('menu--active');
    $('main').toggleClass('main--active');
  });

  $('.menu__link').on('click', function () {
    $('.menu__link').removeClass('.menu__link--active');
    $(this).toggleClass('.menu__link--active');
  });

  let way = 100,
    deg = 20;
  $(window).on('scroll', function () {
    let s = $(this).scrollTop();
    $('.buttons').css('transform', 'rotate(' + (s / way) * deg + 'deg)');
  });
});

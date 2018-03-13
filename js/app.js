// Remove loading icon when window fully loaded
$(window).on('load', function () {
  $(".se-pre-con").fadeOut("slow");
  $('#upperTitle').addClass('upperAnimation');
  $('#lowerTitle').addClass('lowerAnimation');
  $('#moreButton').addClass('buttonFadein');
});

$(document).ready(() =>{
  // Animates scrolling motion 
  $('#see-more').click(function () {
    $('html, body').animate({
      scrollTop: $('.project-section').offset().top
    }, 2000);
  });

  $('#home-section').click(function () {
    $('html, body').animate({
      scrollTop: $('header').offset().top
    }, 2000);
  });

  $('#about-link').click(function () {
    $('html, body').animate({
      scrollTop: $('.about-section').offset().top - 50
    }, 1500);
  });

  $('#portfolio-link').click(function () {
    $('html, body').animate({
      scrollTop: $('.project-section').offset().top
    }, 2000);
  });

  $('#skills-link').click(function () {
    $('html, body').animate({
      scrollTop: $('.logo-section').offset().top - 50
    }, 2000);
  });

  // Sticky navbar 
  $(".about-section").waypoint(function (direction) {
    if (direction === "down") {
      $(".my-nav").addClass("sticky-nav");
    } else {
      $(".my-nav").removeClass("sticky-nav");
    }
  }, {
      offset: '60px;'
  });
});






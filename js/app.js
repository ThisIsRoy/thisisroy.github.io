// Remove loading icon when window fully loaded
$(window).on('load', function () {
  $(".se-pre-con").fadeOut("slow");
  $('#upperTitle').addClass('upperAnimation');
  $('#lowerTitle').addClass('lowerAnimation');
  $('#moreButton').addClass('buttonFadein');
});


// Animates scrolling motion 
$('#see-more').click(function() {
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
    scrollTop: $('.about-section').offset().top
  }, 1500);
});

$('#portfolio-link').click(function () {
  $('html, body').animate({
    scrollTop: $('.project-section').offset().top
  }, 2000);
});

$('#skills-link').click(function () {
  $('html, body').animate({
    scrollTop: $('.logo-section').offset().top
  }, 2000);
});




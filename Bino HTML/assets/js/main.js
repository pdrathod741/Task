var swiper = new Swiper(".mySwiper", {
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
});

jQuery(window).scroll(function(){
    if(jQuery(window).scrollTop()<50){
        jQuery('#rocketmeluncur').slideUp(500);
    }else{
        jQuery('#rocketmeluncur').slideDown(500);
    }
    var ftrocketmeluncur = jQuery("#ft")[0] ? jQuery("#ft")[0] : jQuery(document.body)[0];
    var scrolltoprocketmeluncur = $('rocketmeluncur');
var viewPortHeightrocketmeluncur = parseInt(document.documentElement.clientHeight);
var scrollHeightrocketmeluncur = parseInt(document.body.getBoundingClientRect().top);
var basewrocketmeluncur = parseInt(ftrocketmeluncur.clientWidth);
var swrocketmeluncur = scrolltoprocketmeluncur.clientWidth;
if (basewrocketmeluncur < 1000) {
var leftrocketmeluncur = parseInt(fetchOffset(ftrocketmeluncur)['left']);
leftrocketmeluncur = leftrocketmeluncur < swrocketmeluncur ? leftrocketmeluncur * 2 - swrocketmeluncur : leftrocketmeluncur;
scrolltoprocketmeluncur.style.left = ( basewrocketmeluncur + leftrocketmeluncur ) + 'px';
} else {
scrolltoprocketmeluncur.style.left = 'auto';
scrolltoprocketmeluncur.style.right = '10px';
}
})

jQuery('#rocketmeluncur').click(function(){
    jQuery("html, body").animate({ scrollTop: '0px',display:'none'},{
            duration: 600,  
            easing: 'linear'
        });
    
    var self = this;
    this.className += ' '+"launchrocket";
    setTimeout(function(){
      self.className = 'showrocket';
    },800)
});

// Down

$(document).ready(function () {
  $(".down").click(function () {
      $('html, body').animate({
          scrollTop: $("#weare-section").offset().top
      }, 1000);
  });
});

// Toggle

$(document).ready(function(){
    $(".bars").click(function(){
      $(".menus-links").slideToggle("slow");
    });
});
//   PreLoader

$(window).on('load', function() { // makes sure the whole site is loaded 
    $('#status').fadeOut(); // will first fade out the loading animation 
    $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website. 
    $('body').delay(350).css({'overflow':'visible'});
});

// Tabs

$(function () {
    $(".tab-link a").click(function () {
      $(".tab-link li").removeClass("tab-active");
      $(this).parent().addClass("tab-active");
  
      let currentTab = $(this).attr("href");
      $(".tc div").hide();
      $(currentTab).show();
  
      return false;
    });
});

//   Verticle Slider

$('.myslider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  dots: true,
  vertical: true,
  verticalSwiping: true,
  zIndex: 1000
});

// isotope

// external js: isotope.pkgd.js

// init Isotope
var $grid = $('.grid').isotope({
  itemSelector: '.element-item',
  layoutMode: 'fitRows'
});
// filter functions
var filterFns = {
  // show if number is greater than 50
  numberGreaterThan50: function() {
    var number = $(this).find('.number').text();
    return parseInt( number, 10 ) > 50;
  },
  // show if name ends with -ium
  ium: function() {
    var name = $(this).find('.name').text();
    return name.match( /ium$/ );
  }
};
// bind filter button click
$('.filters-button-group').on( 'click', 'button', function() {
  var filterValue = $( this ).attr('data-filter');
  // use filterFn if matches value
  filterValue = filterFns[ filterValue ] || filterValue;
  $grid.isotope({ filter: filterValue });
});
// change is-checked class on buttons
$('.button-group').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'button', function() {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    $( this ).addClass('is-checked');
  });
});

// Counter

$.fn.jQuerySimpleCounter = function( options ) {
  var settings = $.extend({
      start:  0,
      end:    100,
      easing: 'swing',
      duration: 400,
      complete: ''
  }, options );

  var thisElement = $(this);

  $({count: settings.start}).animate({count: settings.end}, {
  duration: settings.duration,
  easing: settings.easing,
  step: function() {
    var mathCount = Math.ceil(this.count);
    thisElement.text(mathCount);
  },
  complete: settings.complete
});
};


$('#number1').jQuerySimpleCounter({end: 3891,duration: 3000});
$('#number2').jQuerySimpleCounter({end: 281,duration: 3000});
$('#number3').jQuerySimpleCounter({end: 618,duration: 2000});
$('#number4').jQuerySimpleCounter({end: 178,duration: 2500});
$('#number5').jQuerySimpleCounter({end: 285,duration: 2500});



/* AUTHOR LINK */
 $('.about-me-img').hover(function(){
        $('.authorWindowWrapper').stop().fadeIn('fast').find('p').addClass('trans');
    }, function(){
        $('.authorWindowWrapper').stop().fadeOut('fast').find('p').removeClass('trans');
    });


// Active

$('.nav-link').on('click', function(){
  $('.nav-link').removeClass('active');
  $(this).addClass('active');
});




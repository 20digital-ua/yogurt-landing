var $serviceSlider = jQuery('.services-slider');
jQuery(document).ready(function () {
  $serviceSlider.slick({
    infinite: false,
    // slidesToShow: 1,
    slidesToScroll: 1,
    dots:true,
    variableWidth: true,
    arrows: false,
    appendDots: jQuery('#services-slider-dots'),
    mobileFirst:true,
    responsive:[
      {
        breakpoint: 767,
        settings: "unslick"
      }
    ]
  });
  jQuery('.latest-events-slider').slick({
    infinite: false,
    // slidesToShow: 1,
    slidesToScroll: 1,
    dots:true,
    variableWidth: true,
    arrows: false,
    appendDots: jQuery('#latest-events-slider-dots'),
    mobileFirst:true,
    responsive:[
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          variableWidth: false,
          dots: false,
          arrows: true,
          // appendArrows: jQuery('#latest-events-slider-dots'),
          slidesToScroll: 1,
          prevArrow: '<div class="slider-arrow slider-arrow-left"></div>',
          nextArrow: '<div class="slider-arrow slider-arrow-right"></div>'
        }
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 4,
          variableWidth: false,
          dots: false,
          arrows: true,
          // appendArrows: jQuery('#latest-events-slider-dots'),
          slidesToScroll: 1,
          prevArrow: '<div class="slider-arrow slider-arrow-left"></div>',
          nextArrow: '<div class="slider-arrow slider-arrow-right"></div>'
        }
      }
    ]
  });
  jQuery('.toppings-slider').slick({
    infinite: false,
    // slidesToShow: 1,
    slidesToScroll: 1,
    dots:false,
    variableWidth: true,
    arrows: true,
    appendArrows: jQuery('#toppings-slider-arrows'),
    nextArrow: '<button class="slick-next slick-arrow next-slide-btn" aria-label="Next" type="button" aria-disabled="false" style="">Choose your favourite</button>',
  });
});
$(window).resize(function() {
  $serviceSlider.slick('resize');
});



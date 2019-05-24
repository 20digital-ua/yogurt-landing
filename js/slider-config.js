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
    appendDots: jQuery('#latest-events-slider-dots')
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



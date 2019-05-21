jQuery(document).ready(function () {

  jQuery('.services-slider').slick({
    infinite: false,
    // slidesToShow: 1,
    slidesToScroll: 1,
    dots:true,
    variableWidth: true,
    arrows: false,
    appendDots: jQuery('#services-slider-dots')
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






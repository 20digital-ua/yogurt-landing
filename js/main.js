jQuery(document).ready(function () {

  var $mainMenuBlock    = jQuery('.main-nav-block').clone();
  var $cloneMenuToBlock = $('.main-nav-block-mob')
  var $burgerBtn = jQuery('.burger-btn');

  $cloneMenuToBlock.append($mainMenuBlock);
  $burgerBtn.on('click',()=>{
    jQuery('body').toggleClass('no-scroll');
    $burgerBtn.toggleClass('active');
    $cloneMenuToBlock.toggleClass('active');
  });

});






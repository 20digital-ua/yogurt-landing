jQuery(document).ready(function () {

  var $burgerBtn = jQuery('.burger-btn');

  $burgerBtn.on('click',()=>{
    $burgerBtn.toggleClass('active');
  });

});






jQuery(document).ready(function () {
  jQuery('.cookie-notification').hide();
  var $mainMenuBlock    = jQuery('.main-nav-block').clone();
  var $cloneMenuToBlock = $('.main-nav-block-mob')
  var $burgerBtn = jQuery('.burger-btn');
  

  $cloneMenuToBlock.append($mainMenuBlock);
  $burgerBtn.on('click',()=>{
    jQuery('body').toggleClass('no-scroll');
    $burgerBtn.toggleClass('active');
    $cloneMenuToBlock.toggleClass('active');
  });
  var $menuLink = jQuery('.menu__link');
  $menuLink.on('click',()=>{
    jQuery('body').removeClass('no-scroll');
    $burgerBtn.toggleClass('active');
    $cloneMenuToBlock.toggleClass('active');
  });


  setTimeout(function(){
    if(getCookie('cookie-notification')!='true'){
      jQuery('.cookie-notification').show('medium');
      jQuery('.cookie-notification').addClass('show');
    }
  },1000);
  jQuery('.cookie-notification__close').on('click',function(){
    jQuery('.cookie-notification').slideUp('slow');
    jQuery('.cookie-notification').removeClass('show');
  });
  
  jQuery('.cookie-notification__agree-btn').on('click',function(){
    setCookie('cookie-notification','true',1);
    jQuery('.cookie-notification').slideUp('slow');
    jQuery('.cookie-notification').removeClass('show');
  });

  jQuery(".menu__link, .sub-scroll").smoothscroll({
    duration:  350,
    hash: false
  });
  

  jQuery(document).on('scroll',(e)=>{
    var $opacityKof = $(window).scrollTop();
    jQuery('.cookie-notification').css({
      'opacity':1-$opacityKof/1000,
      'bottom':-$opacityKof/20
  })
  });

});



function setCookie(name, value, days) {
  var d = new Date;
  d.setTime(d.getTime() + 24*60*60*1000*days);
  document.cookie = name + "=" + value + ";path=/;expires=" + d.toGMTString();
}
function getCookie(name) {
  var v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
  return v ? v[2] : null;
}




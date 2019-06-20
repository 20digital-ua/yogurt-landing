jQuery(document).ready(function () {
  var $subscribe=jQuery('#subscribe-form');
  var $data;
  
  
  
  $subscribe.on('submit',function(e){
    e.preventDefault();
    var $fieldsCheck=true;
    $subscribe.find('.contact-form__input').each(function(){
      if($(this).val()==''){
        $(this).addClass('redBorder');
        $fieldsCheck=false;
      }else{
        $(this).removeClass('redBorder');
      }
    });
    if($fieldsCheck!=false){
      var $data=$subscribe.serialize();
      // console.log($data);
      jQuery('#subscribe-submit').attr('disabled','disabled');
      jQuery.ajax({
        url:'inc/send-mail.php',
        type:'POST',
        data:$data,
        dataType:"json",
        success:function(res){
            // var result = jQuery.parseJSON(res);
            // console.log(res);
            jQuery('.booking__main').addClass('hide');
            jQuery('.result-box-wrapper').addClass('show');
            if(res==true){
              jQuery('.result-box__succsess').addClass('show');
            }else{
              jQuery('.result-box__error').addClass('show');
            }
            jQuery('#subscribe-submit').removeAttr("disabled");
            $subscribe[0].reset();
            
        },
        error: function(xhr, status, error) {
          jQuery('.booking__main').addClass('hide');
          jQuery('.result-box__error').addClass('show');
          jQuery('#subscribe-submit').removeAttr("disabled");
        }
      
      });
    }
  });
  
  jQuery('.result-box-wrapper .close-btn').on('click',()=>{
    jQuery('.result-box-wrapper').removeClass('show');
    jQuery('.booking__main').removeClass('hide');
  });
  
});

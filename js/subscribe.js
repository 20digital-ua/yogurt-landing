jQuery(document).ready(function () {
  var $subscribe=jQuery('#subscribe-form');
  var $data;
  
  
  
  $subscribe.on('submit',function(e){
    e.preventDefault();
    $data=$subscribe.serialize();
    // console.log($data);

    jQuery.ajax({
      url:'inc/send-mail.php',
      type:'POST',
      data:$data,
      dataType:"json",
      success:function(res){
          // var result = jQuery.parseJSON(res);
          console.log(res);
      },
      error: function(xhr, status, error) {
        alert(xhr.responseText + '|\n' + status + '|\n' +error);
      }
    
    });
  });
  
  
});

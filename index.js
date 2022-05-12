

$(document).ready(function(){

    // jQuery methods go here...
 
    $("#button1").click(function(){
   var temp1=$('#amount').val();

  var amount=parseInt(temp1);

   var month=$("#month").val();
   var months=parseInt(month);

   var total=(amount/100)*months+amount;

   $('#money').text(total);
    })
  
  });
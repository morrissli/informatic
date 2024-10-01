$(document).ready(function () {
   $('#btn').on('click', function () {
      $('#par1').show();
      $('#btn').hide();
      $('#btn2').show();
   })

   $('#btn2').on('click', function () {
      $('#par1').hide();
      $('#btn2').hide();
      $('#btn').show();
   })
});
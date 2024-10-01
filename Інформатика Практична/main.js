$(document).ready(function () {
   $('#icn').on('click', function () {
      $('#search').show();
      $('#icn2').show();
      $('#icn').hide();
   })
   $('#icn2').on('click', function () {
      $('#search').hide();
      $('#icn').show();
      $('#icn2').hide();
   });
});
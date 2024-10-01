$(document).ready(function () {
   $('.explore').click(function (e) { 
      e.preventDefault();
      $('#par1').show();
      $('.explore').hide();
      $('.shov1').show();
   });

   $('.shov1').click(function (e) { 
      e.preventDefault();
      $('#par1').hide();
      $('.explore').show();
      $('.shov1').hide();
   });

   $('.learn').click(function (e) { 
      e.preventDefault();
      $('#par2').show();
      $('.learn').hide();
      $('.shov2').show();
   });

   $('.shov2').click(function (e) { 
      e.preventDefault();
      $('#par2').hide();
      $('.learn').show();
      $('.shov2').hide();
   });
});
$(function() {
  $(".code").hide();

  $(".js-code").click(function () {
      $(this).next(".code").slideToggle("fast");
    //  $(this).find("i").toggleClass("fa-arrow-circle-down").toggleClass("fa-arrow-circle-right");
  });
  
});

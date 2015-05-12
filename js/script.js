$(function() {
  $(".code").hide();

  $(".js-code").click(function () {
      $(this).next(".code").slideToggle("fast");
    //  $(this).find("i").toggleClass("fa-arrow-circle-down").toggleClass("fa-arrow-circle-right");
  });

  // sharepoint mobile navigation
  $('.js-menu-btn').delegate('a','click',function(e){
    e.preventDefault();
    // toggle the menu
    $('.js-menu').toggleClass('is-open');
  });
  
});

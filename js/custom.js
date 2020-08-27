$(function(){
    
    $('.venobox').venobox();
    
    
    $(window).on('load', function(){
      $('.preloder').delay(500).fadeOut(500);
  });  
    $('.back-top').click(function(){
        $('html,body').animate({scrollTop: 0},2000);
    });
    
    
    
    
    
});
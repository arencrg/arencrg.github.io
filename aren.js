$(function() {
     $('a').click(function(){
        $('html, body').animate({
            scrollTop: $( $(this).attr('href') ).offset().top
        }, 1000);
        return false;
     });
});

$(window).on('load', function() {
  $(".se-pre-con").fadeOut("slow");;
});

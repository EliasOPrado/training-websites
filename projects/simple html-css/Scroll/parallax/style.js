$(document).ready(function(){
    $(".text1").slideUp(300).delay(800).fadeIn(400);
    $('.text').hide("fast");
        $("p").hide("slow");
    $(window).scroll(function () {
        //$('h2').fadeIn('slow');
        $('.text').show("fast");
        $("p").show("slow");
    });

    $('.text2').fadeOut(500);
    $('text2').fadeIn(1500);
    
});
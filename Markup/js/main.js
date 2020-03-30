$(function(){
    var header = $("#header");
    var introH = $("#intro").innerHeight();
    var scrollOffset = $(window).scrollTop();

    /* Fixed Header */
    checkScroll(scrollOffset);
    $(window).on("scroll", function(){

        scrollOffset = $(this).scrollTop();   
        checkScroll(scrollOffset);
    }); 

    function checkScroll(){
        
        if (scrollOffset >= introH){
            header.addClass("fixed");
        }else{
            header.removeClass("fixed");
        }
    }

    /* Menu toggle */
    var nav = $("#nav");
    var nav_toggle = $("#nav_toggle");
    $("#nav_toggle").on("click", function(event){
        
        console.log("Hello");
        nav.toggleClass("active");
        nav_toggle.toggleClass("active");
        
    });

    /* Logo scroll */
    $("[data-scroll]").on("click", function(event){

        var blockId = $(this).data('scroll');
        var blockOffset = $(blockId).offset().top;
        $("html, body").animate({
            scrollTop: blockOffset

        }, 500);
    });
    /* Slider */
    $('.single-item').slick({
        infinite: true,
        slidesToShow: 1,
        sliderToScroll: 1
    });
    $('.single-item1').slick({
        infinite: true,
        centerMode: true,
        slidesToShow: 5,
        sliderToScroll: 1
       
    });
    

});

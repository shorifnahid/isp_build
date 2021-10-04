$(function(){
    'use stirct';
    //sidebar js
    $('.sidebar_btn').on('click',function(){
        $('.sidebar').toggleClass('sidebar_active')
    })

    //
    $('.serch').on('click',function(){
        $('.serch_item').addClass('active')
    })
    $('.close_icon').on('click',function(){
        $('.serch_item').removeClass('active')
    })
    //banner slick
    $('.slick_slider').slick({
        arrows:false,
        autoplay:true,
        autoplaySpeed:4000,
        dots:true,
        dotsClass:'banner_dots',
        
    })
    //project slick
    $('.project_content').slick({
        slidesToShow:5,
        prevArrow:'<i class="fas fa-chevron-left project_arrow project_left"></i>',
        nextArrow:'<i class="fas fa-chevron-right project_arrow project_right"></i>',
    })
    //jaralex
    $('.jarallax').jarallax({
        speed: 0.8
    });

    //
 
        $('#bar1').barfiller({barColor:'#FFBC13'});
        $('#bar2').barfiller({barColor:'#FFBC13'});
        $('#bar3').barfiller({ barColor: '#FFBC13' });
        $('#bar4').barfiller({ barColor: '#FFBC13'});
        $('#bar5').barfiller({barColor:'#FFBC13'});
        $('#bar6').barfiller({barColor:"#FFBC13"});
        $('#bar7').barfiller({barColor:"#FFBC13"});
    
    //
    $('.testimonial_slick').slick({
        slidesToShow:3,
        arrows:false,
        infinite:false,
    })

    //
    $('.clinent_slick').slick({
        slidesToShow:5,
        arrows:false,
    })

})
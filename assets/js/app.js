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
    //jaralex
    $('.jarallax').jarallax({
        speed: 0.8
    });
})
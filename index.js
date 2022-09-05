$(".banner-section__slider").slick({
    dots: true,
});

$('.tab').on('click', function(e){
    e.preventDefault();

    $($(this).siblings()).removeClass('tab--active');
    $($(this).parent().siblings().find('div')).removeClass('tabs-content--active');

    $(this).addClass('tab--active');
    $($(this).attr('href')).addClass('tabs-content--active');
}); 

    $(".product-slider").slick({
        slidesToShow: 4,
        slidestoScroll: 1       
});
   

     $('.filter-style').styler();

     $('.filter__item-drop, .filter__extra' ).on('click', function(){
         $(this).toggleClass('filter__item-drop--active');
         $(this).next().slideToggle('200');

     })
    
     $(".js-range-slider").ionRangeSlider({
         type: "double",
         min: 100000,
         max: 500000,
     });

     $('.catalog__filter-btngrid').on('click', function(){
        $(this).addClass('catalog__filter-button--active');
        $('.catalog__filter-btnline').removeClass('catalog__filter-button--active');
        $('.product-item__wrapper').removeClass('product-item__wrapper--list');
     });

     $('.catalog__filter-btnline').on('click', function(){
        $(this).addClass('catalog__filter-button--active');
        $('.catalog__filter-btngrid').removeClass('catalog__filter-button--active');
        $('.product-item__wrapper').addClass('product-item__wrapper--list');
     });

     $(".rate-yo").rateYo({
        ratedFill: "#1c62cd",
        spacing: "7px",
        normalFill: "#c4c4c4"
     })

     $('.menu__btn').on('click', function(){
       $('.menu-mobile__list').toggleClass('menu-mobile__list--active') 
      });

      $('.footer__topdrop').on('click', function(){
        $(this).next().slideToggle();
        $(this).toggleClass('footer__topdrop--active');
      });

      $('.aside__btn').on('click', function(){
        $(this).next().slideToggle();
      })



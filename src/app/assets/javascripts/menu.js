$( document ).on('turbolinks:load', function() {

  $(function(){
    $(".main-header__contents-box__right-box__content__header-menu").on("mouseenter",function(){
      $('.main-header__contents-box__right-box__content__header-menu__lists-box').animate({ height: 'show'}, 'fast' );
    });
  });

  $(function(){
    $(".main-header__contents-box__right-box__content__header-menu").on("mouseleave",function(){
      $('.main-header__contents-box__right-box__content__header-menu__lists-box').animate({ height: 'hide'}, 'fast' );
    });
  });


});
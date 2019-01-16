$(document).ready(function (){
    // svg4everybody({});
    //Слайдер на главной странице
    $('.js-index-slider').slick({
        prevArrow: '.index-slider__controls--prev',
        nextArrow: '.index-slider__controls--next',
        dots: true,
        vertical: true,
        customPaging: function() {
          return '<a class="index-slider__dots"></a>';
        },
    });
    //Слайдер рекомендованных товаров
    $('.js-recommended-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        appendDots: '.recommended-slider .product-prev-slider__nav',
        prevArrow: '.recommended-slider .product-prev-slider__controls--prev',
        nextArrow: '.recommended-slider .product-prev-slider__controls--next',
        dots: true,
        customPaging: function() {
            return '<a class="product-prev-slider__dot"></a>';
        },
    });

    // Слайдер не пропустите
    $('.js-donotmiss-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        appendDots: '.donotmiss-slider .product-prev-slider__nav',
        prevArrow: '.donotmiss-slider .product-prev-slider__controls--prev',
        nextArrow: '.donotmiss-slider .product-prev-slider__controls--next',
        dots: true,
        customPaging: function() {
            return '<a class="product-prev-slider__dot"></a>';
        },
    });

    //Слайдер продукта на отдельной странице
    $('.js-product-gallery').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        // arrows:false,
        asNavFor: ".js-product-gallery-nav",
        // appendDots: '.recommended-slider .product-prev-slider__nav',
        prevArrow: '.product-gallery-controls--prev',
        nextArrow: '.product-gallery-controls--next',
        // dots: true,
        // customPaging: function() {
        //     return '<a class="product-prev-slider__dot"></a>';
        // },
    });

    //Слайдер навигации продукта на отдельной странице
    $('.js-product-gallery-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        // dots:true,
        // centerMode:true,
        focusOnSelect:true,
        asNavFor: ".js-product-gallery"

    });

    function indexSliderElemPos(elem,pos) {
      var windowWidth = $(window).width(),
          containerWidth = $('.container').width(),
          leftPos = (windowWidth-containerWidth)/2;
      $('.index-slider '+elem).css(pos,leftPos);
    }

    indexSliderElemPos('.slick-dots','left');
    indexSliderElemPos('.index-slider__controls','right');

    $(window).resize(function() {
        indexSliderElemPos('.slick-dots','left');
        indexSliderElemPos('.index-slider__controls','right');
    });

});

$('.video-start').click(function () {
   var videoID=$(this).parent().parent().data('video-id'),
       videoPlayer=$(this).parent().parent().attr('id');
   player = new YT.Player(videoPlayer, {
       videoId: videoID
   });
})

































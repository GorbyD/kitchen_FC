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
        slidesToShow: 2,
        slidesToScroll: 1,
        // dots:true,
        // centerMode:true,
        focusOnSelect:true,
        asNavFor: ".js-product-gallery"

    });

    $('.js-catalog-view__slider').slick({
        lazyload:'ondemand',
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        customPaging: function(slider, i) {
            var thumb = $(slider.$slides[i]).data('thumb');
            return '<a><img src="'+thumb+'"></a>';
        }
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
});

//Табы на странице продукта
// $('.tabs-list__item').click(function() {
//     var tabName = $(this).attr('show-tab');
//     $(this).addClass('active').siblings().removeClass('active');
//     $('.tabs-content .' + tabName).addClass('active').siblings().removeClass('active');
// });

//Табы For Customer
$(document).on('click','.tabs-list__item', function () {
    var tabName = $(this).attr('show-tab');
    if ($(this).parents().hasClass('tabs-list--for-customer')) {
        window.location.href = '#' + tabName;
    }
    $(this).addClass('active').siblings().removeClass('active');
    $('.tabs-content .'+tabName).addClass('active').siblings().removeClass('active');
});

//Аккордеон вопрос-ответ на табах
$(document).on('click','.faq__title',function() {
    $(this).parent().toggleClass('active');
    var faqContent = $(this).siblings();
    if(faqContent.is(':visible')) {
        faqContent.slideUp();
    } else {
        faqContent.slideDown();
    }
});


function rating(elem) {
    var ratingLine = $('.review-stars--set .review-star');
    ratingLine.removeClass('active');
    elem.addClass('active');

    for (var i = 0, rLen = ratingLine.length; i < rLen; i++) {
        if($(ratingLine[i]).hasClass('active')) {
            break;
        }
        $(ratingLine[i]).addClass('active');
    };
}

$('.review-stars--set .review-star').click(function () {
    var cur = $(this),
        ratingLine = $('.review-stars--set .review-star');
    ratingLine.removeClass('click-active');
    rating(cur);
    cur.addClass('click-active');
});

$('.review-stars--set .review-star')
    .mouseover(function () {
        var cur = $(this);
        rating(cur);
        cur.addClass('active');
    })
    .mouseout(function() {
        var ratingLine = $('.review-stars--set .review-star');
        ratingLine.addClass('active');

        for (var i = 5; i >= 0; i--) {
            if($(ratingLine[i]).hasClass('click-active')) {
                break;
            }
            $(ratingLine[i]).removeClass('active');
        };
    });
































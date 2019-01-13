$(document).ready(function (){
    // svg4everybody({});
    $('.js-index-slider').slick({
        prevArrow: '.index-slider__controls--prev',
        nextArrow: '.index-slider__controls--next',
        dots: true,
        customPaging: function() {
          return '<a class="index-slider__dots"></a>';
        },
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

































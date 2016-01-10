/*
var slider = (function(){
  var counter = 1;
  var init = function(button, sliderUl){
    var sliderLength = sliderUl.children().length;
    var sliderWidth = sliderUl.children().first().width();
    var totalWidth = sliderLength * sliderWidth;
    var loc = sliderWidth;
    var dir = button.data('dir');
    (dir === 'next') ? ++counter : --counter;
    if (counter > sliderLength){
      loc = 0;
      counter = 1;
    } else if (counter < 1) {
      loc = sliderLength * sliderWidth - sliderWidth;
      counter = sliderLength;
      dir = "next";
    }

    transition(dir, loc, sliderUl);
  }
  var transition = function(direction, loc, sliderUl){
    if ( loc !== 0 ){
      var unit = (direction === "next") ? "-=": "+=";
    }
    sliderUl.animate({
      'margin-left': unit ? (unit + loc) : loc
    },600 ,function(){});
  }
  return {
    init: init
  }

})();
(function(){
  $('.slide-controls').on('click','button', function(e){
    e.preventDefault();
    slider.init($(this),  $('.slider ul'));
  });
;
})();

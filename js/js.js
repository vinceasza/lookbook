var overlay = $('<div class="overlay"></div>');
var image = $('<img src="">');
var imgAnchor = $('<a href="" class="nextImg"></a>');

$('.overlay-close').on('click', function(e){
  e.preventDefault();
  $('.overlay').detach();
  $('.overlay-controls').hide();
});

$('.next, .previous, .grid a').on('click', function(e){
  e.preventDefault();
  var href = $(this).attr('href');
  ajaxRequest(href);
});
$('body').on('click','.nextImg', function(e){
  e.preventDefault();
  var href = $(this).attr('href');
  ajaxRequest(href);
});

function buildPage(nextImgHref,previousImgHref, imgSrc){
  imgAnchor.attr('href', nextImgHref);
  image.attr('src', imgSrc);
  imgAnchor.empty().append(image);
  $('.next').attr('href', nextImgHref);
  $('.previous').attr('href', previousImgHref);
  overlay.empty().append(imgAnchor);
  $('.overlay-wrapper').append($(overlay)).css('display', 'block');
  $('.overlay-controls').fadeIn();
}


function ajaxRequest(href){
  var nextImgHref, previousImgHref;
  $.getJSON('lookbook.json', function(response){
    for (var i = 0; i < response.length; i++){
      var imgNum = response.length;

      if (response[i].id == href){
        if (i === imgNum - 1){
          nextImgHref = response[0].id;
        } else {
          nextImgHref = response[i + 1].id;
        }
        if (i == 0){
          previousImgHref = response[imgNum - 1].id;
        } else {
          previousImgHref = response[i - 1].id;
        }

        var imgSrc = response[i].img;
        buildPage(nextImgHref,previousImgHref, imgSrc);
      }

    }
  });
}

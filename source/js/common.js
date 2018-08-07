// var feed = new Instafeed({
//   clientId: '48794fdf6765462f9c52873047dcc65e',
//   get: 'user',
//   userId: '1650300680',
//   accessToken:'1650300680.48794fd.7a66760f12e54defb448bfd21467af18',
//   links: true,
//   limit: 8, // 取得件数
//   resolution:'low_resolution', // thumbnail (default) - 150x150 | low_resolution - 306x306 | standard_resolution - 612x612
//   template: '<span><a href="{{link}}"><img src={{image}} alt={{caption}}></a></span>' // 画像URL：{{image}} リンク：{{link}} キャプションテキスト{{caption}} いいね数：{{likes}} コメント数：{{comments}}
// });
// feed.run();


// How to get an access token:
// http://jelled.com/instagram/access-token

// {{model.user.username}}, {{likes}} likes
//

/* ============================================================
* expand anchor with div
* ============================================================ */

$(function(){
  $.fn.anchorExpanded = function() {
    return this.each(function() {
      var $anchorExpanded = $(this);
      $anchorExpanded.css('cursor','pointer');
      $anchorExpanded.on('click', function(){
        var targetAttribute = $(this).find('a').attr('target');
        if(targetAttribute === '_blank'){
          window.open($(this).find('a').attr('href'));
          return false;
        } else{
          window.location = $(this).find('a').attr('href');
          return false;
        }
    });//end anchorExpanded
    });
  };
  $('.js-anchor-expanded').anchorExpanded();
})


/* ============================================================
* instagram customize
* ============================================================ */

var galleryFeed = new Instafeed({
  get: "user",
  userId: 1650300680,
  accessToken: "1650300680.1677ed0.845e883e4222430cbd96cb3e8803e05e",
  resolution: "standard_resolution",
  useHttp: "true",
  limit: 15,
  template:
    // '<a href="{{image}}">'+
      '<span><a target="_blank" href="{{link}}"><img src={{image}} alt={{caption}}></a></span>',
    // '</a>'+
  target: "instafeed-gallery-feed",
  after: function() {
    // disable button if no more results to load
    if (!this.hasNext()) {
      btnInstafeedLoad.setAttribute('disabled', 'disabled');
    }

    var owl = $(".owl-carousel"),
        owlSlideSpeed = 10;

    // init owl
    $(document).ready(function(){
      owl.owlCarousel({
        // navContainer: '.owl-nav-custom',
        // dotsContainer: '.owl-dots-custom',
        ltr:true,
        loop:true,
        autoplay: true,
        esponsiveRefreshRate : 10,
        margin:0,
        nav:false,
        dots: false,
        responsive:{
          0:{
            items:1
          },
          200:{
            items:2
          },
          400:{
            items:3
          },
          768:{
            items:5
          }
        }
      });
    });

    // keyboard controls
    $(document.documentElement).keydown(function(event) {
      if (event.keyCode == 37) {
        owl.trigger('prev.owl.carousel', [owlSlideSpeed]);
      }
      else if (event.keyCode == 39) {
        owl.trigger('next.owl.carousel', [owlSlideSpeed]);
      }
    });
  }
});

galleryFeed.run();

var btnInstafeedLoad = document.getElementById("btn-instafeed-load");
btnInstafeedLoad.addEventListener("click", function() {
  galleryFeed.next()
});






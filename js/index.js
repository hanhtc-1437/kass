$('.page-1 .mypattern').slick({
  autoplay: true,
  autoplaySpeed: 2500,
  speed: 800,
  arrows: false,
  centerMode: true,
  centerPadding: '20%'
});
$('.page-2 .mypattern').slick({
  autoplay: true,
  autoplaySpeed: 2500,
  speed: 800,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 4,
  arrows: false,
  centerMode: true,
   centerPadding: '0%'
});


var feed = new Instafeed({
    clientId: '48794fdf6765462f9c52873047dcc65e',
    get: 'user', 
    userId: '1650300680',
    accessToken:'1650300680.48794fd.7a66760f12e54defb448bfd21467af18',
    links: true,
    limit: 8, // 取得件数 
    resolution:'low_resolution', // thumbnail (default) - 150x150 | low_resolution - 306x306 | standard_resolution - 612x612
    template: '<span><a href="{{link}}"><img src={{image}} alt={{caption}}></a></span>' // 画像URL：{{image}} リンク：{{link}} キャプションテキスト{{caption}} いいね数：{{likes}} コメント数：{{comments}}
});
feed.run();
$(document).ready(function () {
  var links = [
 
    {
      name: 'ogu',
      link: 'https://ogu.gg/etuv',
    },
    
    {
      name: 'telegram',
      link: 'https://t.me/weenier',
    },
    
    {
      name: 'tiktok',
      link: 'https://tiktok.com/@uula',
    },

    {
      name: 'twitter',
      link: 'https://twitter.com/420mq420',
    },

    {
      name: 'email',
      link: 'https://mailto:nave@live.jp',
    },



  ];

  for (var i in links) {
    var link = links[i];

    $('#marquee').append('<a href="' + link.link + '" target="_BLANK">' + link.name + '</a>');

    link = $('#marquee').children('a').last();

    if (i != links.length - 1) $('#marquee').append(' | ');
  }
});

$(function () {
  var $diaplay = $('#display');
  $('.marquee')
    .bind('beforeStarting', function () {
      $diaplay.show().html('started').delay(2000).fadeOut('fast');
    })
    .marquee({
      duration: 4000,
    });
});

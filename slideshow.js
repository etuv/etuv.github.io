$(document).ready(function () {
  var links = [
    {
      name: 'discord',
      link: 'https://discord.com/users/746411175494811688',
    },

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
      name: 'xbox',
      link: 'https://xboxgamertag.com/search/sdn3',
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

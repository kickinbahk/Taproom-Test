import $ from 'jquery';

window.jQuery = $;
window.$ = $;

$('#announcement-bar-close').bind('click touchstart', function() {
  $('#announcement-bar').addClass('closed');
});

$('.mega-menu-parent').on('hover', function(e) {
  if(e.type == 'mouseenter') {
    $('.mega-menu').removeClass('closed');
  }

  if (e.type == 'mouseleave') {
    $('.mega-menu').addClass('closed');
  }
});

$('.mobile-nav-open').bind('click touchstart', function() {
  console.log('{% include "icon-close" %}')
  $('{% include "icon-close" %}').prependTo('.mobile-nav-open');
});
import $ from 'jquery';

window.jQuery = $;
window.$ = $;

$('#announcement-bar-close').bind('click touchstart', function(event) {
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
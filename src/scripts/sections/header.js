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
  var isOpen = $('.mobile-nav-open .icon-close').hasClass('open');

  if(!isOpen) {
    $('.mobile-nav-open .icon-close').addClass('open');
    $('.mobile-nav-open .icon-hamburger').addClass('closed');
  }

  if(isOpen) {
    $('.mobile-nav-open .icon-close').removeClass('open');
    $('.mobile-nav-open .icon-hamburger').removeClass('closed');
  }
});
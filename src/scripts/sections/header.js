import $ from 'jquery';

window.jQuery = $;
window.$ = $;

$('#announcement-bar-close').bind('click touchstart', function() {
  $('#announcement-bar').addClass('closed');
});

$('.menu-item.mega-menu-parent').hover(function() {
  $('.mega-menu').removeClass('closed');

}, function() {
  $('.mega-menu').addClass('closed');
});

$('.mobile-nav-open').bind('click touchstart', function() {
  var isOpen = $('.mobile-nav-open .icon-close').hasClass('open');

  if(!isOpen) {
    $('.mobile-nav-open .icon-close').addClass('open');
    $('.mobile-nav-open .icon-hamburger').addClass('closed');

    $('.mobile-menu').removeClass('closed');
  }

  if(isOpen) {
    $('.mobile-nav-open .icon-close').removeClass('open');
    $('.mobile-nav-open .icon-hamburger').removeClass('closed');

    $('.mobile-menu').addClass('closed');
  }
});
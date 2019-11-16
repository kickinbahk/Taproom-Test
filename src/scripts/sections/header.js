import $ from 'jquery';

window.jQuery = $;
window.$ = $;

$('#announcement-bar-close').bind('click touchstart', function() {
  $('#announcement-bar').addClass('closed');
});

$('.menu-item.mega-menu-parent').hover(function() {

  console.log('enter')
  $('.mega-menu').removeClass('closed');

}, function() {
  console.log('exit')
  $('.mega-menu').addClass('closed');
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
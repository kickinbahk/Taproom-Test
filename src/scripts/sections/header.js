import $ from 'jquery';

window.jQuery = $;
window.$ = $;

$('#announcement-bar-close').bind('click touchstart', function(event) {
  $('#announcement-bar').addClass('closed');
});
import $ from 'jquery';

window.jQuery = $;
window.$ = $;

$('.featured-collection-item').hover(function() {
  $(this).find('.featured-collection__image .quick-view').addClass('show');
}, function() {
  $(this).find('.featured-collection__image .quick-view').removeClass('show');
});

$('.quick-view-button').on('click touchstart', function(e) {
  e.preventDefault();

  console.log('button clicked');
  $('.modal-overlay').removeClass('closed');
});
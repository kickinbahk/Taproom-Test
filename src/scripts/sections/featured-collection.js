import $ from 'jquery';

window.jQuery = $;
window.$ = $;

$('.featured-collection-item').hover(function() {
  $(this).find('.featured-collection__image .quick-view').addClass('show');
}, function() {
  $(this).find('.featured-collection__image .quick-view').removeClass('show');
})
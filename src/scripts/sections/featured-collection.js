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

  var productTitle = $(this).closest('.featured-collection-item').attr('data-productHandle')
  var productTitleURLSafe = productTitle.replace(/ /g, '-');
  var url = '/products/' + productTitleURLSafe +'.js';

  console.log(url)

  $.getJSON(url, function(product) {
    alert('The title of this product is ' + product.title);
  } );

  $('.modal-overlay').removeClass('closed');
});
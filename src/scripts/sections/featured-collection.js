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

  var productTitle = $(this).closest('.featured-collection-item').attr('data-productHandle')
  var productTitleURLSafe = productTitle.replace(/ /g, '-');
  var url = '/products/' + productTitleURLSafe +'.js';

  $.getJSON(url, function(product) {
    var productId = Object.values(product.variants[0])[0]

    $('.quick-look-image img').attr('src', product.featured_image);
    $('.quick-look-product-info .vendor').text(product.vendor);
    $('.quick-look-product-info .sku').text(productId);
    $('.quick-look-product-info .product-title').text(product.title);   
    $('.quick-look-product-info .price').text('$' + (product.price / 100));    
    $('.quick-look-product-info .description').text(product.description); 

    $('.quick-look-modal').removeClass('closed');
    $('.modal-overlay').removeClass('closed');
  });
});

$('.quantity-icon.minus').on('click touchstart', function() {
  var quantity = Number($('.product-quantity-box .quantity').val());
  quantity -= 1
  
  if(quantity > 0) {
    $('.product-quantity-box .quantity').val(quantity);
  }

});

$('.quantity-icon.plus').on('click touchstart', function() {
  var quantity = Number($('.product-quantity-box .quantity').val());
  quantity += 1

  $('.product-quantity-box .quantity').val(quantity);
});

$('.modal-overlay').on('click touchstart', function() {
  $('.quick-look-modal').addClass('closed');
  $('.modal-overlay').addClass('closed');
});


$('.add-to-cart').on('click touchstart', function() {
  var quantity = $('.product-quantity-box .quantity').val();
  var id = $('.quick-look-product-info .sku').text();

  $.ajax({
    type: 'POST',
    url: '/cart/add.js',
    data: "quantity=" + Number(quantity) + "&id=" + Number(id),
    dataType: 'json',
    success: function() { 
      console.log("item added to cart") 
      $('.add-to-cart').text('Item added to Cart');

      setTimeout(function() {
        $('.add-to-cart').text('Add To Cart');
      }, 3000);
    },
    error: function (error) { 
      console.log(error);
    }
  }); 
}); 


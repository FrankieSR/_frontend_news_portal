define(function() {
    return function templateProductCart() {
        return `
                <div class="cart">
                  <img class="cart-image" alt="Card" src = "https://cdn4.iconfinder.com/data/icons/shopping-symbol-2/500/archive_box_file_open_open_box_pack_product_products-128.png">
                  <div class="cart-body">
                    <h5 class="cart-title"  data-bind="text: $parent.name"></h5>
                    <span  data-bind="text: $parent.price"></span>
                    <p class="cart-text"  data-bind="text: $parent.description"></p>
                  </div>
                </div>`


        }
});

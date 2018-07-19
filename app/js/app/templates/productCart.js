define(function() {
    return function templateProductCart() {
        let linkToImage = "'https://www.expertrec.com/wp-content/uploads/2017/11/magento-logo.png'";
        let linkToIcon = "https://www.freeiconspng.com/uploads/shopping-cart-icon-19.png";
        return `<div class="cart">
                    <img class="card-img-top cart__image" data-bind="attr: { src: ${linkToImage}  }"  alt="image">
                     <div class="cart__body">
                         <h5 class="cart__title" data-bind="text: $parent.name"></h5>
                          <span class="cart__price" data-bind="text: '$ ' + $parent.price"></span>
                          <p class="cart__text" data-bind="text: $parent.description"></p>
                          <img class ="cart__icon" src = ${linkToIcon} data-bind = "click: ()=>{$root.addToCart($parent)}"></img>
                    </div>
               </div>`
    };
});
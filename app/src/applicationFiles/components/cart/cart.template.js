define(() => {
    return `<div class="cart" data-bind="foreach: items">
                <div class='cart__body'>
                    <img class = "cart__image" src = "http://profisite.com.ua/images/site/content/cms/magento.png" alt="logo"/>
                    <h4 class = 'cart__name'><strong>Product:<br /> <span data-bind="text: name"></strong></h4>
                    <p class = 'cart__price'>price: <strong>$<span data-bind="text: price"></span></strong>
                    </p>
                    <p class = 'cart__description'><span data-bind="text: description"></span></p>
                </div>
            </div>`
});

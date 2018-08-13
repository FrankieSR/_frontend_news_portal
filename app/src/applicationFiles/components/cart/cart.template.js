define(() => {
    return `<div class="cart" data-bind="foreach: items">
                <div class='cart__body'>
                    <span data-bind="ifnot: image">
                      <img class = "cart__image" src = "https://www.propeller.co.uk/wp-content/uploads/2017/04/magentologogrey.png" alt="logo"/>
                    </span>
                    <span data-bind="if: image">
                      <img class = "cart__image" data-bind = "attr: {src: image().url}, click: ()=>{console.log(image())}" alt="logo"/>
                    </span>
                    <h4 class = 'cart__name'><strong>Product:<br /> <span data-bind="text: name"></strong></h4>
                    <p class = 'cart__price'>price: <strong>$<span data-bind="text: price"></span></strong>
                    </p>
                    <p class = 'cart__description'><span data-bind="text: description"></span></p>
                    <button class = 'cart__buy' data-bind = "click: () => {$parent.addToCart($index())}">
                        <img src = "http://wfarm2.dataknet.com/static/resources/icons/set20/f02a62984db4.png"/>
                    </button>
                </div>
            </div>`
});

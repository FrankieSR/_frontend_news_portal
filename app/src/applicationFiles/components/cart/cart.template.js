define(() => {
    return `<div class="card" data-bind="foreach: items">
                <div class='sales-cart__body text-left'>
                    <strong>Product: <span data-bind="text: name"></strong></p>
                    <p>price: <span data-bind="text: price"></span></p>
                    <p>description: <span data-bind="text: description"></span></p>
                </div>
            </div>`
});
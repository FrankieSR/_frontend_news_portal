define(function() {
    return function templateCartTemplate() {
        return `<div class='sales-cart__body text-left'>
                    <strong>Product: <span data-bind="text: $parent[1]"></strong></p>
                    <p>price: <span data-bind="text: $parent[0]"></span></p>
                    <p>description: <span data-bind="text: $parent[2]"></span></p>
                </div>`;
    };
});

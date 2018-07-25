
define([
    "knockout",
    path + "cart/cart.viewmodel",
    path + "cart/cart.template"
], (ko, viewModel, template) => {
    console.log(viewModel);
    ko.components.register("cart", {viewModel, template});
});

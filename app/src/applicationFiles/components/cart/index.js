define([
    "knockout",
    path + "cart/cart.viewmodel",
    path + "cart/cart.template"

], (ko, viewModel, template) => {

    ko.components.register("cart", {
        viewModel,
        template
    });
});

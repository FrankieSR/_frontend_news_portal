define([
    "knockout",
    path + "products/products.viewmodel",
    path + "products/products.template",
    path + "cart/index",
    path + "cart/cart.viewmodel",
    path + "cart/cart.template",
    path + "pagination/index",
    path + "pagination/pagination.viewmodel",
    path + "pagination/pagination.template"
], (ko, viewModel, template) => {

    ko.components.register("products", {
        template,
        viewModel
    });

});
define([
    "knockout",
    path + "app/app.viewmodel",
    path + "app/app.template",
    path + "cart/cart.viewmodel",
    path + "cart/index",
    path + "cart/cart.template"
], (ko, viewModel, template) => {

    ko.components.register("app", { template, viewModel });

});

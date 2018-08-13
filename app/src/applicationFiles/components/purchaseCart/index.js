define([
    "knockout",
    path + "purchaseCart/purchaseCart.viewmodel",
    path + "purchaseCart/purchaseCart.template"
], (ko, viewModel, template) => {

    ko.components.register("purchased-template", {
        template,
        viewModel
    });

});

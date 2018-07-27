define([
    "knockout",
    path + "content/content.viewmodel",
    path + "content/content.template",
    path + "toolbar/index",
    path + "toolbar/toolbar.viewmodel",
    path + "toolbar/toolbar.template",
    path + "products/index",
    path + "products/products.viewmodel",
    path + "products/products.template"
], (ko, viewModel, template) => {

    ko.components.register("content-template", {
        template,
        viewModel
    });

});

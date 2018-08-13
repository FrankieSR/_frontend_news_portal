define([
    "knockout",
    path + "app/app.viewmodel",
    path + "app/app.template",
    path + "header/index",
    path + "header/header.viewmodel",
    path + "header/header.template",
    path + "logo/index",
    path + "logo/logo.viewmodel",
    path + "logo/logo.template",
    path + "purchaseCart/index",
    path + "purchaseCart/purchaseCart.viewmodel",
    path + "purchaseCart/purchaseCart.template",
    path + "main/index",
    path + "main/main.viewmodel",
    path + "main/main.template",
    path + "content/index",
    path + "content/content.viewmodel",
    path + "content/content.template",
    path + "footer/index",
    path + "footer/footer.viewmodel",
    path + "footer/footer.template",

], (ko, viewModel, template) => {

    ko.components.register("app", {
        template,
        viewModel
    });

});

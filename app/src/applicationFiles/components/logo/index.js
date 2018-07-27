define([
    "knockout",
    path + "logo/logo.viewmodel",
    path + "logo/logo.template"
], (ko, viewModel, template) => {

    ko.components.register("logo-template", {
        template,
        viewModel
    });

});
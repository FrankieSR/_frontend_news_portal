define([
    "knockout",
    path + "main/main.viewmodel",
    path + "main/main.template",
    path + "content/index",
    path + "content/content.template",
    path + "content/content.template",
    path + "sidebar/index",
    path + "sidebar/sidebar.template",
    path + "sidebar/sidebar.template"
], (ko, viewModel, template) => {

    ko.components.register("main-template", {
        template,
        viewModel
    });

});

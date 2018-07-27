define([
    "knockout",
    path + "sidebar/sidebar.viewmodel",
    path + "sidebar/sidebar.template"
], (ko, viewModel, template) => {

    ko.components.register("sidebar-template", {
        viewModel,
        template
    });
});

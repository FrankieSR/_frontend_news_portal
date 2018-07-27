define([
    "knockout",
    path + "toolbar/toolbar.viewmodel",
    path + "toolbar/toolbar.template"
], (ko, viewModel, template) => {

    ko.components.register("toolbar-template", {
        template,
        viewModel
    });

});

define([
    "knockout",
    path + "pagination/pagination.viewmodel",
    path + "pagination/pagination.template"
], (ko, viewModel, template) => {

    ko.components.register("pagination-template", {
        template,
        viewModel
    });

});
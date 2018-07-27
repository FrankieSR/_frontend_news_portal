define([
    "knockout",
    path + "footer/footer.viewmodel",
    path + "footer/footer.template"
], (ko, viewModel, template) => {

    ko.components.register("footer-template", {
        template,
        viewModel
    });

});
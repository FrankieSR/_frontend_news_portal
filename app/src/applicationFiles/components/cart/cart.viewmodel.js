
define([
    'lib/knockout-store/connect'
],( connect ) => {

    function projectListViewModel(params) {
        const vm = {};
        vm.items = params.items;
        return vm;
    }

    function mapStateToParams( items ) {
        return items;
    }

        return connect(mapStateToParams)(projectListViewModel);
});

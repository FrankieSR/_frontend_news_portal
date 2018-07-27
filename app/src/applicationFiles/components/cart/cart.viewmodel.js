define(["knockout", "lib/knockout-store/connect"], (ko, connect) => {
    function productListViewModel(params) {
        //  ---- initialize the variables for viewmodel from store(state) --
        //
        const vm = {};
        // ------- change items quantity on page ----
        //
        try {
            vm.items = ko.computed(() => {
                let size = params.pageSize();
                let start = params.pageIndex() * size;
                return params.items().slice(start, start + size);
            });

        } catch (err) {
            console.log("Alarm! :( error in cart.viewModel", err);
        }
        return vm;
    }

    function joinParamsToState(vmObject) {
        return vmObject;
    }

    // join that viewModel to common store
    //
    return connect(joinParamsToState)(productListViewModel);
});

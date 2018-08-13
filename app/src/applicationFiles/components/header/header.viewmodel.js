define(["knockout", "lib/knockout-store/connect"], (ko, connect) => {
    function headerLogic(params) {
        const vm = {};
        vm.cartLenth = params.itemsInPurchaseCart().length;
        console.log(params.itemsInPurchaseCart().length);

        vm.visibilityItemInCart = () => {
            params.visibilityCart(!params.visibilityCart());
        }

        return vm;
    }

    function joinParamsToState(vmObject) {
        return vmObject;
    }

    // join that viewModel to a common store
    //
    return connect(joinParamsToState)(headerLogic);
});

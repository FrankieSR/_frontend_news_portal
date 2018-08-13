define(["knockout", "lib/knockout-store/connect"], (ko, connect) => {
    function productListViewModel(params) {
        //  ---- initialize the variables for viewmodel from store(state) --
        //
        const vm = {};

        vm.localState = {
            arr: [],
            parsStorage: JSON.parse(localStorage.getItem("item")),
            setLocalStorage: () => {
                localStorage.setItem(
                    "item",
                    JSON.stringify(params.itemsInPurchaseCart())
                );
            }
        };

        // ------- change items quantity on page ----
        //

        try {
            vm.items = ko.computed(() => {
                let size = params.pageSize();
                let start = params.pageIndex() * size;
                return params.allProducts().slice(start, start + size);
            });
        } catch (err) {
            console.log("Alarm! :( error in cart.viewModel", err);
        }

        vm.setCartInfo = index => {
            vm.localState.arr.push({
                name: vm.items()[index].name(),
                price: vm.items()[index].price()
            });
            params.itemsInPurchaseCart(vm.localState.arr);
            console.log(vm.localState.arr);
        };


        vm.addToCart = (index) => {
            this.index = index;
            // if (localStorage.length != 0) {
            //     for (let i = 0; i < vm.localState.parsStorage.length; i++) {
            //         vm.localState.arr.push(vm.localState.parsStorage[i]);
            //     }
            // }
            vm.setCartInfo(this.index);
            vm.localState.setLocalStorage();
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

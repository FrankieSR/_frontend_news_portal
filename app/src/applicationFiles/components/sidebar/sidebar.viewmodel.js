define(["knockout", "lib/knockout-store/connect"], (ko, connect) => {
    function productListViewModel(params) {
        //  ---- initialize the variables for viewmodel from store(state) --
        //
        const vm = {};
        vm.items = params.items;
        vm.inputValueMin = ko.observable(50);
        vm.inputValueMax = ko.observable(50);


        //I want to iterate the above array elements in some click event !
        vm.clickedSomeWhere = (data, event) =>{
            vm.myArray = params.items;
            let arr = [];
            ko.utils.arrayForEach(vm.items(), (item)=>  {
                if (item.price() >= vm.inputValueMin()) {
                    arr.push(item);
                }
                vm.myArray(arr);
            });

            console.log(vm.myArray());
        }

         params.myArray = vm.myArray;

        return vm;
    }

    function joinParamsToState(vmObject) {

        return vmObject;
    }

    // join that viewModel to common store
    //
    return connect(joinParamsToState)(productListViewModel);
});

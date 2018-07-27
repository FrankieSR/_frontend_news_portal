//--------  global path to files ----------------------------
let path = "applicationFiles/components/";
//-----------------------------------------------------------

define([
    "knockout",
    "lib/knockout-store/index",
    "applicationFiles/data/getData",
    "lib/knockout-store/store",
    "lib/knockout-store/connect",
    path + "app/index",
    path + "app/app.viewmodel"
], (ko, {
    setState
}, getData) => {

    ko.deferUpdates = true;
    let dataURL = "http://5b165eaba1c7e300147c8724.mockapi.io/products";

    //  -- this is my application state  ----
    //  -- used variables ------
    const state = {
        items: ko.observableArray([]),
        myArray: ko.observableArray([]),
        pageSize: ko.observable(8), // change quantity products on page in begin
        pageIndex: ko.observable(0),
        itemsLength: ko.observable()
    };

    setState(state);

    // ---- get json data ----------------
    try {
        getData(dataURL, data => {
            // --- create a new array with my state data ---
            const observableProducts = data.map(
                ({
                    name,
                    price,
                    description
                }) => {
                    return {
                        name: ko.observable(name),
                        price: ko.observable(price),
                        description: ko.observable(description)
                    };
                }
            );

            state.itemsLength(observableProducts.length);
            state.items(observableProducts);
        });
    } catch (err) {
        console.log(" WARNING! We are have a problem! Please fix this ->", err);
    };

    ko.applyBindings();
});

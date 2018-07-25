let path = "applicationFiles/components/";
define([
    "knockout",
    "lib/knockout-store/index",
    "applicationFiles/data/getData",
    "lib/knockout-store/store",
    "lib/knockout-store/connect",
    path + "app/index",
    path + "app/app.viewmodel",
], (ko, { setState }, getData) => {

    ko.deferUpdates = true;
    let dataURL = "http://5b165eaba1c7e300147c8724.mockapi.io/products";

console.log(setState);

        const state = {
            items: ko.observableArray([])
        };

        setState(state);

        getData(dataURL, data => {
            const observableProducts = data.map(({ name, price, description }) => {
                return {
                    name: ko.observable(name),
                    price: ko.observable(price),
                    description: ko.observable(description)
                };
            });
            state.items(observableProducts);
        });

      ko.applyBindings();

    });

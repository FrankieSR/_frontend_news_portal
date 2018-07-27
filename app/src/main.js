requirejs.config({
    baseUrl: "src",
    paths: {
        knockout: "lib/knockout",
        knockoutstoreIndex: "lib/knockout-store/index",
        knockoutstoreConnect: "lib/knockout-store/connect",
        knockoutstoreStore: "lib/knockout-store/store",
        underscore: "lib/underscore",
        app: "app"
    }
});

requirejs([
    "applicationFiles/mainModule"
]);
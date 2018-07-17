requirejs.config({
    baseUrl: "",
    paths: {
        jquery: "js/lib/jquery",
        knockout: "js/lib/knockout",
        underscore: "js/lib/underscore",
        app: "js/app"
    }
});


requirejs(["app/main"]);

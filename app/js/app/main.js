require([
    "app/model/model",
    "app/view/view",
    "app/templates/productCart",
    "app/templates/templatePangination",
    "knockout",
    "jquery",
    "underscore"
], (model, view, cart, pg, ko, $, _) => {
    let dataURL = "http://5b165eaba1c7e300147c8724.mockapi.io/products";

    class Controller {
        constructor(items) {
            this.products = ko.observableArray(items);
            this.pageSize = ko.observable(5);
            this.pageIndex = ko.observable(0);
            this.popupVisib = ko.observable(false);
            this.rangeValue = ko.observable(50);
            // --------------------
            this.listItemsOnPage = ko.computed(() => {
                let size = this.pageSize();
                let start = this.pageIndex() * size;
                return this.products.slice(start, start + size);
            });

            this.maxPageIndex = ko.computed(() => {
                return Math.ceil(this.products().length / this.pageSize() - 1);
            });

            this.allPages = ko.computed(() => {
                var pages = [];
                for (let i = 0; i <= this.maxPageIndex(); i++) {
                    pages.push({
                        pageNumber: i + 1
                    });
                }
                return pages;
            });

            // --------------register components ---------------------------
            ko.components.register("product-cart", {
                template: cart()
            });
            ko.components.register("btn", {
                template: pg()
            });
        }

        // -------------- private methods -------------------------------
        prevPage() {
            if (this.pageIndex() > 0) {
                this.pageIndex(this.pageIndex() - 1);
            }
        }

        nextPage() {
            console.log(this.products());
            if (this.pageIndex() < this.maxPageIndex()) {
                this.pageIndex(this.pageIndex() + 1);
            }
        }

        pangination(i) {
            this.pageIndex(i);
        }

        sortedName() {
            this.products.sort((a, b) => {
                return a.price == b.price ? 0 : a.price > b.price ? -1 : 1;
            });
        }

        changePageSize(qty) {
            this.pageIndex(0);
            return this.pageSize(qty);
        }

        openPopup() {
            this.popupVisib(!this.popupVisib());
        }
    }

    model(dataURL, data => {
        ko.applyBindings(new Controller(data));
    });
});

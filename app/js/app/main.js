require([
    "app/model/model",
    "app/view/view",
    "app/templates/productCart",
    "app/templates/itemCard",
    "app/templates/pangination",
    "knockout",
    "jquery",
    "underscore"
], (model, view, card, productCart, pangination, ko, $, _) => {
    let dataURL = "http://5b165eaba1c7e300147c8724.mockapi.io/products";

    class ProductsItems {
        constructor(items) {
            this.products = ko.observableArray(items);
        }
    }

    class SortedItems extends ProductsItems {
        constructor(products) {
            super(products);
        }

        // -------------sorted price -------------------------------------------
        sortedPriceHigh() {
            this.products.sort((a, b) => {
                return a.price == b.price ? 0 : a.price > b.price ? -1 : 1;
            });
        }

        sortedPriceLow() {
            this.products.sort((a, b) => {
                return a.price == b.price ? 0 : a.price < b.price ? -1 : 1;
            });
        }
    }

    class QantityProductsOnPage extends SortedItems {
        constructor(products) {
            super(products);
            this.pageIndex = ko.observable(0);
            this.pageSize = ko.observable(5);

            this.listItemsOnPage = ko.computed(() => {
                let size = this.pageSize();
                let start = this.pageIndex() * size;
                return this.products.slice(start, start + size);
            });

            ko.components.register("product-cart", { template: card() });
        }

        changePageSize(qty) {
            this.pageIndex(0);
            return this.pageSize(qty);
        }
    }

    class Pangination extends QantityProductsOnPage {
        constructor() {
            super(...arguments);
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

            this.prevPage = () => {
                if (this.pageIndex() > 0) {
                    return this.pageIndex(this.pageIndex() - 1);
                }
            };

            this.nextPage = () => {
                if (this.pageIndex() < this.maxPageIndex()) {
                    this.pageIndex(this.pageIndex() + 1);
                }
            };

            ko.components.register("pangination", { template: pangination() });
        }

        pangination(i) {
            return this.pageIndex(i);
        }
    }


    class RegisteredComponents extends Pangination {
        constructor(pageIndex, maxPageIndex) {
            super(pageIndex, maxPageIndex);
            this.popupVisib = ko.observable(false);
            this.cart = ko.observableArray();
            this.itemsInCart = ko.observable(localStorage.length);

            // --------------register components -------------------------------
            ko.components.register("mycart", { template: productCart() });

        }

        openPopup() {
            this.popupVisib(!this.popupVisib());
        }

        addToCart(item) {
            console.log(item);
            localStorage.setItem(["inCart"] + localStorage.length, [
                item.price,
                item.name,
                item.description
            ]);
            this.itemsInCart(localStorage.length);
        }

        visionCart() {
            let cartItems = [];
            for (var i = 0; i < localStorage.length; i++) {
                cartItems.push(localStorage.getItem(["inCart"] + i).split(","));
                this.cart(cartItems);
            }
            console.log(this.cart());
        }
    }


    //
    // removeItemInCart(i) {
    //     localStorage.removeItem(["inCart"] + i)
    // }

    model(dataURL, data => {
        ko.applyBindings(new RegisteredComponents(data));
    });
});

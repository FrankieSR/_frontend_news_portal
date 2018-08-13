define(() => {
    return `<div class = "toolbar">
                <div class = "toolbar__items-wrapper">
                    <div class = "toolbar__item toolbar__item--active" data-bind = "click: visibilityButtonBlockItems">
                        <p>number of products</p>
                        <div class = "toolbar__wrapper-buttons">
                            <div class = "toolbar__buttons" data-bind = "visible: visibleItems">
                                <button data-bind = "click: ()=>{changeSize(8)}">8 items</button>
                                <button data-bind = "click: ()=>{changeSize(16)}">16 items</button>
                                <button data-bind = "click: ()=>{changeSize(items().length)}">All items</button>
                            </div>
                        </div>
                    </div>
                    <div class = "toolbar__item toolbar__item--active" data-bind = "click: visibilityButtonBlockPrice">
                        <p>sort by price</p>
                        <div class = "toolbar__wrapper-buttons">
                            <div class = "toolbar__buttons" data-bind = "visible: visiblePriceSortItems">
                                <button data-bind = "click: sortedPriceHigh">Sort price low</button>
                                <button data-bind = "click: sortedPriceLow">Sort price high</button>
                            </div>
                        </div>
                    </div>
                    <div class = "toolbar__item toolbar__item--active" data-bind = "click: visibilityButtonBlockName">
                        <p>sort by name</p>
                        <div class = "toolbar__wrapper-buttons">
                            <div class = "toolbar__buttons" data-bind = "visible: visibleNameSortItems">
                                <button data-bind = "click: sortedNameLow">Sort name A-Z</button>
                                <button data-bind = "click: sortedNameHigh">Sort name Z-A</button>
                            </div>
                        </div>
                    </div>
                    <div class = "toolbar__item toolbar__item--light">total <span data-bind = "text: quantityItems"></span> products </div>
                </div>
            </div>`;
});

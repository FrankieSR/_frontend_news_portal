define(() => {
    return `<div class = "sidebar">
                <div class = "sidebar__items-wrapper">
                    <div class = "sidebar__item" data-bind = "click: visibilityButtonBlockItems">
                        <p>number of products</p>
                        <div class = "sidebar__wrapper-buttons">
                            <div class = "sidebar__buttons" data-bind = "visible: visibleItems">
                                <button data-bind = "click: ()=>{changeSize(8)}">8 items</button>
                                <button data-bind = "click: ()=>{changeSize(16)}">16 items</button>
                                <button data-bind = "click: ()=>{changeSize(items().length)}">All items</button>
                            </div>
                        </div>
                    </div>
                    <div class = "sidebar__item" data-bind = "click: visibilityButtonBlockPrice">
                        <p>sort by price</p>
                        <div class = "sidebar__wrapper-buttons">
                            <div class = "sidebar__buttons" data-bind = "visible: visiblePriceSortItems">
                                <button data-bind = "click: sortedPriceHigh">Sort price low</button>
                                <button data-bind = "click: sortedPriceLow">Sort price high</button>
                            </div>
                        </div>
                    </div>
                    <div class = "sidebar__item" data-bind = "click: visibilityButtonBlockName">
                        <p>sort by name</p>
                        <div class = "sidebar__wrapper-buttons">
                            <div class = "sidebar__buttons" data-bind = "visible: visibleNameSortItems">
                                <button data-bind = "click: sortedNameLow">Sort name A-Z</button>
                                <button data-bind = "click: sortedNameHigh">Sort name Z-A</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;
});
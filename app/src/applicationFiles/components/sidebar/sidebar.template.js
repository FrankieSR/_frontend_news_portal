define(() => {
    return `<div class="sidebar">
                <div class = "sidebar__min-price">
                    <input data-bind="value: inputValueMin">
                    <span data-bind = "text: inputValueMin"></span>
                </div>
                <button data-bind = 'click: clickedSomeWhere '></button>
            </div>`
});
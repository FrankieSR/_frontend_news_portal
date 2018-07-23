define(function() {
    return function templateCartTemplate() {
        return `<nav class = "pangination">
                    <ul class="pagination__list" data-bind="visible: $root.maxPageIndex() != 0">
                        <li class="pagination__item pagination__item--arrow" data-bind="css: { disabled: $root.pageIndex() === 0 }">
                            <a class="pagination__link" href="#" data-bind="click: $root.prevPage">
                                <</a>
                        </li>
                        <!-- ko foreach: $root.allPages -->
                                <li class="pagination__item" data-bind="click:  () => {$root.pangination($index())}">
                                    <a class="pagination__link" href="#" data-bind="text: $index() + 1"></a>
                                </li>
                        <!-- /ko -->
                        <li class="pagination__item pagination__item--arrow" data-bind="css: { disabled: $root.pageIndex() === $root.maxPageIndex() }">
                            <a class="pagination__link" href="#" data-bind="click: $root.nextPage">></a>
                        </li>
                    </ul>
                </nav>`;
    };
});

define(function() {
    return function templateProductCart() {
        return `<div class="card">
                    <img class="card-img-top" data-bind="attr: { src: 'https://www.expertrec.com/wp-content/uploads/2017/11/magento-logo.png' }"  alt="image">
                 <div class="card-body">
                     <h5 class="card-title" data-bind="text: $parent.name"></h5>
                      <span class="card-price" data-bind="text: $parent.price"></span>
                      <p class="card-text" data-bind="text: $parent.description"></p>
                </div>
               </div>`
    };
});

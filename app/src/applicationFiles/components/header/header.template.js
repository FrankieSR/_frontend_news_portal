// ---- header template  ----
define(() => {
    return `<div class="header">
                <div class = "header__item">
                    <logo-template></logo-template>
                </div>
                <div class = "header__item"  data-bind = "click: visibilityItemInCart">
                    <div>
                        <div>
                            <span class = "header__cart-value" data-bind = "text: cartLenth"></span>
                            <img src ="https://flaticons.net/icons/Shopping/Shopping-Cart-03.png" style = "height: 45px; width: 45px; float: right; padding: 39px 30px 0 0"/>
                        </div>
                    </div>
                </div>
                <purchased-template></purchased-template>
            </div>`
});

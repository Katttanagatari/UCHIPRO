
const postMethods = () => {
    const cartContainer = document.getElementById("student-cart");
    cartContainer.innerHTML = "";

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (cart.length === 0) {
        cartContainer.innerHTML = `
            <div style="display: flex; justify-content: center; align-items: center; height: calc(100vh - 200px);">
                <div style="display: flex; flex-direction: column; align-items: center; gap: 16px;">
                    <img src="img/EmptyCart.png" alt="Empty Cart" style="width: 317px; height: 317px;">
                    <div class="hero__cards__btn-text" style="color: #000; margin: 0; justify-content: center; display: flex;">В корзине сейчас пусто</div>
                    <div class="sidebar__panel-text" style="text-align: center; display: flex; max-width: 268px;">Вернитесь обратно во вкладку курсы, чтоб выбрать нужный товар</div>
                    <div class="hero__cards" style="padding: 6px 16px; align-items: center; max-width: 138px; text-align: center; height: 34px; border-radius: 10px; background-color: #0A84FF3F;">
                        <span style="font-size: 13px; color: var(--main-bg-color);">Перейти на курс</span>
                    </div>
                </div>
            </div>
        `;
        return;
    }

    cartContainer.appendChild(cartItem);

}

document.addEventListener("DOMContentLoaded", postMethods);
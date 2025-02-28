
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
    } cart.forEach(item => {
        const cartItem = document.createElement("div");
        const postTags = item.tags.map(tag => `<span class="hero__cards-tags">${tag}</span>`).join('');
        cartItem.innerHTML += `
            <div class="hero__info" style="justify-content: space-between; align-self: flex-start; margin-bottom: 20px;">
                <div style="display: flex;">
                    <div style="margin-right: 26px;">
                        <div style="font-size: 16px; color: #B3B3B3;">Дата</div>
                        <div style="font-size: 16px; color: #4D4D4D; margin-top: 10px;">${item.date}</div>
                    </div>
                    <div>
                        <div style="font-size: 14px; color: var(--main-bg-color);">${item.name}</div>
                        <div style="font-size: 13px; color: var(--main-bg-color); margin-top: 9px;">${item.yearFrom + ' - '+ item.yearTo}</div>
                        <div style="display: flex; gap: 12px; margin-top: 12px;">
                            <div style="display: flex; gap: 12px;">${postTags}</div>
                        </div>
                    </div>
                </div>
                <div style=" display: flex; gap: 12px;">
                    <div class="hero__cards" style="width: 187px; background-color: #F8F8F8; padding: 16px 24px;">
                        <div style="display: flex; align-items: center; justify-content: center; margin-top: 10px;">
                            <input type="radio" name="payment-${item.id}" style="margin: 0 8px 0 0;">
                            <div style="font-size: 14px; color: var(--main-bg-color);">Оплата за 1/мес</div>
                        </div>
                        <div style="font-size: 18px; color: var(--main-bg-color); text-align: center; margin-top: 12px;">${item.price} ₽</div>
                    </div>
                    <div class="hero__cards" style="width: 187px; background-color: #F8F8F8; padding: 16px 24px;">
                        <div style="display: flex; align-items: center; justify-content: center; margin-top: 10px;">
                            <input type="radio" name="payment-${item.id}" style="margin: 0 8px 0 0;">
                            <div style="font-size: 14px; color: var(--main-bg-color);">Оплата за 7/мес</div>
                        </div>
                        <div style="font-size: 18px; color: var(--main-bg-color); text-align: center; margin-top: 12px;">${item.price7m} ₽</div>
                    </div>
                    <img src="https://www.svgrepo.com/show/499592/close-x.svg" alt="Закрыть" width="24" height="24" style="margin-left: 12px; cursor: pointer;" onclick="removeFromCart(${item.id})">
                </div>
            </div>
        `;
        cartContainer.appendChild(cartItem);
    });



}

document.addEventListener("DOMContentLoaded", postMethods);
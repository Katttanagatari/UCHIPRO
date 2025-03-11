
const postMethods = () => {
    const cartContainer = document.getElementById("student-cart");
    const paymentContainer = document.getElementById("payment-methods");
    cartContainer.innerHTML = "";
    paymentContainer.innerHTML = "";

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (cart.length === 0) {
        cartContainer.classList.add("cart-empty");
        cartContainer.innerHTML = `
            <img src='../img/empty_cart.png' class="cart-empty__img"/>
            <div class="cart-empty__title">
                В корзине сейчас пусто
            </div>
            <div class="cart-empty__description">
                Вернитесь обратно во вкладку курсы, чтоб выбрать нужный товар
            </div>
            <a href="../student-courses.html" class="cart-empty__btn">
                <span class="cart-empty__btn-text">Перейти на курс</span>
            </a>
        `;
        return;
    } cart.forEach(item => {
       // const cartItem = document.createElement("div");
        const postTags = item.tags.map(tag => `<span class="course__tag-text">${tag}</span>`).join('');
        cartContainer.innerHTML += `
            <div class="hero__layout hero__cart">
                <div class="flex">
                    <div class="hero__date">
                        <div class="hero__date-label">Дата</div>
                        <div class="hero__date-value">${item.date}</div>
                    </div>
                    <div class="hero__content">
                        <div class="hero__name">${item.name}</div>
                        <div class="hero__years" style="font-size: 13px; color: var(--main-bg-color); margin-top: 9px;">${item.yearFrom + ' - '+ item.yearTo}</div>
                        <div class="hero__tags">
                            <div class="hero__tag">${postTags}</div>
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
        //cartContainer.appendChild(cartItem);
        paymentContainer.innerHTML = `
            <div class="hero__layout" style="width: 338px;">123</div>
        `
    });
}

document.addEventListener("DOMContentLoaded", postMethods);
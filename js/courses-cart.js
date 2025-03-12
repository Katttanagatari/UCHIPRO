
const postMethods = () => {
    const container = document.querySelector(".hero__cart-container");
    const cartContainer = document.getElementById("student-cart");
    const paymentContainer = document.getElementById("payment-methods");
    const cartOverAll = document.getElementById("cart-count");

    cartContainer.innerHTML = "";
    paymentContainer.innerHTML = "";
    let count = 0;

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
        count++;
       // const cartItem = document.createElement("div");
        const postTags = item.tags.map(tag => `<span class="course__tag-text">${tag}</span>`).join('');
        container.style.height = "auto";
        cartContainer.innerHTML += `
            <div class="hero__layout hero__cart">
                <div class="flex">
                    <div class="hero__date">
                        <div class="hero__date-label">Дата</div>
                        <div class="hero__date-value">${item.date}</div>
                    </div>
                    <div class="hero__content">
                        <div class="hero__name">${item.name}</div>
                        <div class="hero__years">${item.yearFrom + ' - '+ item.yearTo}</div>
                        <div class="hero__tags">
                            <div class="hero__tag">${postTags}</div>
                        </div>
                    </div>
                </div>
                <div class="hero__tag">
                    <div class="hero__layout hero__pay">
                        <label class="hero__option">
                            <input type="radio" name="payment-${item.id}" style="margin: 0 8px 0 0;">
                            <span class="hero__option-title">Оплата за 1/мес</span>
                        </label>
                        <div class="hero__option-price">${item.price} ₽</div>
                    </div>
                    <div class="hero__layout hero__pay">
                        <label class="hero__option">
                            <input type="radio" name="payment-${item.id}" style="margin: 0 8px 0 0;">
                            <span class="hero__option-title">Оплата за 7/мес</span>
                        </label>
                        <div class="hero__option-price">${item.price7m} ₽</div>
                    </div>
                    <img src="https://www.svgrepo.com/show/499592/close-x.svg" alt="Закрыть" width="24" height="24" style="margin-left: 12px; cursor: pointer;" onclick="removeFromCart(${item.id})">
                </div>
            </div>
        `;
        //cartContainer.appendChild(cartItem);
        paymentContainer.innerHTML = `
            <div class="hero__layout" style="width: 338px;">
                <div class="payment__header">
                    <div class="payment__label">К оплате</div>
                    <div class="payment__amount">6 380 ₽</div>
                </div>
                <div class="payment__details">
                    <div class="payment__courses">Курсы (${count})</div>
                    <div style="font-size: 16px;">6 380 ₽</div>
                </div>
                <div class="payment__choose">
                    <i></i>
                </div>
                <div class="main__btn" style="background-color: var(--main-bg-color); margin-top: 12px">123</div>
            </div>
        `
        cartOverAll.innerHTML = `
            <span class="hero__name">Корзина (${count})</span>
        `
    });
}

document.addEventListener("DOMContentLoaded", postMethods);
const container = document.querySelector(".hero__cart-container");
const cartContainer = document.getElementById("student-cart");
const paymentContainer = document.getElementById("payment-methods");
const cartOverAll = document.getElementById("cart-count");

cartContainer.innerHTML = "";
paymentContainer.innerHTML = "";
let count = 0;

let cart = JSON.parse(localStorage.getItem("cart")) || [];

const postMethods = () => {    
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
                            <input type="checkbox" name="payment-${item.id}" value="${item.price}" style="margin: 0 8px 0 0;">
                            <span class="hero__option-title">Оплата за 1/мес</span>
                        </label>
                        <div class="hero__option-price">${item.price} ₽</div>
                    </div>
                    <div class="hero__layout hero__pay">
                        <label class="hero__option">
                            <input type="checkbox" name="payment-${item.id}" value="${item.price7m}" style="margin: 0 8px 0 0;">
                            <span class="hero__option-title">Оплата за 7/мес</span>
                        </label>
                        <div class="hero__option-price">${item.price7m} ₽</div>
                    </div>
                    <img src="https://www.svgrepo.com/show/499592/close-x.svg" class="hero__remove" alt="Закрыть" data-id="${item.id}">
                </div>
            </div>
        `;
        //cartContainer.appendChild(cartItem);
        paymentContainer.innerHTML = `
            <div class="hero__layout" style="width: 338px;">
                <div class="payment__header">
                    <div class="payment__label">К оплате</div>
                    <div class="payment__amount">0 ₽</div>
                </div>
                <div class="payment__details">
                    <div class="payment__courses">Курсы (${count})</div>
                    <div class="payment__amount" style="font-size: 16px;">0 ₽</div>
                </div>
                <div class="payment__choose">
                    <div class="payment__info">
                        <span class="payment__text" data-active="true">Картой онлайн</span>
                        <span class="payment__text">По реквезитам</span>
                    </div>
                    <i class="payment__indicator" id="payment-choose"></i>
                </div>
                <span class="main__btn payment__btn">Перейти к оплате</span>
            </div>
        `
        cartOverAll.innerHTML = `
            <span class="hero__name">Корзина (${count})</span>
        `
    });

    //toggle button
    const toggle = document.getElementById("payment-choose");
    const toggleText = document.querySelectorAll(".payment__text");
    toggleText.forEach((text, index) => {
        text.addEventListener('click', () => {
            toggleText.forEach(el => el.removeAttribute('data-active'));
            text.setAttribute('data-active', 'true');
            if (index === 0) {
                toggle.classList.remove('pay-by-requisites');
            } else {
                toggle.classList.add('pay-by-requisites');
                text.setAttribute('data-active', 'true');
            }
        });
    });

    //total sum of courses
    const paymentAmountEl = document.querySelector('.payment__amount');
    const paymentDetailAmountEl = document.querySelector('.payment__details div:nth-child(2)');
    const recalcTotalSum = () => {
        let total = 0;
        const checkedBoxs = document.querySelectorAll('input[type="checkbox"][name^="payment-"]:checked');
    
        checkedBoxs.forEach(e => {
            total += parseFloat(e.value);
        });
        console.log(total);

        paymentAmountEl.textContent = `${total} ₽`;
        paymentDetailAmountEl.textContent = `${total} ₽`
    };

    document.addEventListener('change', (e) => {
        if (e.target.matches('input[type="checkbox"][name^="payment-"]')) {
            const sameCheckboxes = document.querySelectorAll(`input[type="checkbox"][name="${e.target.name}"]`);
            sameCheckboxes.forEach(el => {
                if (el !== e.target) {
                    el.checked = false;
                }
            });
    
            recalcTotalSum();
        }
    });

    //remove from cart
    const removeCart = document.querySelectorAll('.hero__remove');
    removeCart.forEach(btn => {
        btn.addEventListener('click', (event) => {
            const id = parseInt(event.target.dataset.id); 
            cart = cart.filter(item => item.id !== id);
            localStorage.setItem("cart", JSON.stringify(cart));
            event.target.closest('.hero__cart').remove();
        });
    });
};

document.addEventListener("DOMContentLoaded", postMethods);


const container = document.querySelector(".hero__cart-container");
const cartContainer = document.getElementById("student-cart");
const paymentContainer = document.getElementById("payment-methods");
const cartOverAll = document.getElementById("cart-count");

cartContainer.innerHTML = "";
paymentContainer.innerHTML = "";

let cart = JSON.parse(localStorage.getItem("cart")) || [];

const postMethods = () => {    
    if (cart.length === 0) {
        paymentContainer.innerHTML = '';
        cartOverAll.innerHTML = '';
        container.style.height = "calc(100vh - 126px)";
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
                <div class="hero__price">
                    <div class="hero__layout hero__pay">
                        <label class="hero__option">
                            <input type="checkbox" name="payment-${item.id}" value="${item.price}" style="margin: 0 8px 0 0;" class="hero__option-checkbox">
                            <span class="hero__option-title">Оплата за 1/мес</span>
                        </label>
                        <div class="hero__option-price">${item.price} ₽</div>
                    </div>
                    <div class="hero__layout hero__pay">
                        <label class="hero__option">
                            <input type="checkbox" name="payment-${item.id}" value="${item.price7m}" style="margin: 0 8px 0 0;" class="hero__option-checkbox">
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
            <div class="hero__layout payment">
                <div class="payment__header">
                    <div class="payment__label">К оплате</div>
                    <div class="payment__amount">0 ₽</div>
                </div>
                <div class="payment__details">
                    <div class="payment__courses">Курсы (0)</div>
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
            <span class="hero__name" id="count-el">Корзина (${cart.length})</span>
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
    const paymentLength = document.querySelector('.payment__courses');

    const recalcTotalSum = () => {
        let total = 0;
        const checkedBoxs = document.querySelectorAll('input[type="checkbox"][name^="payment-"]:checked');
        checkedBoxs.forEach(e => {
            total += parseFloat(e.value);
        });
        console.log(total);

        paymentAmountEl.textContent = `${total} ₽`;
        paymentDetailAmountEl.textContent = `${total} ₽`
        paymentLength.textContent = `Курсы (${checkedBoxs.length})`
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
    const сountElement = document.getElementById('count-el');
    const deleteEl = (event) => {
        const id = parseInt(event.currentTarget.dataset.id);
        cart = cart.filter(item => item.id !== id);
        localStorage.setItem("cart", JSON.stringify(cart));
        event.currentTarget.closest('.hero__cart').remove();
        сountElement.textContent = `Курсы (${cart.length})`;

        recalcTotalSum();
        if (cart.length === 0) {
            postMethods();
        }
    }

    removeCart.forEach(btn => {
        btn.addEventListener('click', (event) => {
            const id = parseInt(event.currentTarget.dataset.id);
            cart = cart.filter(item => item.id !== id);
            localStorage.setItem("cart", JSON.stringify(cart));
            event.currentTarget.closest('.hero__cart').remove();
            сountElement.textContent = `Курсы (${cart.length})`;

            recalcTotalSum();
            if (cart.length === 0) {
                postMethods();
            }
        });
    });

    

    //@media запрос
    const moveRemoveButtons = () => {
        document.querySelectorAll('.hero__cart').forEach(cart => {
          const removeBtn = cart.querySelector('.hero__remove');
          const tagBlock = cart.querySelector('.hero__price');
          const flexBlock = cart.querySelector('.flex');
      
          if (!removeBtn || !tagBlock || !flexBlock) return;
      
          if (window.innerWidth <= 740) {
            
            if (removeBtn.parentElement !== flexBlock) {
              flexBlock.appendChild(removeBtn);
            }
          } else {
            
            if (removeBtn.parentElement !== tagBlock) {
              tagBlock.appendChild(removeBtn);
            }
          }
        });
      };
      window.addEventListener('resize', moveRemoveButtons);
      window.addEventListener('DOMContentLoaded', moveRemoveButtons);
    
};

document.addEventListener("DOMContentLoaded", () => {
    postMethods();
    // const paymentBtn = document.querySelector(".payment__btn");

    // paymentBtn.addEventListener("click", () => {
    //     const selectedCheckboxes = document.querySelectorAll(".hero__option-checkbox:checked");
    
    //     if (selectedCheckboxes.length === 0) {
    //         alert("Пожалуйста, выберите хотя бы один курс для оплаты.");
    //         return;
    //     }
    
    //     const paymentMethod = document.querySelector(".payment__info .payment__text[data-active='true']").textContent;
    
    //     const selectedMap = {};
    //     selectedCheckboxes.forEach(checkbox => {
    //         const courseId = checkbox.name.replace("payment-", "");
    //         if (!selectedMap[courseId]) selectedMap[courseId] = [];
    //         selectedMap[courseId].push(checkbox);
    //     });
    
    //     const purchasedItems = Object.entries(selectedMap).map(([courseId, checkboxes]) => {
    //         const course = cart.find(c => c.id == courseId);
    
    //         // Сохраняем только один чекбокс — любой (например, первый)
    //         const checkbox = checkboxes[0];
    
    //         return {
    //             id: courseId,
    //             name: course?.name || "Неизвестный курс",
    //             selectedPrice: checkbox.value,
    //             paymentMethod,
    //             date: course?.date || new Date().toLocaleDateString('ru-RU')
    //         };
    //     });
    
    //     const previousPurchases = JSON.parse(localStorage.getItem("purchases")) || [];
    //     localStorage.setItem("purchases", JSON.stringify([...previousPurchases, ...purchasedItems]));
    
    //     const paidIds = purchasedItems.map(p => p.id);
    //     cart = cart.filter(c => !paidIds.includes(c.id));
    //     localStorage.setItem("cart", JSON.stringify(cart));

    //     alert("Оплата прошла успешно!");
    // });

    
    const paymentTexts = document.querySelectorAll(".payment__text");
    paymentTexts.forEach(text => {
        text.addEventListener("click", () => {
            paymentTexts.forEach(t => t.removeAttribute("data-active"));
            text.setAttribute("data-active", "true");
        });
    });
});


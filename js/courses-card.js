

// course rendering method
const postMethods = () => {
    const postContainer = document.getElementById('coursesCards'); // conteiner for courses

    postContainer.innerHTML = '';
    const selectedTags = Array.from(document.querySelectorAll('.filter-item__input:checked'))
    .map(tag => tag.dataset.tag);

    const selectedMonth = document.getElementById('months').value;

    const minPriceInput = parseFloat(document.getElementById("minPrice").value) || 0;
    const maxPriceInput = parseFloat(document.getElementById("maxPrice").value || Infinity);

    const filteredCourses = COURSES.filter(course => {
        const matchesTags =  selectedTags.length === 0 || selectedTags.every(tag => course.tags.includes(tag));
        const matchesMonth = selectedMonth === 'all' || course.month === selectedMonth;
        const matchesPrice = course.price >= minPriceInput && course.price <= maxPriceInput;

        return matchesTags && matchesMonth && matchesPrice;
    });

    filteredCourses.forEach((course) => {
        const postEl = document.createElement('div');
        postEl.classList.add('hero__layout', 'course');
        postEl.setAttribute('data-id', course.id);

        const postTags = course.tags.map(tag => `<span class="course__tag-text">${tag}</span>`).join('');
        postEl.innerHTML = `
                    <div class="course__tag">
                            ${postTags}
                    </div>
                    <div class="course__title">${course.name}</div>
                    <div class="course__duration">${course.yearFrom} - ${course.yearTo}</div>
                    <div class="course__date">
                        <img class="course__date-icon" src="../img/date_icon.svg" />
                        <div class="course__date-text">с ${course.date}</div>
                    </div>
                    <div class="hero__layout course__footer">
                        <div style="display: inline-block;" class="course__price">
                            <div class="course__price-label">В месяц</div>
                            <div class="course__price-value">от ${course.price} ₽</div>
                        </div>
                        <div class="course__actions">
                            <button class="clearbtn">
                                <div class="hero__layout main__btn course__favorite">
                                    <img class="course__favorite-icon" src="../img/courses_like.svg" />
                                </div>
                            </button>
                            <button class="clearbtn add-to-cart" data-id="${course.id}">
                                <div class="hero__layout main__btn">
                                    <img src="../img/cart_icon.svg" alt="cart" class="course__cart-icon"/>
                                    <span style="font-size: 15px; color: var(--main-bg-color);">В корзину</span>
                                </div>
                            </button>
                        </div>
                    </div>
                `;
        postContainer.appendChild(postEl);
    });
};


// tags rendering method
const displayUniqueTags = () => {
    const uniqueTags = [...new Set (COURSES.flatMap(course => course.tags))];

    const tagsContainer = document.getElementById('coursesFiler'); // conteiner for tags
    const showMoreEl = document.getElementById('showMoreEl');
    const visibleTagsCount = 4;


    uniqueTags.forEach((tag, index) => {
        const tagEl = document.createElement('div');

        tagEl.classList.add('filter-item');

        if (index >= visibleTagsCount){
            tagEl.style.display = 'none';
        }

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = `tag-${index + 1}`;
        checkbox.classList.add('filter-item__input');
        checkbox.dataset.tag = tag;

        const label = document.createElement('label');
        label.htmlFor = checkbox.id;
        label.classList.add('filter-item__text');
        label.style.color = '#8E8E93';
        label.textContent = tag;

        tagEl.appendChild(checkbox);
        tagEl.appendChild(label);

        tagsContainer.appendChild(tagEl);

        checkbox.addEventListener('change', postMethods);
        document.getElementById('months').addEventListener('change', postMethods);
        document.getElementById('minPrice').addEventListener('input', postMethods);
        document.getElementById('maxPrice').addEventListener('input', postMethods);
    });

    if (uniqueTags.length > visibleTagsCount){ //btn show more
        const showMoreBtn = document.createElement('button');
        showMoreBtn.classList.add('filter__more');

        showMoreBtn.textContent = `Еще ${uniqueTags.length - visibleTagsCount}`
        
        showMoreEl.appendChild(showMoreBtn);

        showMoreBtn.addEventListener('click', () => {
            const hiddenItems = tagsContainer.querySelectorAll('.filter-item[style*="display: none"]');
            if (hiddenItems.length > 0) {
                hiddenItems.forEach(item => item.style.display = 'block');
                showMoreBtn.innerText = 'Скрыть';
            } else {
                document.querySelectorAll('.filter-item')
                .forEach((item,index) => {
                    if (index >= visibleTagsCount){
                        item.style.display = 'none';
                        showMoreBtn.textContent = `Еще ${uniqueTags.length - visibleTagsCount}`
                    }
                });
            }
        });
    }


}

const addToCart = (productId) => {
    const product = COURSES.find(el => el.id === productId);
    if (!product) return;

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let cartItem = cart.find(item => item.id === productId);
    if (cartItem) {
        alert(`Вы уже добавили курс "${product.name}" в корзину!`);
        return;
    } else {
        const price7m = product.price * 7;
        
        cart.push({
            id: product.id,
            name: product.name, 
            price: product.price,
            price7m,
            tags: product.tags,
            yearFrom: product.yearFrom,
            yearTo: product.yearTo,
            date: product.date
        });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${product.name} добавлен в корзину!`);
};

// add to cart on click
document.addEventListener('click', (event) => { 
   const btn = event.target.closest('.add-to-cart');
   if (!btn) return;
   console.log('123');

   const productId = parseInt(btn.getAttribute("data-id"), 10);
   addToCart(productId);
});

// pop up el for cards
document.addEventListener('click', (event) => {
    if (event.target.closest('.add-to-cart')) return;

    const courseEl = event.target.closest('.course');
    if (!courseEl) return;

    const courseId = parseInt(courseEl.getAttribute('data-id'), 10);
    const courseObj = COURSES.find(e => e.id === courseId);

    const courseName = courseObj.name;
    const coursePrice = courseObj.price;
    const courseDescription = courseObj.description;
    const postTags = courseObj.tags.map(tag => `<span class="course__tag-text popup__text">${tag}</span>`).join('');

    const popup = document.createElement('div');
    popup.classList.add('popup');
    popup.innerHTML = `
        <div class="popup__content">
            <div class="popup__header">
                <div class="course__tag"> ${postTags} </div>
                <span class="popup__close">&times;</span>
            </div>
            <h2 class="course__title">${courseName}</h2>
            <p>Цена: от ${coursePrice} ₽</p>
            <p class="popup__dersc">${courseDescription}</p>
            <hr class="sidebar__divider"/>
            <button class="clearbtn add-to-cart" data-id="${courseObj.id}">
                <div class="course__tag-text popup__text">Выбрать</div>
            </button>
        </div>
    `;
    document.body.appendChild(popup);
    document.body.classList.add('no-scroll');

    const popupContent = document.querySelector('.popup__content');
    const closePopup = () => {
        popup.remove();
        document.body.classList.remove('no-scroll');
    };

    document.addEventListener('click', (event) => {
        if (event.target.classList.contains('popup__close') || 
            (!popupContent.contains(event.target) && popup.contains(event.target))) {
            closePopup();
        };
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closePopup();
        }
    });
});





const initialize = () => {
    const prices = COURSES.map(course => parseFloat(course.price));
    const minPrice = Math.min(...prices);
    const maxPrice = Math.max(...prices);
    document.getElementById("minPrice").value = minPrice;
    document.getElementById("maxPrice").value = maxPrice;


    postMethods();
    displayUniqueTags();
};

document.addEventListener('DOMContentLoaded', initialize);



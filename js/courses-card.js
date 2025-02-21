


// course rendering method
const postMethods = () => {
    const postContainer = document.getElementById('coursesCards'); // conteiner for courses

    postContainer.innerHTML = '';
    const selectedTags = Array.from(document.querySelectorAll('.tag-filter:checked'))
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
        postEl.classList.add('hero__cards', 'courses');

        const postTags = course.tags.map(tag => `<span class="hero__cards-tags">${tag}</span>`).join('');
        postEl.innerHTML = `
                    <div style="display: flex; gap: 12px; flex-wrap: wrap;">
                            ${postTags}
                        </div>
                        <div class="hero__cards-title">${course.name}</div>
                        <div class="hero__cards-year">${course.yearFrom} - ${course.yearTo}</div>
                        <div style="display: flex; margin-top: 18px; margin-bottom: 22px;">
                            <svg width="20" height="18" style="background-color: #0A84FF; margin-right: 8px;"></svg>
                            <div class="hero__cards-date">с ${course.date}</div>
                        </div>
                        <div class="hero__cards btn">
                            <div style="display: inline-block;">
                                <div class="hero__cards__btn-title">В месяц</div>
                                <div class="hero__cards__btn-text">от ${course.price} ₽</div>
                            </div>
                            <div style="display: flex; gap: 10px;">
                                <div class="hero_cards" style="width: 54px; height: 42px; background-color: #fff; display: flex; box-sizing: border-box; padding: 10px 16px; justify-content: center; align-items: center; border-radius: 10px;">
                                    <svg width="18.33" height="16.5" style="background-color: #0A84FF;"></svg>
                                </div>
                                <div class="hero_cards" style="width: 135px; height: 42px; background-color: #fff; display: flex; box-sizing: border-box; padding: 10px 16px; justify-content: center; align-items: center; border-radius: 10px;">
                                    <svg width="18.33" height="16.5" style="background-color: #0A84FF; margin-right: 10px;"></svg>
                                    <span style="font-size: 15px; font-weight: 500; color: var(--main-bg-color);">В корзину</span>
                                </div>
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
        checkbox.classList.add('tag-filter');
        checkbox.dataset.tag = tag;

        const label = document.createElement('label');
        label.htmlFor = checkbox.id;
        label.classList.add('hero__cards__btn-text');
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
        showMoreBtn.classList.add('showmore-btn');

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
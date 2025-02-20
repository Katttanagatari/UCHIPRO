
// course rendering method
const postMethods = () => {
    const postContainer = document.getElementById('coursesCards'); // conteiner for courses
    COURSES.forEach((course) => {
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

        tagEl.innerHTML = `
            <input type="checkbox" id="tag-${index + 1}" class="tag-filter" data-tag="${tag}">
            <label for="tag-${index + 1}" class="hero__cards__btn-text" style="color: #8E8E93;">${tag}</label>
        `;

        tagsContainer.appendChild(tagEl);
    });

    if (uniqueTags.length > visibleTagsCount){
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
                const allItems = document.querySelectorAll('.filter-item')
                .forEach((item,index) => {
                    if (index >= visibleTagsCount){
                        item.style.display = 'none';
                        showMoreBtn.textContent = `Еще ${uniqueTags.length - visibleTagsCount}`
                    }
                });
            }
        })
    }


}



const initialize = () => {
    postMethods();
    displayUniqueTags();
};

document.addEventListener('DOMContentLoaded', initialize);
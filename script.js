document.addEventListener("DOMContentLoaded", function () {
    // Смена img 
    const sliderWrapper = document.querySelector(".slider-wrapper");
    const slides1 = document.querySelectorAll(".slide");

    slides1.forEach((slide, index) => {
        const mainGameImage = slide.querySelector(".left-side img");
        const rightImages = slide.querySelectorAll(".right-side img");
        const defaultMainImageSrc = mainGameImage.src;

        rightImages.forEach(img => {
            img.addEventListener("mouseover", function () {
                mainGameImage.src = this.src;
            });
        });

        sliderWrapper.addEventListener("mouseleave", function () {
            mainGameImage.src = defaultMainImageSrc;
        });
    });

    // слайдер 
    const prevSlideButton = document.querySelector(".prev-slide");
    const nextSlideButton = document.querySelector(".next-slide");
    const slides2 = document.querySelectorAll(".slide");
    const slideInterval = 5000;
    let currentIndex = 0;
    let slideIntervalId;

    const showSlide = (index) => {
        slides2.forEach((slide, i) => {
            slide.style.display = i === index ? "flex" : "none";
        });

        const counterDots = document.querySelectorAll('.slider-counter div');
        counterDots.forEach((dot, i) => {
            dot.classList.toggle('focus', i === index);
        });
    };

    const showNextSlide = () => {
        currentIndex = (currentIndex + 1) % slides2.length;
        showSlide(currentIndex);
    };

    const showPrevSlide = () => {
        currentIndex = (currentIndex - 1 + slides2.length) % slides2.length;
        showSlide(currentIndex);
    };

    const startSlideShow = () => {
        slideIntervalId = setInterval(showNextSlide, slideInterval);
    };

    const stopSlideShow = () => {
        clearInterval(slideIntervalId);
    };

    const handleSlideMouseover = () => {
        stopSlideShow();
    };

    const handleSlideMouseout = () => {
        startSlideShow();
    };

    slides2.forEach(slide => {
        slide.addEventListener('mouseover', handleSlideMouseover);
        slide.addEventListener('mouseout', handleSlideMouseout);
    });

    prevSlideButton.addEventListener("click", () => {
        stopSlideShow();
        showPrevSlide();
        startSlideShow();
    });

    nextSlideButton.addEventListener("click", () => {
        stopSlideShow();
        showNextSlide();
        startSlideShow();
    });

    showSlide(currentIndex);

    startSlideShow();

    // слайдер для specialOffers
    const prevSlideButton1 = document.querySelector(".prev-slide1");
    const nextSlideButton1 = document.querySelector(".next-slide1");
    const slides3 = document.querySelectorAll(".specialOffers-item");
    const slideInterval1 = 5000;
    let currentIndex1 = 0;
    let slideIntervalId1;

    const showSlide1 = (index) => {
        slides3.forEach((slide, i) => {
            slide.style.display = i === index ? "flex" : "none";
        });

        const counterDots = document.querySelectorAll('.dot1');
        counterDots.forEach((dot, i) => {
            dot.classList.toggle('focus', i === index);
        });
    };

    const showNextSlide1 = () => {
        currentIndex1 = (currentIndex1 + 1) % slides3.length;
        showSlide1(currentIndex1);
    };

    const showPrevSlide1 = () => {
        currentIndex1 = (currentIndex1 - 1 + slides3.length) % slides3.length;
        showSlide1(currentIndex1);
    };

    const startSlideShow1 = () => {
        slideIntervalId1 = setInterval(showNextSlide1, slideInterval1);
    };

    const stopSlideShow1 = () => {
        clearInterval(slideIntervalId1);
    };

    prevSlideButton1.addEventListener("click", () => {
        stopSlideShow1();
        showPrevSlide1();
        startSlideShow1();
    });

    nextSlideButton1.addEventListener("click", () => {
        stopSlideShow1();
        showNextSlide1();
        startSlideShow1();
    });

    showSlide1(currentIndex1);

    startSlideShow1();

    // BasketIcon
    const objectElement = document.querySelector('object[data="popup.html"]');
    objectElement.addEventListener("load", function () {
        const objectDoc = objectElement.contentDocument;
        const basketIconContent = objectDoc.getElementById('basketIcon_content');

        const basketIcon = document.querySelector('.basketIcon');
        const sliderImages = document.querySelectorAll('.slide img');
        const closeBtn = basketIcon.querySelector('.close_btn');
        const continueShoppingBtn = basketIcon.querySelector('.continue_shopping_btn');
        const viewBasketBtn = basketIcon.querySelector('.view_basket_btn');

        sliderImages.forEach(image => {
            image.addEventListener('click', () => {
                // Отображаем информацию о выбранной игре в окне
                basketIcon.querySelector('.DialogContent_title').textContent = "Basket Game";
                // Показываем окно с информацией
                basketIconContent.style.display = 'block';
            });
        });

        // Закрытие окна при клике вне него
        document.addEventListener('click', (event) => {
            if (!event.target.closest('.basketIcon') && !event.target.closest('.slide')) {
                basketIconContent.style.display = 'none';
            }
        });

        // Обработчик для кнопки закрытия окна
        closeBtn.addEventListener('click', () => {
            basketIconContent.style.display = 'none';
        });

        // Обработчики для кнопок продолжения покупок и просмотра корзины
        continueShoppingBtn.addEventListener('click', () => {
            basketIconContent.style.display = 'none'; // Закрываем окно корзины
            // Здесь можно добавить дополнительную логику для кнопки продолжения покупок
        });

        viewBasketBtn.addEventListener('click', () => {
            basketIconContent.style.display = 'none'; // Закрываем окно корзины
            // Здесь можно добавить дополнительную логику для кнопки просмотра корзины
        });
    });
});
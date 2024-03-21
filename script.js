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
    const sliderItems = document.querySelectorAll(".slider-item");
    const basketIconContent = document.getElementById("basketIcon_content");

    // Добавляем обработчик события клика для каждого слайдера
    sliderItems.forEach(function (item) {
        item.addEventListener("click", function () {
            basketIconContent.style.display = "block";
        });
    });

    // При клике на крестик закрыть всплывающее окно
    const closeBtn = document.querySelector(".close_btn");
    closeBtn.addEventListener("click", function () {
        basketIconContent.style.display = "none";
    });

    // Закрыть всплывающее окно при клике вне его области
    window.addEventListener("click", function (event) {
        if (event.target === basketIconContent) {
            basketIconContent.style.display = "none";
        }
    });

    // Обработчик события для кнопки "Continue shopping"
    const continueShoppingBtn = document.querySelector(".continue-shopping-btn");
    continueShoppingBtn.addEventListener("click", function () {
        // Находим всплывающее окно
        const basketIconContent = document.getElementById("basketIcon_content");
        // Скрываем всплывающее окно
        basketIconContent.style.display = "none";
    });

    const viewBasketBtn = document.querySelector(".view-basket-btn");
    viewBasketBtn.addEventListener("click", function () {
        // Перенаправляем пользователя на страницу корзины
        window.location.href = "basket.html";
    });

    const sliderItems2 = document.querySelectorAll(".slider-item");

    sliderItems2.forEach(function (item) {
        item.addEventListener("click", function () {
            const gameId = item.dataset.gameId; // Получаем идентификатор игры
            const gameName = item.querySelector(".gameName").textContent; // Получаем название игры
            const gamePrice = item.querySelector(".game_price").textContent; // Получаем цену игры
            const gameImgSrc = item.querySelector(".img-game").src; // Получаем путь к изображению игры
    
            // Создаем объект с информацией о выбранной игре
            const game = {
                id: gameId,
                name: gameName,
                price: gamePrice,
                imageSrc: gameImgSrc // Добавляем путь к изображению в объект игры
            };
    
            // Добавляем выбранную игру в localStorage
            addToCart(game);
        });
    });
    
    function addToCart(game) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(game);
        localStorage.setItem('cart', JSON.stringify(cart));
    }    
});
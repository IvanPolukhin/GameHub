// Смена img 
document.addEventListener("DOMContentLoaded", function () {
    const sliderWrapper = document.querySelector(".slider-wrapper");
    const slides = document.querySelectorAll(".slide");

    slides.forEach((slide, index) => {
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
});

// слайдер 
document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".homePage_bnt");
    const slides = document.querySelectorAll(".slide");
    const prevSlideButton = document.querySelector(".prev-slide");
    const nextSlideButton = document.querySelector(".next-slide");
    const slideInterval = 5000;
    let currentIndex = 0;
    let slideIntervalId;

    const showSlide = (index) => {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? "flex" : "none";
        });

        const counterDots = document.querySelectorAll('.slider-counter div');
        counterDots.forEach((dot, i) => {
            dot.classList.toggle('focus', i === index);
        });
    };

    const counterDots = document.querySelectorAll('.slider-counter div');
    counterDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            stopSlideShow();
            currentIndex = index;
            showSlide(currentIndex);
            startSlideShow();
        });
    });

    const showNextSlide = () => {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    };

    const showPrevSlide = () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
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

    slides.forEach(slide => {
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

    buttons.forEach((button, index) => {
        button.addEventListener("click", function () {
            stopSlideShow();
            currentIndex = index;
            showSlide(currentIndex);
            startSlideShow();
        });
    });

    startSlideShow();
});
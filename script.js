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

    let currentIndex = 0;

    const showSlide = (index) => {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? "flex" : "none";
        });
    };

    const showNextSlide = () => {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    };

    const showPrevSlide = () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    };

    prevSlideButton.addEventListener("click", showPrevSlide);
    nextSlideButton.addEventListener("click", showNextSlide);

    showSlide(currentIndex);

    buttons.forEach((button, index) => {
        button.addEventListener("click", function () {
            currentIndex = index;
            showSlide(currentIndex);
        });
    });
});

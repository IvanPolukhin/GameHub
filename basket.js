document.addEventListener("DOMContentLoaded", function () {
    const basketItemsContainer = document.querySelector(".desirable");
    const totalCostElement = document.querySelector(".panelBasket_header_right");
    const deleteAllItemsButton = document.querySelector(".deleteAllItems"); // Получаем кнопку "Delete all items"
    const emptyBasketPlaceholder = document.querySelector(".PanelFocusable"); // Получаем макет самой игры в корзине

    // Получаем список игр из localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Функция для отображения или скрытия макета самой игры в корзине
    function toggleEmptyBasketPlaceholder() {
        if (cart.length === 0) {
            emptyBasketPlaceholder.style.display = 'none'; // Скрываем макет, если корзина пуста
        } else {
            emptyBasketPlaceholder.style.display = 'block'; // Показываем макет, если корзина не пуста
        }
    }

    // Отображаем выбранные игры в корзине
    function renderCart() {
        basketItemsContainer.innerHTML = ''; // Очищаем содержимое контейнера корзины

        cart.forEach(function (item) {
            const gameElement = document.createElement("div");
            gameElement.classList.add("desirable_game");

            const gameInner = document.createElement("div");
            gameInner.classList.add("game_inner");

            const gameLeft = document.createElement("div");
            gameLeft.classList.add("game_left");

            const gameImg = document.createElement("img");
            gameImg.src = item.imageSrc || ''; // Получаем src изображения из объекта товара, если оно не определено, устанавливаем пустую строку
            gameImg.alt = item.imageAlt || ''; // Получаем alt изображения из объекта товара, если оно не определено, устанавливаем пустую строку
            gameImg.classList.add("game_img");
            gameLeft.appendChild(gameImg);

            const gameRight = document.createElement("div");
            gameRight.classList.add("game_right");

            const gameName = document.createElement("div");
            gameName.classList.add("game_name");
            gameName.textContent = item.name || ''; // Получаем название игры из объекта товара, если оно не определено, устанавливаем пустую строку
            gameRight.appendChild(gameName);

            const gameIconAndPrice = document.createElement("div");
            gameIconAndPrice.classList.add("game_iconAndPrice");
            gameIconAndPrice.textContent = isNaN(parseFloat(item.price)) ? '0₴' : item.price + '₴'; // Если цена не число, устанавливаем 0₴, иначе используем цену игры
            gameRight.appendChild(gameIconAndPrice);

            gameInner.appendChild(gameLeft);
            gameInner.appendChild(gameRight);

            gameElement.appendChild(gameInner);
            basketItemsContainer.appendChild(gameElement);
        });

        // Вызываем функцию для отображения или скрытия макета самой игры в корзине
        toggleEmptyBasketPlaceholder();

        // Вычисляем общую стоимость выбранных игр и обновляем ее на странице
        let totalCost = 0;
        cart.forEach(function (item) {
            if (!isNaN(parseFloat(item.price))) {
                totalCost += parseFloat(item.price); // Предполагается, что цена игры указана в числовом формате
            }
        });
        totalCostElement.textContent = totalCost.toFixed(2) + '₴'; // Отображаем общую стоимость с двумя знаками после запятой
    }

    // Вызываем функцию отображения корзины при загрузке страницы
    renderCart();

    // Добавляем обработчик клика на кнопку "Delete all items"
    deleteAllItemsButton.addEventListener("click", function () {
        // Очищаем массив корзины и обновляем localStorage
        cart = [];
        localStorage.setItem('cart', JSON.stringify(cart));

        // Перерисовываем корзину, чтобы отобразить ее пустое состояние
        renderCart();
    });

    const continueShoppingButton = document.querySelector(".continueShopping");
    continueShoppingButton.addEventListener("click", function () {
        window.location.href = "index.html"; // Перенаправляем пользователя на основную страницу
    });
});

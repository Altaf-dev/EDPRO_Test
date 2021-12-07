

//Обьявил переменную всплывающего окна
const POPUP = document.querySelector('.footer__popup')



// Слушатель кликов
window.addEventListener('click', (event) => {
    let element = event.target

    // Функция открывания окна по нажатию на кнопку
    if (element.classList.contains('content__popup')) {
        $(POPUP).fadeIn()
    }
    // Функция закрытия окна по нажатию на крестик или за пределами формы
    if (element.classList.contains('popup__close') ||
        (element.classList.contains('footer__popup'))) {
        closeModal()
    }
})

//Вызов функции закрытия окна
function closeModal() {
    $(POPUP).fadeOut()
}


//Инициализация и настройка слайдера

const swiper = new Swiper('.swiper', {
    centeredSlides: true,
    slidesPerView: 1,
    speed: 500,
    loop: true,
    height: 515,
    pagination: {
        el: '.content-pagination',
    },
    navigation: {
        nextEl: '.content-button-next',
        prevEl: '.content-button-prev',
    },
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});

//Маска ввода телефона
$(document).ready(function () {
    $(".phone-mask").mask("9 (999) 999-99-99");
});

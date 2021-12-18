const MARKER = document.querySelector('.item-marker')
const ITEM = document.querySelectorAll('.menu-item')

function indicator (e){
    MARKER.style.left = e.offsetLeft+'px'
    MARKER.style.width = e.offsetWidth+'px'
}

ITEM.forEach(link =>{
    link.addEventListener('mousemove', (e) => {
        indicator(e.target)
    })
})
// // Слушатель кликов
// window.addEventListener('click', (event) => {
//     let element = event.target
//
//     // Функция открывания окна по нажатию на кнопку
//     if (element.classList.contains('menu-btn')) {
//         BTN.classList.toggle('menu-active')
//     }
//     // Функция закрытия окна по нажатию на крестик или за пределами формы
//     if (element.classList.contains('popup__close') ||
//         (element.classList.contains('footer__popup'))) {
//         closeModal()
//     }
// })

//Вызов функции закрытия окна
function closeModal() {
    $(POPUP).fadeOut()
}



//Маска ввода телефона
$(document).ready(function () {
    $(".phone-mask").mask("9 (999) 999-99-99");
});

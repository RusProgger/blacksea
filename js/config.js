const burgerMenu = document.querySelector('.burger-menu');
const menuList = document.querySelector('.menu__list');

// Обработчик клика на иконку бургера
burgerMenu.onclick = function() {
    menuList.classList.toggle('active-menu');
    burgerMenu.classList.toggle('active');
};

// Закрытие меню при клике на ссылку
const menuLinks = document.querySelectorAll('.menu__list a'); // Селектор для всех ссылок в меню

menuLinks.forEach(link => {
    link.onclick = function() {
        menuList.classList.remove('active-menu');
        burgerMenu.classList.remove('active');
    };
});

// Закрытие меню при клике вне области меню
document.addEventListener('click', function(event) {
    // Проверяем, был ли клик вне меню или кнопки бургера
    if (!burgerMenu.contains(event.target) && !menuList.contains(event.target)) {
        menuList.classList.remove('active-menu');
        burgerMenu.classList.remove('active');
    }
});
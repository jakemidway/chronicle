/**
 * !(i)
 * Код попадает в итоговый файл, только когда вызвана функция, например FLSFunctions.spollers();
 * Или когда импортирован весь файл, например import "files/script.js";
 * Неиспользуемый код в итоговый файл не попадает.

 * Если мы хотим добавить модуль следует его раскомментировать
 */
// import MousePRLX from './libs/parallaxMouse'
// import AOS from 'aos'
// import Swiper, { Navigation, Pagination } from 'swiper';

// import BaseHelpers from './helpers/BaseHelpers.js';
// import PopupManager from './modules/PopupManager';
// import BurgerMenu from './modules/BurgerMenu';
// import Tabs from './modules/Tabs';
// import Accordion from './modules/Accordion.js';

// BaseHelpers.checkWebpSupport();

// BaseHelpers.addTouchClass();

// BaseHelpers.addLoadedClass();

// BaseHelpers.headerFixed();

/**
 * Открытие/закрытие модальных окон
 * Чтобы модальное окно открывалось и закрывалось
 * На окно повешай атрибут data-popup="<название окна>"
 * На кнопку, которая вызывает окно повешай атрибут data-type="<название окна>"

 * На обертку(.popup) окна добавь атрибут '[data-close-overlay]'
 * На кнопку для закрытия окна добавь класс '.button-close'
 * */
// new PopupManager();

/**
 *  Модуль для работы с меню (Бургер)
 * */
// new BurgerMenu().init();

/**
 *  Библиотека для анимаций
 *  документация: https://michalsnik.github.io/aos
 * */
// AOS.init();

/**
 * Параллакс мышей
 * */
// new MousePRLX();

// new Tabs('tabs-example', {});

// new Accordion('.accordion', {
//   shouldOpenAll: false, // true
//   defaultOpen: [], // [0,1]
//   collapsedClass: 'open',
// });


document.addEventListener('DOMContentLoaded', function() {
  var checkboxes = document.querySelectorAll('input[type="checkbox"]');

  // При изменении состояния чекбоксов
  checkboxes.forEach(function(checkbox) {
    checkbox.addEventListener('change', function() {
      var tag = this.id; // Получаем значение атрибута 'id' чекбокса
      var divs = document.querySelectorAll('div[data-tag="' + tag + '"]');

      // Если чекбокс отмечен, отображаем соответствующий <div>
      if (this.checked) {
        divs.forEach(function(div) {
          div.style.display = 'grid';
        });
      } else {
        divs.forEach(function(div) {
          div.style.display = 'none';
        });
      }
    });
  });
});
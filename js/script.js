'use strict';
var headerBurger = document.querySelector('.header__burger');
var headerNavigation = document.querySelector('.navigation');
var headerSearch = document.querySelector('.search');
var formBlock = document.querySelector('.login__form');
var emailInput = formBlock.querySelector('input[type=email]');
var storage = '';
var isStorageSupport = true;

if (headerBurger || headerNavigation || headerSearch) {
  var isJsBlock = function () {
    headerBurger.classList.add('header__burger--js');
    headerNavigation.classList.add('navigation--js');
    headerSearch.classList.add('search--js');
  };
}

isJsBlock();

// запись в localStorage
var setStorage = function (inputEl) {
  if (storage) {
    inputEl.value = storage;
  }
};

// проверка поддержки localStorage
var checkStorageSupport = function () {
  try {
    storage = localStorage.getItem('name');
  } catch (err) {
    isStorageSupport = false;
  }
};

var setValues = function () {
  if (isStorageSupport) {
    localStorage.setItem('name', emailInput.value);
  }
};


var onChangeInputValue = function () {
  checkStorageSupport();
  setStorage(emailInput);
  setValues();
};

emailInput.addEventListener('change', onChangeInputValue);

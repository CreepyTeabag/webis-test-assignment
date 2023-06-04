'use strict';

const input = document.querySelector('.input-field');
const resetButton = document.querySelector('.reset-button');
const resultField = document.querySelector('.result');

const printResult = function (str) {
  resultField.textContent = str;
};

resetButton.addEventListener('click', function (e) {
  e.preventDefault();
  input.value = '';
  printResult('Результат');
});

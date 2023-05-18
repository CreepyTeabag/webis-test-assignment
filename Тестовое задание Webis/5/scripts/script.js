'use strict';

const allowedChars = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '0',
  ',',
  '.',
  '*',
  '-',
  '+',
  '/',
];
const operations = ['*', '-', '+', '/'];
const input = document.querySelector('.input-field');
const calcButton = document.querySelector('.calculate-button');
const resetButton = document.querySelector('.reset-button');
const resultField = document.querySelector('.result');

//Значения по умолчанию
let result = '';
let str = '';
let operation = '+';

const printResult = function (str) {
  resultField.textContent = str;
};

const calculateResult = function (arr) {
  let [el1, el2] = arr.join('').split(operation);
  el1 = Number(el1);
  el2 = Number(el2);
  console.log(typeof el1);
  console.log(el1, el2);

  if (operation === '/' && el2 === 0) {
    result = 'Деление на 0 запрещено';
    return result;
  } else {
    switch (operation) {
      case '*':
        result = el1 * el2;
        break;
      case '+':
        result = el1 + el2;
        break;
      case '/':
        result = el1 / el2;
        break;
      case '-':
        result = el1 - el2;
        break;
    }
    console.log(result);
    return result;
  }
};

const checkInput = function () {
  let operationsNumber = 0;
  str = input.value;
  let strArr = str.trim().replaceAll(' ', '').replaceAll(',', '.').split('');

  for (const [i, char] of strArr.entries()) {
    if (!allowedChars.includes(char)) {
      console.log(char);
      result = 'Вы ввели некорректное выражение';
      break;
    } else if (operations.includes(char)) {
      operationsNumber++;

      console.log(operationsNumber);
      let operIndex = i;
      operation = char;
    }
  }
  if (operationsNumber < 1) {
    result = 'Введите операцию';
  } else if (operationsNumber > 1) {
    result = 'Вы ввели слишком много операций!';
  } else {
    calculateResult(strArr);
  }
  printResult(result);
  console.log(result);
};

//Как передать в функцию аргументы внутри event listener-a
calcButton.addEventListener('click', () => {
  checkInput();
});

resetButton.addEventListener('click', function () {
  input.value = '';
  printResult('Результат');
});

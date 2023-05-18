'use strict';

const tableAdaptive = document.querySelector('.table-adaptive');

const people = [
  ['Иванов', 'Пётр', 'Сергеевич'],
  ['Сергеев', 'Иван', 'Петрович'],
  ['Петров', 'Сергей', 'Иванович'],
];

const displayDesctopTable = function (arr) {
  tableAdaptive.innerHTML = '';
  let desctopTable = `
  <tr>
    <td class="bold">Фамилия</td>
    <td class="bold">Имя</td>
    <td class="bold">Отчество</td>
  </tr>
  `;

  arr.forEach(function (person) {
    desctopTable += `
    <tr>
      <td>${person[0]}</td>
      <td>${person[1]}</td>
      <td>${person[2]}</td>
    </tr>
    `;
  });
  tableAdaptive.insertAdjacentHTML('afterbegin', desctopTable);
};

const displayMobileTable = function (arr) {
  tableAdaptive.innerHTML = '';
  let mobileTable = ``;

  arr.forEach(function (person, i) {
    mobileTable += `
    <tr>
        <td class="bold">${i + 1}. Фамилия</td>
        <td>${person[0]}</td>
    </tr>
    <tr>
        <td class="bold">Имя</td>
        <td>${person[1]}</td>
    </tr>
    <tr>
        <td class="bold">Отчество</td>
        <td>${person[2]}</td>
    </tr>
    `;
  });
  tableAdaptive.insertAdjacentHTML('afterbegin', mobileTable);
};

console.log(document.querySelector('html').clientWidth);
window.onresize = function () {
  if (document.querySelector('html').clientWidth > 600) {
    displayDesctopTable(people);
  } else {
    displayMobileTable(people);
  }
};

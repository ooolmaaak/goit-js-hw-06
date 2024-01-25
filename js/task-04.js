// счетчик должен увеличивать или уменьшать значение на 1 в span value
// при клике на кнопку

// Создать переменную counterValue в которой будет храниться текущее значение счетчика
// и установить её значением 0.
// Добавить слушатели кликов на кнопки, внутри которых для увеличивания/уменьшения счетчика
// Интерфейс обновляется новым значением переменной counterValue.

const currentValue = document.getElementById("value"); // доступ к значению счетчика в документе
const incremBtn = document.querySelector('button[data-action="increment"]'); // доступ к кнопке +1
const decremBtn = document.querySelector('button[data-action="decrement"]'); // доступ к кнопке -1

let counterValue = 0; // текущее значение счетчика

// ============
// ВАРИАНТ 1

// const incremBtnClick = () => {
//   counterValue += 1;
//   currentValue.innerText = counterValue;

// };
// incremBtn.addEventListener("click", incremBtnClick);

// const decremBtnClick = () => {
//   counterValue -= 1;
//   currentValue.innerText = counterValue;

// };
// decremBtn.addEventListener("click", decremBtnClick);

// ============
// ВАРИАНТ 2 - более короткий, обрабатываем прямо внутри слушателя

const updateValue = () => {
  currentValue.innerText = counterValue;
};
incremBtn.addEventListener("click", () => {
  counterValue += 1;
  updateValue();
});
decremBtn.addEventListener("click", () => {
  counterValue -= 1;
  updateValue();
});

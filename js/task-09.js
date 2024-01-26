function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// получаем доступ к тексту, в котором будет указан цвет
const colorSpan = document.querySelector(".color");

// получаем доступ к нопке, меняющей цвет фона по клику
const changeColorButton = document.querySelector(".change-color");

// вешаем слушателя события на кнопку, событие "клик"
changeColorButton.addEventListener("click", () => {
  // создаем новую переменную в которой запустим функцию генерации и
  // будем хранить в ней новое сгенерированное число
  const newColor = getRandomHexColor();

  //получаем доступ к body => style of body => background color of body
  document.body.style.backgroundColor = newColor;

  // устанавливаем значение текста, которое равно сгенерированному цвету
  colorSpan.textContent = newColor;
});

// Написать скрипт который, при наборе текста в инпуте input#name-input
// (событие input), подставляет его текущее значение в span#name - output.
// Если инпут пустой, в спане должна отображаться строка "Anonymous".

const textInput = document.getElementById("name-input");
const textOutput = document.getElementById("name-output");
const defaultOutput = document.getElementById("name-output").textContent;
// сохранили дефолт значение

const defaulInputStyle = document.querySelector(".validation-input");
const validInputStyle = document.querySelector(".validation-input.valid");
const invalidInputStyle = document.querySelector(".validation-input.invalid");

//пишем функцию для слушателя события
textInput.addEventListener("input", (event) => {
  const inputValue = event.currentTarget.value;

  // проверяем, пустая строка или нет
  if (inputValue !== "") {
    textOutput.innerText = inputValue;
  } else {
    textOutput.innerText = defaultOutput;
  }
});

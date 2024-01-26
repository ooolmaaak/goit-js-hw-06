// Написать скрипт, который реагирует на изменение значения input#font-size-control
//  (событие input) и изменяет инлайн
// - стиль span#text обновляя свойство font-size.
// В результате при перетаскивании ползунка должен меняться размер текста

// получаем доступ к ползунку
const fontSizeControl = document.getElementById("font-size-control");

// получаем доступ к тексту span
const text = document.getElementById("text");

// вешаем event listener 'input' на fontSizeControl
fontSizeControl.addEventListener("input", () => {
  const newFontSize = fontSizeControl.value + "px";
  //   console.log(newFontSize);

  // обращаемся к тексту - его стилям - размеру и устанавливаем новое значение
  text.style.fontSize = newFontSize;
});

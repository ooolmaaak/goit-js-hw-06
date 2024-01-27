// // написать скрипт создания и очистки коллекции элементов (дивов)
// // в зависимости от введенного числа в div boxes должны создаваться дивы (коллекция)
// // в нужном количестве.

// // при нажатии на кнопку destroy - коллекция удаляется

// //создать функцию, которая будет принимать число от 1 до 100 и создает дивы в нужном кол-ве

// //размеры 1-го дива - 30х30 px, все остальные на 10px больше предыдущего

// //все элементы должны иметь случайный цвет фона, который генерит функция

//функция рандомайзер цвета
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
//доступ к контейнеру, который мы будем изменять
const boxes = document.getElementById("boxes");
// доступ к кнопке "создать"
const createButton = document.querySelector("[data-create]");
//доступ к кнопке "удалить"
const destroyButton = document.querySelector("[data-destroy]");
//доступ к инпуту с числами
const amountInput = document.querySelector('input[type="number"]');

createButton.addEventListener("click", createBoxes);
destroyButton.addEventListener("click", destroyBoxes);

//функция, создающая нужное кол-во <div>
function createBoxes() {
  const amount = amountInput.valueAsNumber;
  if (!amount || amount < 1 || amount > 100) {
    alert("Введите корректное значение от 1 до 100");
    return;
  }

  boxes.innerHTML = "";
  let size = 30;

  for (let i = 0; i < amount; i++) {
    setTimeout(() => {
      const newBox = document.createElement("div");
      newBox.classList.add("new-div");
      newBox.style.width = `${size}px`;
      newBox.style.height = `${size}px`;
      newBox.style.backgroundColor = getRandomHexColor();
      newBox.style.margin = "10px";
      newBox.style.display = "inline-block";
      boxes.appendChild(newBox);
      size += 10;
    }, i * 100);
  }
}

//функция, очищает содержимое
function destroyBoxes() {
  boxes.innerHTML = "";
}

const customCursor = document.getElementById("custom-cursor");

document.addEventListener("mousemove", (e) => {
  const x = e.clientX;
  const y = e.clientY;

  customCursor.style.left = `${x}px`;
  customCursor.style.top = `${y}px`;
});

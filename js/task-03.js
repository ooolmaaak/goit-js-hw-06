const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
// создать переменную для галереи
const galleryList = document.querySelector(".gallery");

// содать функцию, которая будет принимать изображение и возвращать новый
// элемент списка, в котором будет ссылка на изображение и ее альт.текст
const createGalleryItem = (image) => {
  return `<li class="gallery-item">
                <img src="${image.url}" alt="${image.alt}">
              </li>`;
};

// перебираем через max смассив объектов с картинками, присваиваем каждому элементу и объеденяем в один item

const galleryItemsHTML = images.map(createGalleryItem).join("");
galleryList.insertAdjacentHTML("beforeend", galleryItemsHTML);

// Посчитать количество категорий ul#categories, т.е li.item.
// Для кажого li.item в списке ul#categories вывести в консоль текст заголовка
// и количество элементов в категории (всех вложенных li)

const allCategories = document.querySelectorAll("li.item");
console.log("Number of categories:", allCategories.length);

allCategories.forEach((category) => {
  const categoryTitle = category.querySelector("h2").textContent;
  const itemsCount = category.querySelectorAll("ul li").length;
  console.log("Category:", categoryTitle);
  console.log("Elements:", itemsCount);
});

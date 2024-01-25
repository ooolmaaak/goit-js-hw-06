const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("ul");
console.log("list:", list);

// нужно сделать ф-цию которая будет добавлять в список новый li с именем, вытянутым
// из ingredients, ingredients нужно перебрать

const ingredientList = (name) => {
  const newListEl = document.createElement("li");
  newListEl.classList.add("item");

  const listName = document.createElement("default");
  listName.textContent = name;

  newListEl.append(listName);
  return newListEl;
};

const ingredientsNames = ingredients.map(ingredientList);
console.log(ingredientsNames);

list.append(...ingredientsNames);

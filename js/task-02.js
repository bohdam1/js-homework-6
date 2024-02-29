const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector("#ingredients")

ingredients.forEach(element => {

  const elements = document.createElement("li");
  elements.textContent = element
  elements.classList.add("item")
  
  list.append(elements);
})
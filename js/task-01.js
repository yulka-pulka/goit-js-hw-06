const categoriesList = document.getElementById("categories");
const categoriesItems = categoriesList.querySelectorAll(".item");

// Порахуємо кількість категорій
console.log(`В списку ${categoriesItems.length} категорій`);

// Пройдемось по кожному елементу li.item у списку і виведемо текст заголовку і кількість елементів в категорії
categoriesItems.forEach((item) => {
  const title = item.querySelector("h2").textContent;
  const count = item.querySelector("ul").childElementCount;

  console.log(`Категорія: ${title}, Кількість елементів: ${count}`);
});

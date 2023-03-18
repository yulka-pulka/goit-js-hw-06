const categoriesList = document.querySelector("#categories");
const categoriesItems = categoriesList.querySelectorAll(".item");

console.log(`Number of categories: ${categoriesItems.length}`);

categoriesItems.forEach(item => {
  const categoryTitle = item.querySelector("h2").textContent;
  const categoryItemsCount = item.querySelectorAll("li").length;
  console.log(`Category: ${categoryTitle}\nItems count: ${categoryItemsCount}`);
});

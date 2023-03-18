const counter = document.querySelector("#counter");
const value = document.querySelector("#value");

let counterValue = 0;

const increment = () => {
counterValue += 1;
value.textContent = counterValue;
};

const decrement = () => {
counterValue -= 1;
value.textContent = counterValue;
};

counter.addEventListener("click", (event) => {
if (event.target.dataset.action === "increment") {
increment();
} else if (event.target.dataset.action === "decrement") {
decrement();
}
});
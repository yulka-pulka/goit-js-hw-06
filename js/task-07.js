const fontSizeControl = document.getElementById("font-size-control");
const text = document.getElementById("text");

text.style.fontSize = fontSizeControl.value + "px";
fontSizeControl.value = parseInt(text.style.fontSize);

fontSizeControl.addEventListener("input", () => {
  text.style.fontSize = fontSizeControl.value + "px";
});

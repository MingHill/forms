let inputs = document.querySelectorAll("input");
inputs.forEach(el => el.addEventListener("focus", labelInput));
inputs.forEach(el => el.addEventListener("blur", blurInput));

function labelInput(event) {
  event.target.previousSibling.previousSibling.classList.add("showLabel");
  event.target.attributes.placeholder.value = "";
}
function blurInput(event) {
  event.target.attributes.placeholder.value = event.target.dataset.placeholder;
  if (!event.target.value) {
    event.target.previousSibling.previousSibling.classList.remove("showLabel");
  }
}

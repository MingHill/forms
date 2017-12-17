let inputs = document.querySelectorAll("input");
inputs.forEach(el => el.addEventListener("focus", labelInput));

function labelInput(event) {
  console.log(event.target.id);
}

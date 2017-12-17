let inputs = document.querySelectorAll("input");
inputs.forEach(el => el.addEventListener("click", labelInput));

function labelInput(event) {
  console.log(event.target.id);
}

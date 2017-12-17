document.querySelector("input").addEventListener("click", labelInput);

function labelInput(event) {
  console.log(event.target.id);
}

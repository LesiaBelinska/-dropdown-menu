const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");

const optionsList = document.querySelectorAll(".option");

selected.addEventListener("click", () => {
  optionsContainer.classList.toggle("active");
});

optionsContainer.addEventListener("click", (e) => {
  let selectedCountry = e.target.lastElementChild.textContent;
  selected.innerHTML = selectedCountry;
  optionsContainer.classList.remove("active");
  console.log(selectedCountry);
});
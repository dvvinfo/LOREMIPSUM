const selectHeader = document.querySelector(".select-header");
const selectOptions = document.querySelector(".select-options");
const menu = document.querySelector(".menu");
const openMenuBtn = document.querySelector(".burger");
const closeMenuBtn = document.querySelector(".close");
const rangeInput = document.querySelector(".form-item__range");
const numberElement = document.querySelector(".form-item__number");

const form = document.querySelector(".form");
const inputs = form.querySelectorAll(".form-item__input");
const select = form.querySelector(".custom-select");
const fileInput = form.querySelector('input[type="file"]');
const submitBtn = form.querySelector(".btn-primary");

// select
selectHeader.addEventListener("click", () => {
  selectHeader.parentNode.classList.toggle("open");
});

selectOptions.addEventListener("click", (event) => {
  if (event.target.classList.contains("option")) {
    const selectedOption = event.target.textContent;
    selectHeader.querySelector("span").textContent = selectedOption;
    selectHeader.parentNode.classList.remove("open");
  }
});

document.addEventListener("click", (event) => {
  if (!selectHeader.contains(event.target)) {
    selectHeader.parentNode.classList.remove("open");
  }
});

// menu
openMenuBtn.addEventListener("click", getOpenMenu);

closeMenuBtn.addEventListener("click", getCloseMenu);

function getOpenMenu() {
  openMenuBtn.style.display = "none";
  closeMenuBtn.style.display = "block";
  menu.classList.add("show-menu");
}

function getCloseMenu() {
  openMenuBtn.style.display = "block";
  closeMenuBtn.style.display = "none";
  menu.classList.remove("show-menu");
}

// rangeInput
rangeInput.addEventListener("input", function () {
  numberElement.textContent = this.value + ' ' + '%';
});

// Validate form
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  let formIsValid = true;

  inputs.forEach((input) => {
    if (!input.value) {
      formIsValid = false;
      input.classList.add("invalid");
    } else {
      input.classList.remove("invalid");
    }
  });

  if (
    select.querySelector(".select-title").textContent === "Выберите тип системы"
  ) {
    formIsValid = false;
    select.classList.add("invalid");
  } else {
    select.classList.remove("invalid");
  }

  if (!fileInput.value) {
    formIsValid = false;
    fileInput.parentElement.classList.add("invalid");
  } else {
    fileInput.parentElement.classList.remove("invalid");
  }

  if (formIsValid) {
    alert("Заказ успешно оформлен!");
    form.submit();
  }
});

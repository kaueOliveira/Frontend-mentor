const firstName = document.getElementById("input-first-name");
const lastName = document.getElementById("input-last-name");
const email = document.getElementById("input-email");
const message = document.getElementById("message-area");
const button = document.getElementById("button");
const form = document.getElementById("contact-form");

let isValid = true;

button.addEventListener("click", () => {
  isEmpty(firstName);
  onlyLetters(firstName);
  isEmpty(lastName);
  onlyLetters(lastName);
  isEmpty(email);
  isEmpty(message);

  if (isValid) {
    window.alert("Formulario Enviado");
  } else {
    window.alert(
      "Error: Check if the red fields are empty or if there are numbers in the name fields"
    );
  }
});

function isEmpty(input) {
  if (input.value.trim() === "") {
    input.classList.add("error");
    isValid = false;
  } else if (input.classList.contains("error")) {
    input.classList.remove("error");
    isValid = true;
  }
  return isValid;
}

function onlyLetters(input) {
  const onlyLetters = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/;
  if (!onlyLetters.test(input.value)) {
    input.classList.add("error");
    isValid = false;
  } else if (input.classList.contains("error")) {
    input.classList.remove("error");
    isValid = true;
  }
  return isValid;
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
});

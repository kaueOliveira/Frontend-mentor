const buttons = document.querySelectorAll(".button");
const buttonSubmit = document.getElementById("submit-button");

const containerMain = document.getElementById("container");
const containerTy = document.getElementById("container-thank-you");

const mensage = document.getElementById("mensage");

buttons.forEach((button) => {
  button.addEventListener("click", (evt) => {
    const clickedButton = evt.target;
    checkClasses();
    clickedButton.classList.add("clicked");
    submit(button.innerHTML)
  });
});

function checkClasses() {
  buttons.forEach((button) => {
    if (button.classList.contains("clicked")) {
      button.classList.remove("clicked");
    }
  });
}

function submit(number) {
  buttonSubmit.addEventListener("click", (evt) => {
    containerMain.style.display = "none";
    containerTy.style.display = "block";

    mensage.textContent = ` You selected ${number} out of 5`;
  });
}
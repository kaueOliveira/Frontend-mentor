const buttons = document.querySelectorAll(".button");

buttons.forEach((button) => {
  button.addEventListener("click", (evt) => {
    const clickedButton = evt.target;
    
    checkSrc();

    clickedButton.src = "assets/images/icon-minus.svg";
    clickedButton.parentNode.parentNode.children[1].style.overflow = "auto";
    clickedButton.parentNode.parentNode.children[1].style.height = "9.5rem";
  });
});

function checkSrc() {
  buttons.forEach((button) => {
    const imageSrc = button.getAttribute("src");
    if (imageSrc == "assets/images/icon-minus.svg") {
      button.src = "assets/images/icon-plus.svg";
      button.parentNode.parentNode.children[1].style.overflow = "hidden";
      button.parentNode.parentNode.children[1].style.height = "0rem";
    }
  });
}
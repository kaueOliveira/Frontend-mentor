const buttons = document.querySelectorAll(".button");
const hiddenDivs = document.querySelectorAll(".hidden-div");

buttons.forEach((button, btnIndex) => {
  button.addEventListener("click", () => {
    hiddenDivs.forEach((div, divIndex) => {
      const divButton = buttons[divIndex]; // 1-) 

      if (btnIndex === divIndex) { // 2-) 
        const isOpen = div.style.height && div.style.height !== "0rem";

        if (isOpen) {
          div.style.height = "0rem";
          divButton.src = "assets/images/icon-plus.svg";
        } else {
          div.style.height = div.scrollHeight + "px";
          divButton.src = "assets/images/icon-minus.svg";
        }
      } else { // 3-)
        div.style.height = "0rem";
        divButton.src = "assets/images/icon-plus.svg";
      }
    });
  });
});


//botão que corresponde a div !

//A div atual é a que o usuário clicou ?

//Se for qualquer outra div (não a clicada), Fecha. Isso é o que garante que apenas uma resposta fique aberta por vez.
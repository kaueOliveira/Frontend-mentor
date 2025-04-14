document.addEventListener("DOMContentLoaded", () => {
    const inputs = Array.from(
      document.querySelectorAll("input:not([type='submit'])") // Seleciona apenas inputs, excluindo botões
    );
  
    // Estilização do foco para acessibilidade
    inputs.forEach(input => {
      input.addEventListener("focus", () => {
        input.style.outline = "2px solid hsl(249, 99%, 64%)"; // Destaque no elemento ativo
      });
      input.addEventListener("blur", () => {
        input.style.outline = "none";
      });
    });
  
    // Navegação personalizada com teclado
    inputs.forEach((input, index) => {
      input.addEventListener("keydown", (event) => {
        // Navegar para o próximo campo com Enter
        if (event.key === "Enter") {
          event.preventDefault();
          if (index < inputs.length - 1) {
            inputs[index + 1].focus();
          }
        }
  
        // Navegação reversa com Shift + Tab
        if (event.key === "Tab" && event.shiftKey && index > 0) {
          event.preventDefault();
          inputs[index - 1].focus();
        }
      });
    });
  
    // Atualizar informações do cartão em tempo real
//     document.getElementById("i_name").addEventListener("input", (e) => {
//       const cardName = document.querySelector("#card_front #info p:first-of-type");
//       cardName.textContent = e.target.value || "JANE APPLESEED";
//     });
  
//     document.getElementById("i_number").addEventListener("input", (e) => {
//       const cardNumber = document.querySelector("#card_front p:nth-of-type(1)");
//       cardNumber.textContent = e.target.value || "0000 0000 0000 0000";
//     });
  
//     document.getElementById("i_month").addEventListener("input", (e) => {
//       const expDate = document.querySelector("#card_front #info p:nth-of-type(2)");
//       const year = document.getElementById("i_year").value || "00";
//       expDate.textContent = `${e.target.value || "00"}/${year}`;
//     });
  
//     document.getElementById("i_year").addEventListener("input", (e) => {
//       const expDate = document.querySelector("#card_front #info p:nth-of-type(2)");
//       const month = document.getElementById("i_month").value || "00";
//       expDate.textContent = `${month}/${e.target.value || "00"}`;
//     });
  
//     document.getElementById("i_cvc").addEventListener("input", (e) => {
//       const cvcField = document.querySelector("#card_back p");
//       cvcField.textContent = e.target.value || "000";
//     });
  });
  
"use strict";
const form = document.querySelector(".form");
const main = document.querySelector("main");
const card_f = document.getElementById("card_front");
const card_b = document.getElementById("card_back");
const iName = document.getElementById("i_name");
const iNumber = document.getElementById("i_number");
const iMonth = document.getElementById("i_month");
const iYear = document.getElementById("i_year");
const iCvc = document.getElementById("i_cvc");
const button = document.getElementById("btn");
button.addEventListener("click", (evt) => {
    if (validate()) {
        if (card_f.children && card_b.children && card_f.children[2].firstElementChild && card_f.children[2].lastElementChild) {
            card_f.children[1].innerHTML = iNumber.value;
            card_f.children[2].firstElementChild.innerHTML = iName.value.toUpperCase();
            card_f.children[2].lastElementChild.innerHTML = iMonth.value + "/" + iYear.value;
            card_b.children[0].innerHTML = iCvc.value;
            complete_state();
        }
    }
});
function validate() {
    const onlyLetters = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/;
    let isValid = true;
    if (iName.value.trim() && onlyLetters.test(iName.value)) {
        removeError(iName);
    }
    else {
        addError(iName);
        isValid = false;
        const msg_error = addError(iName);
        if (!iName.value || !iName.value.trim()) {
            msg_error.innerHTML = "can't be blank";
        }
        else {
            msg_error.innerHTML = "only letters";
        }
    }
    const onlyNumbers = /^[0-9\s]*$/;
    if (iNumber.value.trim().length == 19 && onlyNumbers.test(iNumber.value)) {
        removeError(iNumber);
    }
    else {
        addError(iNumber);
        isValid = false;
        const msg_error = addError(iNumber);
        if (!iNumber.value || !iNumber.value.trim()) {
            msg_error.innerHTML = "can't be blank";
        }
        else if (iNumber.value.length < 19) {
            msg_error.innerHTML = "There must be 16 numbers";
        }
        else {
            msg_error.innerHTML = "only numbers";
        }
    }
    let n_iMonth = parseInt(iMonth.value);
    if (n_iMonth <= 12 && iMonth.value.trim().length === 2 && onlyNumbers.test(iMonth.value)) {
        removeError(iMonth);
    }
    else {
        addError(iMonth);
        isValid = false;
        const msg_error = addError(iMonth);
        if (iMonth.value == "" || !iMonth.value.trim()) {
            msg_error.innerHTML = "Can't be blank";
        }
        else if (!onlyNumbers.test(iMonth.value)) {
            msg_error.innerHTML = "Only numbers";
        }
        else if (n_iMonth > 12) {
            msg_error.innerHTML = "Bigger than 12";
        }
        else {
            msg_error.innerHTML = "invalid format";
        }
    }
    if (iYear.value.trim().length === 2 && onlyNumbers.test(iYear.value)) {
        removeError(iYear);
    }
    else {
        addError(iYear);
        isValid = false;
        const msg_error = addError(iYear);
        if (iYear.value == "" || !iYear.value.trim()) {
            msg_error.innerHTML = "Can't be blank";
        }
        else if (!onlyNumbers.test(iYear.value)) {
            msg_error.innerHTML = "Only numbers";
        }
        else {
            msg_error.innerHTML = "invalid format";
        }
    }
    if (iCvc.value.trim().length === 3 && onlyNumbers.test(iCvc.value)) {
        removeError(iCvc);
    }
    else {
        addError(iCvc);
        isValid = false;
        const msg_error = addError(iCvc);
        if (iCvc.value == "" || !iCvc.value.trim()) {
            msg_error.innerHTML = "Can't be blank";
        }
        else {
            msg_error.innerHTML = "Only numbers";
        }
    }
    return isValid;
}
function removeError(campusForm) {
    var _a;
    let hasError = campusForm.classList.contains("error");
    if (hasError) {
        const parent = campusForm.parentNode;
        if (parent.querySelector(".msg_e"))
            (_a = parent.querySelector(".msg_e")) === null || _a === void 0 ? void 0 : _a.remove();
        campusForm.classList.remove("error");
    }
}
// function createsErrorMessage(campusForm: HTMLInputElement): void {
//   let hasError = campusForm.classList.contains("error");
//   if (!hasError) {
//     //verifica se n tem erro
//     const msg_error = document.createElement("p");
//     msg_error.setAttribute("class", "msg_e");
//     const parent = campusForm.parentNode as HTMLDivElement;
//     parent.appendChild(msg_error);
//   }
// }
function createsErrorMessage(campusForm) {
    const parent = campusForm.parentNode;
    // Remove msg antiga, se houver
    const existing = parent.querySelector(".msg_e");
    if (existing)
        existing.remove();
    const msg_error = document.createElement("p");
    msg_error.setAttribute("class", "msg_e");
    parent.appendChild(msg_error);
    return msg_error;
}
// function addError(campusForm: HTMLInputElement) {
//   createsErrorMessage(campusForm);
//   campusForm.classList.add("error");
//   //isValid = false
//   if (campusForm.parentNode && campusForm.parentNode.querySelector(".msg_e")) {
//     const msg_error = campusForm.parentNode.querySelector(
//       ".msg_e"
//     ) as HTMLParagraphElement;
//     return msg_error;
//   }
// }
function addError(campusForm) {
    const msg_error = createsErrorMessage(campusForm);
    campusForm.classList.add("error");
    return msg_error;
}
function complete_state() {
    form.remove();
    button.remove();
    //Mensagem de Agradecimento
    const div_complete = document.createElement("div");
    div_complete.setAttribute("id", "comp_state");
    const img_complete = document.createElement("img");
    img_complete.setAttribute("src", "images/icon-complete.svg");
    const h1_complete = document.createElement("h1");
    h1_complete.innerHTML = "THANK YOU!";
    const p_complete = document.createElement("p");
    p_complete.innerHTML = "We've added your card details";
    const new_button = document.createElement("button");
    new_button.setAttribute("id", "btn");
    new_button.innerHTML = "Confirm";
    div_complete.appendChild(img_complete);
    div_complete.appendChild(h1_complete);
    div_complete.appendChild(p_complete);
    main.append(div_complete);
    // main.append(new_button)
}
// Card number com problema -> trim()
// erro no month! -> erro no HTML
// trocar botao por submit e usar o preventDefault().
// let n_iMonth = parseInt(iMonth.value);
// if (n_iMonth <= 12 && iMonth.value.length === 2 && onlyNumbers.test(iMonth.value)) {
//   removeError(iMonth);
// } else {
//   addError(iMonth);
//   const msg_error = addError(iMonth);
//   if (iMonth.value == "") {
//     msg_error.innerHTML = "Can't be blank";
//   } else if (!onlyNumbers.test(iMonth.value)) {
//     msg_error.innerHTML = "Only numbers";
//   } else {
//     msg_error.innerHTML = "Bigger than 12"
//   }
// }

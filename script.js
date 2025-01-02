const form = document.getElementById("form")
const main = document.getElementById("main")
const name = document.getElementById("i_name")
const number = document.getElementById("i_number")
const month = document.getElementById("i_month")
const year = document.getElementById("i_year")
const cvc = document.getElementById("i_cvc")
const button = document.getElementById("btn")

const card_f = document.getElementById("card_front")
const card_b = document.getElementById("card_back")

button.addEventListener("click", (evt) => {
    
    if(validar()) {
        card_f.children[1].innerHTML = number.value
        card_f.children[2].firstElementChild.innerHTML = name.value.toUpperCase()
        card_f.children[2].lastElementChild.innerHTML = month.value + "/" + year.value
        card_b.children[0].innerHTML = cvc.value

        complete_state()
    }
})

function validar () {
    let isValid = true
    //NAME !
    if(/^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/.test(name.value) && name.value !== "") {
        if(name.parentNode.children[1] !== undefined) {
            name.parentNode.children[1].remove()
            name.classList.remove("error")
        }
    } else {
        name.classList.add("error")
        isValid = false
        if (name.parentNode.querySelector(".msg_e") == null) { 
            //Apenas se n tiver erros ele cria.
            const msg_error = document.createElement("p");
            msg_error.setAttribute("class", "msg_e");
            name.parentNode.appendChild(msg_error);
        }

        const msg_error = name.parentNode.querySelector(".msg_e");

        if (name.value == "") {
            msg_error.innerHTML = "can't be blank";
        } else {
            msg_error.innerHTML = "only letters";
        }
    }
    //NUMBER !
    if (/^[0-9\s]*$/.test(number.value) && number.value.length == 19) {
        if(number.parentNode.children[1] !== undefined){
            number.parentNode.children[1].remove()
            number.classList.remove("error")
        }
    } else {
        number.classList.add("error")
        isValid = false
        if (number.parentNode.querySelector(".msg_e") == null) { 
            //Apenas se n tiver erros ele cria.
            const msg_error = document.createElement("p");
            msg_error.setAttribute("class", "msg_e");
            number.parentNode.appendChild(msg_error);
        }

        const msg_error = number.parentNode.querySelector(".msg_e");

        if (number.value.length < 19) {
            msg_error.innerHTML = "There must be 16 numbers"
        } else if (number.value == "") {
            msg_error.innerHTML = "can't be blank";
        } else {
            msg_error.innerHTML = "only numbers";
        }
    }
    //MES
    if(/^[0-9]+$/.test(month.value) && month.value.length === 2 && month.value <= 12){
        if(month.parentNode.children[1] !== undefined){
            month.parentNode.children[1].remove()
            month.classList.remove("error")
        }
    } else {
        month.classList.add("error")
        isValid = false
        if (month.parentNode.querySelector(".msg_e") == null) { 
            //Apenas se n tiver erros ele cria.
            const msg_error = document.createElement("p");
            msg_error.setAttribute("class", "msg_e");
            month.parentNode.appendChild(msg_error);
        }

        const msg_error = month.parentNode.querySelector(".msg_e");

        if (month.value == "") {
            msg_error.innerHTML = "Blank";
        } else {
            msg_error.innerHTML = "Only numbers";
        }
    }
    //ANO
    if(/^[0-9]+$/.test(year.value) && year.value.length === 2){
        if(year.parentNode.children[1] !== undefined){
            year.parentNode.children[1].remove()
            year.classList.remove("error")
        }
    } else {
        year.classList.add("error")
        isValid = false
        if (year.parentNode.querySelector(".msg_e") == null) { 
            //Apenas se n tiver erros ele cria.
            const msg_error = document.createElement("p");
            msg_error.setAttribute("class", "msg_e");
            year.parentNode.appendChild(msg_error);
        }

        const msg_error = year.parentNode.querySelector(".msg_e");

        if (year.value == "") {
            msg_error.innerHTML = "Blank";
        } else {
            msg_error.innerHTML = "Only numbers";
        }
    }
    //CVC
    if(/^[0-9]+$/.test(cvc.value) && cvc.value.length === 3){
        if(cvc.parentNode.children[1] !== undefined){
            cvc.parentNode.children[1].remove()
            cvc.classList.remove("error")
        }
    } else {
        cvc.classList.add("error")
        isValid = false
        if (cvc.parentNode.querySelector(".msg_e") == null) { 
            //Apenas se n tiver erros ele cria.
            const msg_error = document.createElement("p");
            msg_error.setAttribute("class", "msg_e");
            cvc.parentNode.appendChild(msg_error);
        }

        const msg_error = cvc.parentNode.querySelector(".msg_e");

        if (cvc.value == "") {
            msg_error.innerHTML = "Blank";
        } else {
            msg_error.innerHTML = "Only numbers";
        }
    }
    return isValid
}

function complete_state () {
    form.remove()
        button.remove()
        //Mensagem de Agradecimento
        const div_complete = document.createElement("div")
        div_complete.setAttribute("id", "comp_state")

        const img_complete = document.createElement("img")
        img_complete.setAttribute("src", "images/icon-complete.svg")

        const h1_complete = document.createElement("h1")
        h1_complete.innerHTML = "THANK YOU!"

        const p_complete = document.createElement("p")
        p_complete.innerHTML = "We've added your card details"

        const new_button = document.createElement("button")
        new_button.setAttribute("id", "btn")
        new_button.innerHTML = "Confirm"

        div_complete.appendChild(img_complete)
        div_complete.appendChild(h1_complete)
        div_complete.appendChild(p_complete)

        main.append(div_complete)
        main.append(new_button)
}

//mensagem de thank you
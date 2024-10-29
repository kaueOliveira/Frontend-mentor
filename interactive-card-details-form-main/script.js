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
        card_f.children[2].firstElementChild.innerHTML = name.value
        card_f.children[2].lastElementChild.innerHTML = month.value + "/" + year.value
        card_b.children[0].innerHTML = cvc.value
    }
})

function validar() {
    let isValid = true

    if(/^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/.test(name.value) && name.value !== "") {
        name.parentNode.children[1].remove()
        name.classList.remove("error")
    } else {
        name.classList.add("error")
        isValid = false
        if(name.parentNode.children.length == 1){
            const msg_error = document.createElement("p")
            msg_error.setAttribute("class", "msg_e")
            if (name.value == "") {
                msg_error.innerHTML = "can't be blank"
            } else {
                msg_error.innerHTML = "only letters"
            }
            name.parentNode.appendChild(msg_error)
        }
    }

    if (/^[0-9\s]*$/.test(number.value) && number.value.length == 19) {
        number.parentNode.children[1].remove()
        number.classList.remove("error")
    } else {
        number.classList.add("error")
        isValid = false
        if(number.parentNode.children.length == 1){
            const msg_error = document.createElement("p")
            msg_error.setAttribute("class", "msg_e")
            if (number.length < 19) {
                console.log(number.value.length)
                msg_error.innerHTML = "There must be 19 numbers"
            } else {
                msg_error.innerHTML = "only numbers"
            }
            number.parentNode.appendChild(msg_error)
        }
    }

    if(/^[0-9]+$/.test(month.value) && month.value.length === 2 && month.value <= 12){
        month.classList.remove("error")
    } else {
        month.classList.add("error")
        isValid = false
        if (month.parentNode.children.length < 5 ) {
            const msg_error = document.createElement("p")
            msg_error.setAttribute("class", "msg_e")
            msg_error.style.display = "inline"
            if (month.value > 12) {
                msg_error.innerHTML = "must be less than 12"
            }else if (month.value.length == "") {
                msg_error.innerHTML = "can't be blank"
            } else {
                msg_error.innerHTML = "only numbers"
            }
            month.parentNode.append(msg_error)
        }
    }

    if(/^[0-9]+$/.test(year.value) && year.value.length === 2){
        year.classList.remove("error")
    } else {
        year.classList.add("error")
        isValid = false
        if (year.parentNode.children.length < 5) {
            const msg_error = document.createElement("p")
            msg_error.setAttribute("class", "msg_e")
            msg_error.style.display = "inline"
            if (year.value.length == "") {
                msg_error.innerHTML = "can't be blank"
            } else {
                msg_error.innerHTML = "only numbers"
            }
            year.parentNode.append(msg_error)
        }
    }

    if(/^[0-9]+$/.test(cvc.value) && cvc.value.length === 3){
        cvc.parentNode.children[2].remove()
        cvc.classList.remove("error")
    } else {
        cvc.classList.add("error")
        isValid = false
        if (cvc.parentNode.children.length == 2) {
            const msg_error = document.createElement("p")
            msg_error.setAttribute("class", "msg_e")
            msg_error.style.paddingTop = "7px" 
            msg_error.innerHTML = "only numbers"
            cvc.parentNode.append(msg_error)
        }
    }
    return isValid
} 
//console.log(cvc.parentNode.children.length)


//mensagens no input YY/MM




//navegação com teclado 
//mensagem de thank you
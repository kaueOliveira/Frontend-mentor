const input_day = document.getElementById("input_day")
const input_month = document.getElementById("input_month")
const input_year = document.getElementById("input_year")
const buttom = document.getElementById("image")
const result_day = document.getElementById("result_day") 
const result_month = document.getElementById("result_month")
const result_year = document.getElementById("result_year")

buttom.addEventListener("click", (evt) => {

    const ano_nascimento = parseInt(input_year.value, 10);
    const mes_nascimento = parseInt(input_month.value, 10) - 1;
    const dia_nascimento = parseInt(input_day.value, 10);

    const data = new Date ()
    const ano_atual = data.getFullYear()
    const mes_atual = data.getMonth()
    const dia_atual = data.getDate()

    let year = ano_atual - ano_nascimento 

    if(mes_nascimento > mes_atual || mes_nascimento == mes_atual) {
        year --
    }

    if(input_year.value > ano_atual || input_year.value == 0) {
        input_year.classList.add("special_date")
        input_year.previousElementSibling.previousElementSibling.classList.add("special_date2")
        
    } else if (year < 10){
        result_year.innerHTML = `<span>0${year}</span>  years`
    } else {
         result_year.innerHTML = `<span>${year}</span>  years`
    }

    //MÊS

    let month = 0

    if(mes_atual >= mes_nascimento) {
         month = mes_atual - mes_nascimento
    } else {
         month =  mes_atual - mes_nascimento  + 12 
    }

    if (input_month.value > 12 || input_month.value == 0) {
        input_month.classList.add("special_date")
        input_month.previousElementSibling.previousElementSibling.classList.add("special_date2") 
    } else if (month < 10) {
        result_month.innerHTML = `<span>0${month}</span>  months`
    } else {
        result_month.innerHTML = `<span>${month}</span>  months`
    }


    //DIA
    
    if (dia_atual >= dia_nascimento) {
        let day = dia_atual - dia_nascimento

        if (day < 10) {
            result_day.innerHTML = `<span>0${day}</span>  days`
        } else {
            result_day.innerHTML = `<span>${day}</span>  days`
        }
    } else if (dia_atual < dia_nascimento) {
        let day = dia_atual - dia_nascimento + 31
        if (day < 10) {
            result_day.innerHTML = `<span>0${day}</span>  days`
        } else {
            result_day.innerHTML = `<span>${day}</span>  days`
        }
    }


     if(input_day.value > 31 || input_day.value == 0) {
         input_day.classList.add("special_date")
         input_day.previousElementSibling.previousElementSibling.classList.add("special_date2") 
         result_day.innerHTML = `<span>- -</span> days`   
     }
})

//Add navegação

function navigateInputs(event) {
    const inputs = [
        document.getElementById('input_day'),
        document.getElementById('input_month'),
        document.getElementById('input_year')
    ];
    const focusedElement = document.activeElement;
    let index = inputs.indexOf(focusedElement);

    if (event.key === 'ArrowRight') {
        event.preventDefault(); // Impede o comportamento padrão da tecla
        index = (index + 1) % inputs.length; // Move para o próximo input, volta ao primeiro se necessário
        inputs[index].focus();
    } else if (event.key === 'ArrowLeft') {
        event.preventDefault(); // Impede o comportamento padrão da tecla
        index = (index - 1 + inputs.length) % inputs.length; // Move para o input anterior, volta ao último se necessário
        inputs[index].focus();
    }
}

// Adiciona o evento de pressionar tecla para todos os inputs
document.querySelectorAll('input').forEach(input => {
    input.addEventListener('keydown', navigateInputs);
});

// Define o foco inicial no input_day
document.getElementById('input_day').focus();
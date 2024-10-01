const bnt = document.getElementById("btn")
const nome = document.getElementById("iname")
const last = document.getElementById("ilast")
const email = document.getElementById("iemail")
const general = document.getElementById("igeneral")
const support = document.getElementById("isupport")
const caixa = document.getElementById("ibox")


bnt.addEventListener("click", (evt) => { 
    let i = 0
        if (nome.value !== "") {
            i = i + 1
        } 

        if  (last.value !== "") {
            i = i + 1
        } 
    
        if (email.value !== "") {
            i = i + 1
        } 
    
        if (general.checked || support.checked == true) {
            i = i + 1
        } 

        if (caixa.checked == true) {
            i = i + 1
        } 

        if (i < 5) {
            window.alert('Preencha os campo solicitados ! ')
        } else {
            window.alert('Seus dados foram enviados com sucesso ! ')
        }
        
})
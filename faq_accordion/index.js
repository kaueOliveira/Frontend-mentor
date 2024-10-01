const button = document.querySelectorAll(".btn")
let arr_el = []

button.forEach(btn => {
    btn.addEventListener("click", (evt)=>{
        const elemento = evt.target;
        const div_pai = evt.target.parentNode.parentNode
        const id_btn = evt.target.id
        const isITminus = elemento.src.includes('icon-minus.svg');
        console.log(arr_el)
        
        if(isITminus) {
            elemento.src = 'assets/images/icon-plus.svg'
            elemento.classList = 'btn_minus'
            elemento.parentNode.nextElementSibling.remove() // Tentar o Mesmo esquema para add
        }

        if(!isITminus) {
            elemento.src = 'assets/images/icon-minus.svg'
            elemento.classList = 'btn'

            let n = parseInt(id_btn, 10)

            let paragrafo = document.createElement("p")
            let div = document.createElement("div")

            switch (n) {
                case 1:
                    paragrafo.innerHTML = "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building."

                    div.setAttribute("class", "add")
                    div.appendChild(paragrafo)

                    div_pai.appendChild(div)
                    break;
                case 2:
                    paragrafo.innerHTML = "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels."

                    div.setAttribute("class", "add")
                    div.appendChild(paragrafo)

                    div_pai.appendChild(div)
                    break;
                case 3:
                    paragrafo.innerHTML = "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!"
    
                    div.setAttribute("class", "add")
                    div.appendChild(paragrafo)
    
                    div_pai.appendChild(div)
                    break;    
                case 4:
                    paragrafo.innerHTML = "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members."

                    div.setAttribute("class", "add")
                    div.appendChild(paragrafo)
    
                    div_pai.appendChild(div)
                    break;    
               
                default:
                          
            }
        }
    })
    
})


//colocar o style via js para a div nao colar no alto do site

// Vou enviar um código, quero que me explique pq ele não funciona, mas não corrija ele e nem dê sugestões de mudanças.
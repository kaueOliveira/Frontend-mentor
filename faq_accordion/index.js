const botao = document.querySelectorAll(".btn")

botao.forEach(btn => {
    btn.addEventListener("click", (evt)=>{
        const elemento = evt.target;
        const div_pai = evt.target.parentNode.parentNode
        const contentDiv = div_pai.querySelector('.div_inativa');
        const isITminus = elemento.src.includes('icon-minus.svg');

        function Ocultar () {
            elemento.src = 'assets/images/icon-plus.svg'
            elemento.classList = 'btn_minus'
            contentDiv.style.height = '0'; // Oculta o conteúdo
            contentDiv.style.overflow = 'hidden';
        }

        let ativo = document.getElementById("ativo")
        
        function remover () {
            let img = ativo.parentNode.children[0].children[1]
            img.src = 'assets/images/icon-plus.svg'
            ativo.style.height = '0'; 
            ativo.style.overflow = 'hidden';
            ativo.removeAttribute('id')
        }
        
        if(isITminus) {
            Ocultar()
        }

        if(!isITminus) {
            if (ativo == null) {
                elemento.src = 'assets/images/icon-minus.svg'
                elemento.classList = 'btn'

                div_pai.children[1].style.height = "auto" 
                div_pai.children[1].style.overflow = "visible" 
                div_pai.children[1].id = "ativo"
            } else {
                remover()
                elemento.src = 'assets/images/icon-minus.svg'
                elemento.classList = 'btn'

                div_pai.children[1].style.height = "auto" 
                div_pai.children[1].style.overflow = "visible" 
                div_pai.children[1].id = "ativo"
            }
        }
    })
})

//Adicionar "animação"
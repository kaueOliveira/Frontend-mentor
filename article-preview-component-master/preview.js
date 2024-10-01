const buttom = document.getElementById("img_share")
const baloon = document.querySelector(".balao")

buttom.addEventListener("click", (evt)=>{
   let active = baloon.id.includes("ativo")
   console.log(active)
    
    if (active) {
        baloon.id = "inactive"
        baloon.style.height = "0"
        baloon.style.overflow = "hidden"

        buttom.style.backgroundColor = "white"
    } 

    if (!active) {
        
        baloon.id = "ativo"
        baloon.style.height = "auto"
        baloon.style.overflow = "visible"

        buttom.style.backgroundColor = " hsl(217, 19%, 35%)"
    }

    
})
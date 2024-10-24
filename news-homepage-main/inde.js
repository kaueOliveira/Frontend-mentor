const btn_e = document.getElementById("menu")
const btn_close = document.getElementById("menu_close")
const nav = document.getElementById("nav")

window.addEventListener("load", (evt)=>{
    if (window.innerWidth > "1199") {
        nav.childNodes[1].remove()
        nav.parentNode.childNodes[3].remove()
    }
})    

window.addEventListener("resize", (evt)=>{
    location.reload();
    if (window.innerWidth > "1199") {
        nav.childNodes[1].remove()
        nav.parentNode.childNodes[3].remove()
    } 
})

btn_e.addEventListener("click", (evt)=>{
    nav.style.left = "48%"
    nav.style.width = "50vw"
    nav.style.overflow = "visible"
    nav.style.border = "1px solid var(--Dark-grayish-blue)"
})

btn_close.addEventListener("click", (evt)=>{
    nav.style.left = "100%"
    nav.style.width = "0px"
    nav.style.overflow = "hidden"
    nav.style.border = "none"
})


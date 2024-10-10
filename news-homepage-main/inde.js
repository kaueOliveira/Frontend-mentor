const btn_e = document.getElementById("menu")
const btn_close = document.getElementById("menu_close")
const nav = document.getElementById("nav")

window.addEventListener("load", (evt)=>{
    if (window.innerWidth > "500") {
        nav.childNodes[1].remove()
        nav.parentNode.childNodes[3].remove()
    } 
})

btn_e.addEventListener("click", (evt)=>{
    nav.style.left = "47%"
    nav.style.width = "250px"
    nav.style.overflow = "visible"
    nav.style.border = "1px solid var(--Dark-grayish-blue)"
})

btn_close.addEventListener("click", (evt)=>{
    nav.style.left = "100%"
    nav.style.width = "0px"
    nav.style.overflow = "hidden"
    nav.style.border = "none"

})
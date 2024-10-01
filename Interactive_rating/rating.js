const btn = [...document.querySelectorAll(".btn")]
const msg = document.getElementById("msg")
const enviar = document.getElementById("enviar")
let elo

const tirarSelecao = () => {
    const cursoSelecionados = [...document.querySelectorAll(".selecionado")]
    cursoSelecionados.map((el) => {
        el.classList.remove("selecionado")
    })
}

btn.map((el) => {
    el.addEventListener("click", (evt) => {
        tirarSelecao()
        const el = evt.target
        el.classList.toggle("selecionado")

    })
})

btn.map((el) => {
    el.addEventListener("mouseover", (evt) => {
        const el = evt.target
        el.classList.toggle("hoo")
    })
})

btn.map((el) => {
    el.addEventListener("mouseout", (evt) => {
        const el = evt.target
        el.classList.remove("hoo")
    })
})


enviar.addEventListener("click", function() {
    btn.forEach((el, i) => {
        i ++
        if(el.classList.contains("selecionado")) {
            window.location.href = `pagina${i}/form${i}.html`;
        }
    });
});

// let c
// enviar.addEventListener("click", function() {
//     btn.map((el, i) => {
//         c++
//         if(el.classList.value == "selecionado") {
//             window.location.href = `pagina${i}/form${i}.html`
//         }
//     })
// })

// let elo;

// function sla() {
//     btn.map((el) => {
//         el.addEventListener("click", (evt) => {
//              elo = evt.target.innerHTML
//         })
//     })
// }

// console.log(elo)
// msg.innerHTML = `<p>You selected ${elo} out of 5</p>`

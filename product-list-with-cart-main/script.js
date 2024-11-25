const btn = document.querySelectorAll(".btn_add");

btn.forEach( b => {
    let quantity = 0
    b.addEventListener("click", (evt) => {
        const img_product = b.parentNode.children[0] // img do carrinho
        
        const img_cart = document.createElement("img");
        img_cart.setAttribute("src", "assets/images/icon-add-to-cart.svg");
        img_cart.setAttribute("alt", "add to cart icon");
        
        if (b.classList.value === "btn_add") {
            quantity ++

            const img_decrement = document.createElement("img"); // Botão de remover 1
            img_decrement.setAttribute("src", "assets/images/icon-decrement-quantity.svg");
            img_decrement.setAttribute("alt", "decrement button");
            img_decrement.setAttribute("class", "btn_quant");
    
            const img_increment = document.createElement("img"); // Botão de adicionar + 1
            img_increment.setAttribute("src", "assets/images/icon-increment-quantity.svg");
            img_increment.setAttribute("alt", "increment button");
            img_increment.setAttribute("class", "btn_quant");

            b.classList.remove("btn_add");
            b.classList.add("btn_order");
            b.innerHTML = "";
            b.appendChild(img_decrement);
            b.append(quantity);
            b.appendChild(img_increment);

            img_product.classList.add("selected") // Borda ao redor da imagem

            img_decrement.addEventListener("click", () => {
                quantity--
                b.childNodes[1].nodeValue = quantity
            });

            img_increment.addEventListener("click", () => {
                quantity++
                b.childNodes[1].nodeValue = quantity
            });
        } 

        if (quantity === 0) {
            b.classList.remove("btn_order");
            b.classList.add("btn_add");
            b.innerHTML = " ";
            b.appendChild(img_cart);
            b.append(" Add to Cart");

            img_product.classList.remove("selected")
        };
    })
})     
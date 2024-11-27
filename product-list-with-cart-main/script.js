const btn = document.querySelectorAll(".btn_add");
//const main = document.getElementsByTagName("main")[0]
const section_empty = document.getElementById("empty")
const msg_quantity = section_empty.getElementsByTagName("h1")[0]
console.log(msg_quantity)

const items = [
    {name: "Waffle with Berries", price: 6.50},
    {name: "Vanilla Bean Crème Brûlée", price: 7.00},
    {name: "Macaron Mix of Five", price: 8.00},
    {name: "Classic Tiramisu", price: 5.50},
    {name: "Pistachio Baklava", price: 4.00},
    {name: "Lemon Meringue Pie", price: 5.00},
    {name: "Red Velvet Cake", price: 4.50},
    {name: "Salted Caramel Brownie", price: 4.50},
    {name: "Vanilla Panna Cotta", price: 6.50},
]
let has_msg_empty = true
let quantidade_items_carrinho = 0

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

            // Adicionando no Carrinho
                let nome_item_escolhido = b.parentNode.children[2].innerHTML
                
                let preco_item_escolhido =  b.parentNode.children[3].innerHTML

                items.forEach(i => {

                if(i.name === nome_item_escolhido) {
                    nome_item_escolhido = i.name
                    preco_item_escolhido = i.price
                }

                })

                // Remove o carrinho vazio
                if (has_msg_empty) {
                    section_empty.children[1].remove(), section_empty.children[1].remove()
                    has_msg_empty = false
                }
            
                // Cria a seção do item
                const itemSection = document.createElement("section");
                itemSection.className = "kaue";
            
                const itemHeader = document.createElement("div");
            
                const itemTitle = document.createElement("h1");
                itemTitle.textContent = nome_item_escolhido;
            
                const removeIcon = document.createElement("img");
                removeIcon.src = "assets/images/icon-remove-item.svg";
                removeIcon.alt = "";
                removeIcon.id = "remove";
            
                itemHeader.appendChild(itemTitle);
                itemHeader.appendChild(removeIcon);
            
                const itemDetails = document.createElement("div");
            
                const itemQuantity = document.createElement("p");
                itemQuantity.id = "amount"
                itemQuantity.textContent = quantity + "x";
            
                const itemPrice = document.createElement("p");
                itemPrice.id = "price"
                itemPrice.textContent = "@ $"+preco_item_escolhido;
            
                const itemTotal = document.createElement("p");
                itemTotal.textContent = "$" + quantity * preco_item_escolhido;
                itemTotal.id = "total"
            
                itemDetails.appendChild(itemQuantity);
                itemDetails.appendChild(itemPrice);
                itemDetails.appendChild(itemTotal);
            
                itemSection.appendChild(itemHeader);
                itemSection.appendChild(itemDetails);
        
                section_empty.appendChild(itemSection);
                quantidade_items_carrinho ++
                msg_quantity.innerHTML = `Your Cart (${quantidade_items_carrinho})`
                
            //Removendo e Adicionando itens
            img_decrement.addEventListener("click", () => {
                quantity--
                b.childNodes[1].nodeValue = quantity
                itemQuantity.textContent = quantity + "x";
                itemTotal.textContent = "$" + quantity * preco_item_escolhido;
                if (quantity === 0) {
                    itemSection.remove()
                }
            });

            img_increment.addEventListener("click", () => {
                quantity++
                b.childNodes[1].nodeValue = quantity
                itemQuantity.textContent = quantity + "x";
                itemTotal.textContent = "$" + quantity * preco_item_escolhido;
            });
        } 

        if (quantity === 0) { //Voltando o botão ao padrão. 
            b.classList.remove("btn_order");
            b.classList.add("btn_add");
            b.innerHTML = " ";
            b.appendChild(img_cart);
            b.append(" Add to Cart");

            img_product.classList.remove("selected")
            quantidade_items_carrinho--
            msg_quantity.innerHTML = `Your Cart (${quantidade_items_carrinho})`
        };

        if (quantidade_items_carrinho === 0) {
            cart_empty ()
            has_msg_empty = true
        }
    })
}) 

// Mudar nome das variaveis p/ inglês
//verificar classes e ids do html (nome tem que fazer sentido)

function cart_empty () {

    const div_cart_empty = document.createElement("div")
    div_cart_empty.className = "cart_empty"

    const p_empty = document.createElement("p")
    p_empty.textContent = "Your added items will appear here"

    section_empty.appendChild(div_cart_empty)
    section_empty.appendChild(p_empty)
}

function criando_pedido () {
    // Cria a seção do item
    const itemSection = document.createElement("section");
    itemSection.className = "kaue";

    const itemHeader = document.createElement("div");

    const itemTitle = document.createElement("h1");
    itemTitle.textContent = nome_item_escolhido;

    const removeIcon = document.createElement("img");
    removeIcon.src = "assets/images/icon-remove-item.svg";
    removeIcon.alt = "";
    removeIcon.id = "remove";

    itemHeader.appendChild(itemTitle);
    itemHeader.appendChild(removeIcon);

    const itemDetails = document.createElement("div");

    const itemQuantity = document.createElement("p");
    itemQuantity.id = "amount"
    itemQuantity.textContent = quantity + "x";

    const itemPrice = document.createElement("p");
    itemPrice.id = ""
    itemPrice.textContent = "@ $"+preco_item_escolhido;

    const itemTotal = document.createElement("p");
    itemTotal.textContent = "$" + quantity * preco_item_escolhido;

    itemDetails.appendChild(itemQuantity);
    itemDetails.appendChild(itemPrice);
    itemDetails.appendChild(itemTotal);

    itemSection.appendChild(itemHeader);
    itemSection.appendChild(itemDetails);

    section_empty.appendChild(itemSection);

    quantidade_items_carrinho ++
    msg_quantity.innerHTML = `Your Cart (${quantidade_items_carrinho})`
}
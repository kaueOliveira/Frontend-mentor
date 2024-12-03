const btn = document.querySelectorAll(".btn_add");
//const main = document.getElementsByTagName("main")[0]
const section_cart = document.getElementById("cart")
const msg_quantity = section_cart.getElementsByTagName("h1")[0]

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

let intervalo;

let pedido_total2 = 0
let quantity_items_cart = 0

let has_msg_empty = true
let order_made = false

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
            let chosen_item_name = b.parentNode.children[2].innerHTML
                
            let chosen_item_price =  b.parentNode.children[3].innerHTML
                
            items.forEach(i => {
                if(i.name === chosen_item_name) {
                    chosen_item_name = i.name
                    chosen_item_price = i.price
                }
            })

                // Remove o carrinho vazio
            if (has_msg_empty) {
                section_cart.children[1].remove(), section_cart.children[1].remove()
                has_msg_empty = false
            }
            
            // Cria a seção do item
            const itemSection = document.createElement("section");
            itemSection.className = "order";
            
            const itemHeader = document.createElement("div");
            
            const itemTitle = document.createElement("h1");
            itemTitle.textContent = chosen_item_name;
            
            const removeIcon = document.createElement("img");
            removeIcon.src = "assets/images/icon-remove-item.svg";
            removeIcon.alt = "icon remove item";
            removeIcon.id = "remove";
            
            itemHeader.appendChild(itemTitle);
            itemHeader.appendChild(removeIcon);
            
            const itemDetails = document.createElement("div");
            
            const itemQuantity = document.createElement("p");
            itemQuantity.id = "amount"
            itemQuantity.textContent = quantity + "x";
            
            const itemPrice = document.createElement("p");
            itemPrice.id = "price"
            itemPrice.textContent = "@ $"+ chosen_item_price;
            
            const itemTotal = document.createElement("p"); 
            itemTotal.textContent = "$" + quantity * chosen_item_price; //
            itemTotal.id = "total"
            
            itemDetails.appendChild(itemQuantity);
            itemDetails.appendChild(itemPrice);
            itemDetails.appendChild(itemTotal);
            
            itemSection.appendChild(itemHeader);
            itemSection.appendChild(itemDetails);
        
            section_cart.appendChild(itemSection);
            quantity_items_cart++
            msg_quantity.innerHTML = `Your Cart (${quantity_items_cart})`

            pedido_total2 += quantity * chosen_item_price

            confirm_order(chosen_item_name, chosen_item_price, quantity)

            if (order_made) {
                section_cart.children.confirm_order.remove()
            }

            const order_total = document.createElement("div")
            order_total.id = "order_total"

            const p1 = document.createElement("p")
            p1.textContent = "Order Total"
    
            const p_total_price = document.createElement("p")
            p_total_price.id = "total_price"
                    
            intervalo = setInterval(() => {
                p_total_price.textContent = "$ " + pedido_total2
            }, 500);
                      
            order_total.appendChild(p1)
            order_total.appendChild(p_total_price)

            const p_img = document.createElement("p")
            p_img.id = "p_img"

            const img = document.createElement("img")
            img.id = "img_carbon"
            img.src = "assets/images/icon-carbon-neutral.svg"

            p_img.appendChild(img)

            p_img.innerHTML += " This is a carbon-neutral delivery"

             const btn_confirm_order = document.createElement("div")
            btn_confirm_order.id = "btn_confirm_order"
            btn_confirm_order.innerHTML = "Confirm Order"

            const section_confirm_order = document.createElement("section")
            section_confirm_order.id = "confirm_order"

            section_confirm_order.appendChild(order_total)
            section_confirm_order.append(p_img)
            section_confirm_order.append(btn_confirm_order)

            section_cart.appendChild(section_confirm_order)

            order_made = true
            
            btn_confirm_order.addEventListener("click", (evt)=>{
                const div_backGroung = document.getElementById("back_ground")
                const msg_box = document.getElementById("msg_box")

                div_backGroung.style.width = "100%"
                div_backGroung.style.height = "200vh"

                msg_box.style.width = "450px"
                msg_box.style.overflow = "auto"   
                
                const order_total_msg_box = document.getElementById("msg_box_totalOrder");

                const p_order_total = document.createElement("p");
                p_order_total.innerHTML = "Order Total";
                p_order_total.id = " p_order_total";

                const pTotalValue = document.createElement("p")
                pTotalValue.innerHTML = "$ " + pedido_total2;
                pTotalValue.id = "p_total_value"

                order_total_msg_box.appendChild(p_order_total)
                order_total_msg_box.appendChild(pTotalValue)

                const btn_new_order = document.getElementById("btn_new_order")
                btn_new_order.addEventListener("click", (evt)=>{
                    div_backGroung.style.width = "0px"
                    div_backGroung.style.height = "0vh"

                    msg_box.style.width = "0px"
                    msg_box.style.overflow = "hidden"

                    p_order_total.remove()
                    pTotalValue.remove()
                    
                    evt.target.parentNode.children[1].children[0].remove()

                    reset()

                    // b.classList.remove("btn_order");
                    // b.classList.add("btn_add");
                    // b.innerHTML = " ";
                    // b.appendChild(img_cart);
                    // b.append(" Add to Cart");

                });
            })

            //Removendo e Adicionando itens
            img_decrement.addEventListener("click", (evt) => {
                quantity--
                b.childNodes[1].nodeValue = quantity
                itemQuantity.textContent = quantity + "x";
                itemTotal.textContent = "$" + quantity * chosen_item_price;
                pedido_total2 = pedido_total2 - chosen_item_price
                if (quantity === 0) {
                    p_total_price.textContent = "$ " + pedido_total2
                    itemSection.remove()
                }
            });

            img_increment.addEventListener("click", () => {
                quantity++
                b.childNodes[1].nodeValue = quantity
                itemQuantity.textContent = quantity + "x";
                itemTotal.textContent = "$" + quantity * chosen_item_price;
                pedido_total2 += chosen_item_price
            });
        } 

        if (quantity === 0) { //Voltando o botão ao padrão. 
            b.classList.remove("btn_order");
            b.classList.add("btn_add");
            b.innerHTML = " ";
            b.appendChild(img_cart);
            b.append(" Add to Cart");

            img_product.classList.remove("selected")
            quantity_items_cart--
            msg_quantity.innerHTML = `Your Cart (${quantity_items_cart})`
        };

        if (quantity_items_cart === 0) { // carrinho vazio
            cart_empty ()
            clearInterval(intervalo);
            section_cart.children.confirm_order.remove()
            has_msg_empty = true
            order_made =  false
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

    section_cart.appendChild(div_cart_empty)
    section_cart.appendChild(p_empty)
}

function confirm_order (chosen_item_name, chosen_item_price, quantity) {
    const msg_box_orders = document.getElementById("msg_box_orders");
    
    const itemSection2 = document.createElement("section");
    itemSection2.className = "order";
    
    const itemHeader = document.createElement("div");
    
    const itemTitle = document.createElement("h1");
    itemTitle.textContent = chosen_item_name;
    
    itemHeader.appendChild(itemTitle);
    
    const itemDetails = document.createElement("div");
    itemDetails.id = "details"
    
    const itemQuantity = document.createElement("p");
    itemQuantity.id = "amount"
    itemQuantity.textContent = quantity + "x";
    
    const itemPrice = document.createElement("p");
    itemPrice.id = "price"
    itemPrice.textContent = "@ $"+ chosen_item_price;
    
    const itemTotal = document.createElement("p"); 
    itemTotal.textContent = "$" + quantity * chosen_item_price; //
    itemTotal.id = "total"
    
    itemDetails.appendChild(itemQuantity);
    itemDetails.appendChild(itemPrice);
    itemDetails.appendChild(itemTotal);
    
    itemSection2.appendChild(itemHeader);
    itemSection2.appendChild(itemDetails);

    msg_box_orders.appendChild(itemSection2);
}

function reset () {}
const btn = document.querySelectorAll(".btn_add");
const section_cart = document.getElementById("cart");
const msg_quantity = section_cart.getElementsByTagName("h1")[0];
const main = document.getElementById("main")

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
// criar objeto nessas variaveis
let interval;
let total_order_value = 0;
let quantity_items_cart = 0;
let has_msg_empty = true;
let order_made = false;

btn.forEach( b => {
    let quantity = 0;
    b.addEventListener("click", (evt) => {
        const img_product = b.parentNode.children[0] // img do carrinho
        
        const img_cart = document.createElement("img");
        img_cart.setAttribute("src", "assets/images/icon-add-to-cart.svg");
        img_cart.setAttribute("alt", "add to cart icon");
        
        if (b.classList.value === "btn_add") {
            quantity ++;

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

            img_product.classList.add("selected");// Borda ao redor da imagem

            // Adicionando no Carrinho
            let chosen_item_name = b.parentNode.children[2].innerHTML;   
            let chosen_item_price =  b.parentNode.children[3].innerHTML;
                
            items.forEach(i => {
                if(i.name === chosen_item_name) {
                    chosen_item_name = i.name;
                    chosen_item_price = i.price;
                }
            });

            // Remove o carrinho vazio
            if (has_msg_empty) {
                section_cart.children[1].remove(), section_cart.children[1].remove();
                has_msg_empty = false;
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
            itemDetails.id = "details"
            
            const itemQuantity = document.createElement("p");
            itemQuantity.id = "amount";
            itemQuantity.textContent = quantity + "x";
            
            const itemPrice = document.createElement("p");
            itemPrice.id = "price"
            itemPrice.textContent = "@ $"+ chosen_item_price;
            
            const itemTotal = document.createElement("p"); 
            itemTotal.textContent = "$" + quantity * chosen_item_price;
            itemTotal.id = "total";
            
            itemDetails.appendChild(itemQuantity);
            itemDetails.appendChild(itemPrice);
            itemDetails.appendChild(itemTotal);
            
            itemSection.appendChild(itemHeader);
            itemSection.appendChild(itemDetails);
        
            section_cart.appendChild(itemSection);
            quantity_items_cart++;
            msg_quantity.innerHTML = `Your Cart (${quantity_items_cart})`;

            total_order_value += quantity * chosen_item_price;

            //Remover itens específicos do carrinho

            // removeIcon.addEventListener("click", (evt)=>{
            //     evt.target.parentNode.parentNode.remove()
            // })
            
            if (order_made) {
                section_cart.children.confirm_order.remove();
            }

            const order_total = document.createElement("div");
            order_total.id = "order_total";

            const p1 = document.createElement("p");
            p1.textContent = "Order Total";
    
            const p_total_price = document.createElement("p");
            p_total_price.id = "total_price";
              
            interval = setInterval(() => {
                p_total_price.textContent = "$ " + total_order_value;
            }, 500);
                      
            order_total.appendChild(p1);
            order_total.appendChild(p_total_price);

            const p_img = document.createElement("p");
            p_img.id = "p_img";

            const img = document.createElement("img");
            img.id = "img_carbon";
            img.src = "assets/images/icon-carbon-neutral.svg";

            p_img.appendChild(img);

            p_img.innerHTML += " This is a carbon-neutral delivery";

            complete_order(order_total, p_img); // X

            //Removendo e Adicionando itens
            img_decrement.addEventListener("click", (evt) => {
                quantity--;
                b.childNodes[1].nodeValue = quantity; //atualizando numero de itens escolhidos
                itemQuantity.textContent = quantity + "x";
                itemTotal.textContent = "$" + quantity * chosen_item_price;
                total_order_value = total_order_value - chosen_item_price; 
            
                if (quantity === 0) {
                    p_total_price.textContent = "$ " + total_order_value;
                    itemSection.remove();
                }
            });

            img_increment.addEventListener("click", () => {
                quantity++
                b.childNodes[1].nodeValue = quantity;
                itemQuantity.textContent = quantity + "x";
                itemTotal.textContent = "$" + quantity * chosen_item_price;
                total_order_value += chosen_item_price;
            });
        } 

        if (quantity === 0) { //Voltando o botão ao padrão. 
            b.classList.remove("btn_order");
            b.classList.add("btn_add");
            b.innerHTML = " ";
            b.appendChild(img_cart);
            b.append(" Add to Cart");

            img_product.classList.remove("selected")
            quantity_items_cart--;
            msg_quantity.innerHTML = `Your Cart (${quantity_items_cart})`;
            let nome = b.parentNode.children[2].innerHTML;
            remove_item_from_order_confirmation(nome);
        };

        if (quantity_items_cart === 0) { // carrinho vazio
            cart_empty ();
            clearInterval(interval);
            section_cart.children.confirm_order.remove();
            has_msg_empty = true;
            order_made =  false;
        }
    });
});

function cart_empty () { //Mensagem de carrinho vazio
    const div_cart_empty = document.createElement("div");
    div_cart_empty.className = "cart_empty";

    const p_empty = document.createElement("p");
    p_empty.textContent = "Your added items will appear here";

    section_cart.appendChild(div_cart_empty);
    section_cart.appendChild(p_empty);
}

function adding_items_to_order_confirmation () {
    const msg_box_orders = document.getElementById("msg_box_orders");
    const pedidos = [...document.getElementsByClassName("order")];

    pedidos.forEach(pedido => {
        const btn_remove = document.getElementById("remove");
        btn_remove.remove();
        msg_box_orders.appendChild(pedido);
    });
}

function complete_order (order_total, p_img) { //Finaliza o pedido e cria caixas.
    const btn_confirm_order = document.createElement("div");
        btn_confirm_order.id = "btn_confirm_order";
        btn_confirm_order.innerHTML = "Confirm Order";

        const section_confirm_order = document.createElement("section");
        section_confirm_order.id = "confirm_order";

        section_confirm_order.appendChild(order_total);
        section_confirm_order.append(p_img);
        section_confirm_order.append(btn_confirm_order);

        section_cart.appendChild(section_confirm_order);

        order_made = true;
            
        btn_confirm_order.addEventListener("click", (evt)=>{
            adding_items_to_order_confirmation ()
            const div_background = document.getElementById("back_ground"); //preto
            const msg_box = document.getElementById("msg_box");

            div_background.style.width = "100%";
            div_background.style.height = `${document.documentElement.scrollHeight}px`
            //-----------------------------------------------------------------------------------------
            msg_box.style.width = "400px";//mudar p/ media-query
            msg_box.style.overflow = "auto";
            //-----------------------------------------------------------------------------------------    
            const order_total_msg_box = document.getElementById("msg_box_totalOrder");

            const p_order_total = document.createElement("p");
            p_order_total.innerHTML = "Order Total";
            p_order_total.id = " p_order_total";

            const pTotalValue = document.createElement("p");
            pTotalValue.innerHTML = "$ " + total_order_value;
            pTotalValue.id = "p_total_value";

            order_total_msg_box.appendChild(p_order_total);
            order_total_msg_box.appendChild(pTotalValue);

            window.scrollTo({top: 0})
                
            const btn_new_order = document.getElementById("btn_new_order");
            btn_new_order.addEventListener("click", (evt)=>{
                div_background.style.width = "0px";
                div_background.style.height = "0vh";

                msg_box.style.width = "0px";
                msg_box.style.overflow = "hidden";

                p_order_total.remove();
                pTotalValue.remove();
                    
                evt.target.parentNode.children[1].children[0].remove();

                location.reload();
                //reset() 
            });
    });
}

function remove_item_from_order_confirmation (nome) {
    const pedido = [...msg_box_orders.getElementsByClassName("order")];

    pedido.map(p => {
        let nome_box = p.children[0].children[0].innerHTML
        if (nome === nome_box) {
            p.remove();
        }
    });
}


//Criar função para atualizar valor total do pedido
//remover item especifico do carrinho
// mudou ?
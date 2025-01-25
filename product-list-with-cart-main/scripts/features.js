setTimeout(()=>{
    const btn_add_item = document.querySelectorAll(".btn_add");
    const section_cart = document.getElementById("section_cart");
    const msg_quantity = document.getElementById("msg_quantity");
    const cart = document.getElementById("cart");
    
    const cart_details = {
        quantity_items_cart: 0,
        total_order_value: 0,
        has_msg_empty: true,
        order_made: false,
        msg_order_total: false,
    }

    let order_total = 0;
    
    btn_add_item.forEach(btn => {
        let quantity = 0;
        btn.addEventListener("click", (evt)=> {

            if (btn.classList.contains("inative")) {
                const img_increment = document.createElement("img");
                img_increment.src = "assets/images/icon-increment-quantity.svg";
                img_increment.id = "img_increment";
                img_increment.className = "btn_quant";

                const img_decrement = document.createElement("img");
                img_decrement.src = "assets/images/icon-decrement-quantity.svg";
                img_decrement.id = "img_decrement";
                img_decrement.className = "btn_quant";

                quantity ++;
                btn.classList.remove("inative");
                btn.classList.add("ative");

                btn.childNodes[0];
                btn.innerHTML = " ";

                btn.appendChild(img_decrement);
                btn.append(quantity);
                btn.appendChild(img_increment);

                const chosen_item_name = btn.parentNode.querySelector(".name").textContent;
                const chosen_item_price = btn.parentNode.querySelector(".price").textContent
                .replace("$", "");
                
                
                if (cart_details.has_msg_empty) { // Tira a imagem e a msg do cart 
                    const img_cake = cart.querySelector(".cart_empty");
                    img_cake.className = "cart_filled";
                    const paragraph = cart.querySelector(".paragraph").remove();
                    cart_details.has_msg_empty = false;
                }

                ////////////////////////////////////////////////////////////////

                const div_order = document.createElement("div");
                div_order.id = "div_order";

                const section_order = document.createElement("section");
                section_order.id = "section_order";

                const item_name = document.createElement("h1");
                item_name.textContent = chosen_item_name;

                const div_details = document.createElement("div");
                div_details.id = "details";

                const p_quantity = document.createElement("p");
                p_quantity.id = "quantity";
                p_quantity.textContent = `${quantity} x`;

                const p_price = document.createElement("p");
                p_price.id = "price";
                p_price.textContent = `@ $${chosen_item_price}`;

                const p_total_price = document.createElement("p");
                p_total_price.id = "total_price";

                let total = quantity * chosen_item_price
                p_total_price.textContent = `$ ${total}`;

                const remove_icon = document.createElement("img");
                remove_icon.className = "btn_remove"
                remove_icon.src = "assets/images/icon-remove-item.svg";
                remove_icon.alt = "Remove Icon";

                // remove_icon.addEventListener("click", (evt) => {
                //     evt.target.parentNode.remove()
                // })

                div_details.appendChild(p_quantity);
                div_details.appendChild(p_price);
                div_details.appendChild(p_total_price);

                section_order.appendChild(item_name);
                section_order.appendChild(div_details);
                
                div_order.appendChild(section_order);
                div_order.appendChild(remove_icon);

                cart.appendChild(div_order);

                cart_details.quantity_items_cart ++
                msg_quantity.textContent = `Your Cart(${cart_details.quantity_items_cart})`;

                //////////////////////////////////////////////////////////////
                
                // Atualizando valor total
                order_total += total

                let div_ord_tot = document.createElement("div");
                div_ord_tot.id = "div_tot";
                div_ord_tot.className = "div_tot";

                if (cart_details.msg_order_total) {
                    cart.children.div_tot.remove();
                }

                let p_ord_tot = document.createElement("p");
                p_ord_tot.id = "p_tot";
                p_ord_tot.textContent = "Order Total";

                let val_ord_tot = document.createElement("p");
                val_ord_tot.id = "val_tot";
                val_ord_tot.textContent = `$ ${order_total}`;

                div_ord_tot.appendChild(p_ord_tot);
                div_ord_tot.appendChild(val_ord_tot);

                cart.appendChild(div_ord_tot);
                cart_details.msg_order_total = true; 

                //////////////////////////////////////////////////////////////

                img_decrement.addEventListener("click", (evt)=> {
                    quantity --;
                    btn.childNodes[2].nodeValue = quantity;
                   
                    p_quantity.textContent = `${quantity} x`;
                    p_total_price.textContent = `$ ${quantity * chosen_item_price}`;

                    if (quantity === 0) {
                        div_order.remove();
                    }

                    // Atualizando valor total
                    order_total = order_total - total
                    console.log(order_total)
                    let div_ord_tot = document.createElement("div");
                    div_ord_tot.id = "div_tot";
                    div_ord_tot.className = "div_tot";

                    if (cart_details.msg_order_total) {
                        cart.children.div_tot.remove();
                    }

                    let p_ord_tot = document.createElement("p");
                    p_ord_tot.id = "p_tot";
                    p_ord_tot.textContent = "Order Total";

                    let val_ord_tot = document.createElement("p");
                    val_ord_tot.id = "val_tot";
                    val_ord_tot.textContent = `$ ${order_total}`;

                    div_ord_tot.appendChild(p_ord_tot);
                    div_ord_tot.appendChild(val_ord_tot);

                    cart.appendChild(div_ord_tot);
                    cart_details.msg_order_total = true; 
                });

                img_increment.addEventListener("click", (evt)=> {
                    quantity ++;
                    btn.childNodes[2].nodeValue = quantity;

                    p_quantity.textContent = `${quantity} x`;
                    p_total_price.textContent = `$ ${quantity * chosen_item_price}`;

                    // Atualizando valor total
                    order_total += total
                    let div_ord_tot = document.createElement("div");
                    div_ord_tot.id = "div_tot";
                    div_ord_tot.className = "div_tot";

                    if (cart_details.msg_order_total) {
                        cart.children.div_tot.remove();
                    }

                    let p_ord_tot = document.createElement("p");
                    p_ord_tot.id = "p_tot";
                    p_ord_tot.textContent = "Order Total";

                    let val_ord_tot = document.createElement("p");
                    val_ord_tot.id = "val_tot";
                    val_ord_tot.textContent = `$ ${order_total}`;

                    div_ord_tot.appendChild(p_ord_tot);
                    div_ord_tot.appendChild(val_ord_tot);

                    cart.appendChild(div_ord_tot);
                    cart_details.msg_order_total = true; 
                });
            }; 

            if (quantity === 0) {
                btn.classList.remove("ative");
                btn.classList.add("inative");

                const icon_cart = document.createElement("img");
                icon_cart.src = "../assets/images/icon-add-to-cart.svg";
                
                btn.innerHTML = " ";
                btn.append(icon_cart);
                btn.innerHTML += "Add to Cart";

                cart_details.quantity_items_cart --;
                msg_quantity.textContent = `Your Cart(${cart_details.quantity_items_cart})`;

               
            }

            if (cart_details.quantity_items_cart === 0) {
                const img_cake = cart.querySelector(".cart_filled");
                img_cake.className = "cart_empty";

                const p = document.createElement("p");
                p.className = "paragraph";
                p.textContent = `Your added items will appear here`;
                cart.appendChild(p);

                cart.children.div_tot.remove();
                order_total = 0;

                cart_details.has_msg_empty = true;
                cart_details.msg_order_total = false;
            }
        });
    });

}, 1000);

// tentar usar async
// Colocar uma borda ao redor do item selecionado.
// Colocar zeros após o ";".
const section = document.getElementById("first")
const endPoint = "data.json"

const info = (endPoint, section) => {
    fetch(endPoint)
    .then(res=>res.json())
    .then(res=>{
        res.forEach(el => {
            const div_item = document.createElement("div")
            div_item.className = "item"

            const div_img = document.createElement("div")
            div_img.id = `${el.id}_img`
            div_img.className = "div_img"

            const category = document.createElement("p")
            category.className = "category"
            category.textContent = el.category

            const name = document.createElement("p")
            name.className = "name" 
            name.textContent = el.name

            const price = document.createElement("p")
            price.className = "price"
            price.textContent = "$" + parseFloat(el.price).toFixed(2);

            console.log(price)

            const btn_add = document.createElement("div")
            btn_add.className = "btn_add"

            const img_icon_add_cart = document.createElement("img")
            img_icon_add_cart.src = "../assets/images/icon-add-to-cart.svg"
            btn_add.appendChild(img_icon_add_cart)
            btn_add.innerHTML += "Add to cart"

            div_item.appendChild(div_img)
            div_item.appendChild(category)
            div_item.appendChild(name)
            div_item.appendChild(price)
            div_item.appendChild(btn_add)

            section.appendChild(div_item)
        });
    })
}

info(endPoint, section)
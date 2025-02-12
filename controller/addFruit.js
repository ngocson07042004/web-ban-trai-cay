//Product
function itemProduct(index, data){
    return `<div class="item">
            <img src=${data[index].image} alt=${data[index].title}>
            <h5 class="title-product">${data[index].title}</h5>
            <span class="product-price">${data[index].price + ".000đ/" + data[index].unit}</span>
            <button class="btn-heart" id="btn-heart">
                <i class="fa-solid fa-heart"></i>
            </button>
            <button class="btn-cart">
                <i class="fa-solid fa-cart-shopping"></i>
            </button>
        </div>`
}

function addFruits(element, data){
    for(let i = 0; i < data.length; i++){
        document.getElementById(element).innerHTML += itemProduct(i, data)
    }
}

//Menu Tab
addFruits("tab1", dataFruits)
addFruits("tab2", dataJuices)
addFruits("tab3", dataBoxFruits)

// Category
addFruits("category1", dataFruits)
addFruits("category2", dataJuices)
addFruits("category3", dataBoxFruits)


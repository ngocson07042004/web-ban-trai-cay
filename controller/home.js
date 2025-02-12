// Slider
var currentIndex = 0

var itemSlider =`<div class="item-slider">
                <img src="${dataProduct[0].image}" alt="${dataProduct[0].title}">
                <h5>${dataProduct[0].title}</h5>
            </div>`

for(let i = 1; i < dataProduct.length; i++){
    itemSlider += `<div class="item-slider">
                <img src="${dataProduct[i].image}" alt="${dataProduct[i].title}">
                <h5>${dataProduct[i].title}</h5>
            </div>`
    
    document.getElementById("content-slider").innerHTML = itemSlider
}

//Chuyển động slider
function moveSlide(step) {
    const slider = document.querySelector(".content-slider")
    const totalItems = 6

    currentIndex = (currentIndex + step + totalItems) % totalItems
    slider.style.transform = `translateX(-${currentIndex * 100}%)`
}

//Thời gian sau 4s sẽ chuyển động
setInterval(() => {
    if(currentIndex < 6)
        moveSlide(1)
    else
        moveSlide(-1)
}, 4000)
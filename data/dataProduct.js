const dataFruits = [
    {
        id: 1,
        image: "../image/fruits/anh-dua.png",
        title: "Dứa",
        price: (Math.floor(Math.random() * 5) + 30),
        unit: "quả",
        quantity: 1
    },

    {
        id: 2,
        image: "../image/fruits/anh-kiwi.png",
        title: "Kiwi",
        price: (Math.floor(Math.random() * 5) + 30),
        unit: "kg",
        quantity: 1
    },

    {
        id: 3,
        image: "../image/fruits/anh-nho.png",
        title: "Nho",
        price: (Math.floor(Math.random() * 5) + 30),
        unit: "chùm",
        quantity: 1
    },

    {
        id: 4,
        image: "../image/fruits/anh-xoai.png",
        title: "Xoài",
        price: (Math.floor(Math.random() * 5) + 30),
        unit: "kg",
        quantity: 1
    },

    {
        id: 5,
        image: "../image/fruits/chuoi.png",
        title: "Chuối",
        price: (Math.floor(Math.random() * 5) + 30),
        unit: "nải",
        quantity: 1
    },

    {
        id: 6,
        image: "../image/fruits/dau-tay.png",
        title: "Dâu Tây",
        price: (Math.floor(Math.random() * 5) + 30),
        unit: "quả",
        quantity: 1
    },

    {
        id: 7,
        image: "../image/fruits/dua-hau.png",
        title: "Dưa Hấu",
        price: (Math.floor(Math.random() * 5) + 30),
        unit: "quả",
        quantity: 1
    },

    {
        id: 8,
        image: "../image/fruits/qua-cam.png",
        title: "Cam",
        price: (Math.floor(Math.random() * 5) + 30),
        unit: "kg",
        quantity: 1
    },

    {
        id: 9,
        image: "../image/fruits/qua-dua.png",
        title: "Dừa",
        price: (Math.floor(Math.random() * 5) + 30),
        unit: "quả",
        quantity: 1
    },

    {
        id: 10,
        image: "../image/fruits/qua-na.png",
        title: "Na",
        price: (Math.floor(Math.random() * 5) + 30),
        unit: "kg",
        quantity: 1
    }
]

const dataJuices = [
    {
        id: 1,
        image: "../image/juices/nuoc-ep-ca-chua.png",
        title: "Nước Ép Cà Chua",
        price: (Math.floor(Math.random() * 5) + 30),
        unit: "ly",
        quantity: 1
    },

    {
        id: 2,
        image:  "../image/juices/nuoc-ep-ca-rot-va-dua.png",
        title: "Nước Ép Cà Rốt và Dứa",
        price: (Math.floor(Math.random() * 5) + 30),
        unit: "ly",
        quantity: 1
    },

    {
        id: 3,
        image: "../image/juices/nuoc-ep-cam.png",
        title: "Nước Ép Cam",
        price: (Math.floor(Math.random() * 5) + 30),
        unit: "ly",
        quantity: 1
    },

    {
        id: 4,
        image: "../image/juices/nuoc-ep-dao.png",
        title: "Nước Ép Đào",
        price: (Math.floor(Math.random() * 5) + 30),
        unit: "ly",
        quantity: 1
    },

    {
        id: 5,
        image: "../image/juices/nuoc-ep-dua-hau.png",
        title: "Nước Ép Dưa Hấu",
        price: (Math.floor(Math.random() * 5) + 30),
        unit: "ly",
        quantity: 1
    }
]

const dataBoxFruits = [
    {
        id: 1,
        image: "../image/box-fruit/anh-chom-chom-nhan-dua.png",
        title: "Chôm Chôm Nhân Dứa",
        price: (Math.floor(Math.random() * 5) + 40),
        unit: "hộp",
        quantity: 1
    },

    {
        id: 2,
        image: "../image/box-fruit/anh-chom-chom-nhan-dua.png",
        title: "Cootail Trái Cây",
        price: (Math.floor(Math.random() * 5) + 40),
        unit: "hộp",
        quantity: 1
    },

    {
        id: 3,
        image: "../image/box-fruit/hop-chanh-muoi.png",
        title: "Hộp Chanh Muối",
        price: (Math.floor(Math.random() * 5) + 40),
        unit: "hộp",
        quantity: 1
    },

    {
        id: 4,
        image: "../image/box-fruit/nhan-ngam-nuoc-duong.png",
        title: "Nhãn Ngâm Nước Đường",
        price: (Math.floor(Math.random() * 5) + 40),
        unit: "hộp",
        quantity: 1
    },

    {
        id: 5,
        image: "../image/box-fruit/vai-thieu-ngam-nuoc-duong.png",
        title: "Vải Thiều Ngâm Nước Đường",
        price: (Math.floor(Math.random() * 5) + 40),
        unit: "hộp",
        quantity: 1
    }
]

const dataProduct = [...dataFruits, ...dataJuices, ...dataBoxFruits]
dataProduct.forEach((index, data) =>{
    data.id = index + 1
})
const productData = [
    {
        id: 1,
        name: "Muzzarela",
        bid: 7000,
        cardImg: "./img/muzarella-removebg-preview.png"
    
    },
    {
        id: 2,
        name: "Jamon y Morron",
        bid: 8000,
        cardImg: "./img/pizza-jamon-morron.png"
    
    },
    {
        id:3,
        name: "Jamon y Huevo",
        bid: 8000,
        cardImg: "./img/jamon-y-huevo.webp"
    
    },
    {
        id: 4,
        name: "Napolitana",
        bid: 8500,
        cardImg: "./img/napo-removebg-preview.png"
    
    },
    {
        id: 5,
        name: "Jamon Crudo y Rucula",
        bid: 10000,
        cardImg: "./img/pizza-rucula.png"
    
    },
    {
        id: 6,
        name: "Jamon y Palmitos",
        bid: 9500,
        cardImg: "./img/Pizza-Jamon-con-Palmitos.png"
    
    },
    {
        id: 7,
        name: "Fugazzeta",
        bid: 8000,
        cardImg: "./img/fugazzeta-removebg-preview (1).png"
    
    },
    {
        id: 8,
        name: "Calabresa",
        bid: 7500,
        cardImg: "./img/calabresa-removebg-preview.png"
    
    },
    {
        id: 9,
        name: "Anana",
        bid: 8500,
        cardImg: "./img/anana-removebg-preview.png"
    
    },
    {
        id: 10,
        name: "Empanadas",
        bid: 7000,
        cardImg: "./img/empanadas.jpg"
    
    }

]

const divideProd = (size) => {
    let producList = [];

    for (let i = 0; 1 < productData.length; i += size){
        producList.push(productData.slice(i, i + size));
    }
    return producList
};

// console.log(divideProd(4));

const appState = {
    product: divideProd(0),
};
const productData = [
  {
    id: 1,
    name: "Muzzarela",
    bid: 7000,
    cardImg: "./assets/productsImg/muza.png",
  },
  {
    id: 2,
    name: "Jamon y Morron",
    bid: 8000,
    cardImg: "./assets/productsImg/especial.png",
  },
  {
    id: 3,
    name: "Jamon y Huevo",
    bid: 8000,
    cardImg: "./assets/productsImg/jamonyhuevo.webp",
  },
  {
    id: 4,
    name: "Napolitana",
    bid: 8500,
    cardImg: "./assets/productsImg/napo.png",
  },
  {
    id: 5,
    name: "Jamon Crudo y Rucula",
    bid: 10000,
    cardImg: "./assets/productsImg/rucula.png",
  },
  {
    id: 6,
    name: "Jamon y Palmitos",
    bid: 9500,
    cardImg: "./assets/productsImg/palmitos.png",
  },
  {
    id: 7,
    name: "Fugazzeta",
    bid: 8000,
    cardImg: "./assets/productsImg/fugaza.png",
  },
  {
    id: 8,
    name: "Calabresa",
    bid: 7500,
    cardImg: "./assets/productsImg/calabresa.png",
  },
  {
    id: 9,
    name: "Anana",
    bid: 8500,
    cardImg: "./assets/productsImg/anana.png",
  },
  {
    id: 10,
    name: "Empanadas",
    bid: 7000,
    cardImg: "./assets/productsImg/empanadas.jpg",
  },
];

const divideProd = (array, size) => {
  let producList = [];

  for (let i = 0; i < array.length; i += size) {
    producList.push(array.slice(i, i + size));
  }
  return producList;
};

console.log(divideProd(productData, 4));

const appState = {
  product: divideProd(productData, 4),
  currentProductIndex: 0,
  productLimit: divideProd(productData, 4).length,
  // activeFilter: null,
};

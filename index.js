// contenedor de productos
const productContainer = document.querySelector(".section-card");

const iconVerMas = document.querySelector(".btn");

// funcion de html

// const [id, name, bid, cardImg] = product;
const createProductTemplate = (product) => {
  const { name, bid, id, cardImg } = product;
  return `<div class="container-card">
  <div class="imgContainer">
  <img src="${cardImg}" alt="${name}" class="img-card">
    
  </div>

    <div>
        <p>${name}</p>
    </div>
    <button class="button">$ ${bid}</button>
</div>
`;
};

// funcion renderizado de producto

const renderProducts = (producList) => {
  productContainer.innerHTML += producList.map(createProductTemplate).join("");
};

const moreProduct = () => {
  console.log(appState.productLimit);
  if (appState.currentProductIndex === appState.productLimit - 1) {
    console.log("al final");
    return;
  }

  appState.currentProductIndex += 1;
  renderProducts(appState.product[appState.currentProductIndex]);
};

// funcion init

const init = () => {
  renderProducts(appState.product[0]);
  iconVerMas.addEventListener(`click`, moreProduct);
};

init();

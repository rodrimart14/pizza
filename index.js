// contenedor de productos
const productContainer = document.querySelector (".section-card")

// funcion de html

// const [id, name, bid, cardImg] = product;
const createProductTemplate = (product) => {


    return `<div class="container-card">
    <div>
        <img src="${product.cardImg}" alt="muzza" class="img-card">
    </div>
    <div>
        <p>Muzzarela</p>
    </div>
    <button class="button">$ 7000</button>
</div>
<div class="container-card cardmodif">
    <div class="imgModif">
        <img src="${product.cardImg}" alt="j y m" class="img-card">
    </div>
    <div>
        <p>Jamón y Morron</p>
    </div>
    <button class="button">$ 8000</button>
</div>
<div class="container-card cardmodif1">
    <div class="imgModif1">

        <img src="${product.cardImg}" alt="huevo" class="img-card">
    </div>
    <div>
        <p>Jamón y Huevo</p>
    </div>
    <button class="button">$ 8000</button>
</div>
<div class="container-card">
    <div>
        <img src="${product.cardImg}" alt="napo" class="img-card">
    </div>
    <div>
        <p>Napolitana</p>
    </div>
    <button class="button">$ 8500</button>
</div>
<div class="container-card cardmodif2">
    <div class="imgModif2">
        <img src="${product.cardImg}" alt="rucula" class="img-card">
    </div>
    <div>
        <p>Jamón Crudo y Rúcula</p>
    </div>
    <button class="button">$ 10000</button>
</div>
<div class="container-card cardmodif3">
    <div class="imgModif3">
        <img src="${product.cardImg}" alt="palmitos" class="img-card">
    </div>
    <div>
        <p>Jamón y Palmitos</p>
    </div>
    <button class="button">$ 9500</button>
</div>
<div class="container-card">
    <div>
        <img src="${product.cardImg}" alt="fugaza" class="img-card">
    </div>
    <div>
        <p>Fugazzeta</p>
    </div>
    <button class="button">$ 8000</button>
</div>
<div class="container-card">
    <div>
        <img src="${product.cardImg}" alt="calabresa" class="img-card">
    </div>
    <div>
        <p>Calabresa</p>
    </div>
    <button class="button">$ 7500</button>
</div>
<div class="container-card cardmodif4">
    <div class="imgModif4">
        <img src="${product.cardImg}" alt="anana" class="img-card">
    </div>
    <div>
        <p>Ananá</p>
    </div>
    <button class="button">$ 8500</button>
</div>
<div class="container-card">
    <div>
        <img src="${product.cardImg}" class="img-card">
    </div>
    <div>
        <p>Empanadas</p>
    </div>
    <button class="button">$ 7000</button>
</div>`
}

// funcion renderizado de producto

const renderProducts = (producList) => {
    productContainer.innerHTML += producList.map(createProductTemplate).join("");
}

// funcion init

const init = () => {
console.log(appSTate.product[1])
    // renderProducts(appState.product[1]);
};

init();
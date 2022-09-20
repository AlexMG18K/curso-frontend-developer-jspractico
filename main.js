const navEmail = document.querySelector ('.navbar-email');
const desktopMenu = document.querySelector ('.desktop-menu');
const IconMenuQuery = document.querySelector ('.menu');
const NavBarShopping = document.querySelector ('.navbar-shopping-cart');
const mobileMenu = document.querySelector ('.mobile-menu');
const shoppingCartContainer = document.querySelector ('#shoppingCartContainer');
const cardsContainer = document.querySelector ('.cards-container');




navEmail.addEventListener('click', toggleDesktopMenu);
IconMenuQuery.addEventListener('click', toggleMobileMenu);
NavBarShopping.addEventListener('click', toggleCarritoAside);


function toggleDesktopMenu () {
    const isasideClosed = shoppingCartContainer.classList.contains('inactive');
    if( !isasideClosed){
        shoppingCartContainer.classList.add ('inactive')
    }
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu () {
    const isasideClosed = shoppingCartContainer.classList.contains('inactive');

    if( !isasideClosed){
        shoppingCartContainer.classList.add ('inactive')
    }
    mobileMenu.classList.toggle('inactive')
}
function toggleCarritoAside () {
    const ismobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isallclosed = desktopMenu.classList.contains('inactive');

    if ( !ismobileMenuClosed || !isallclosed) {
        mobileMenu.classList.toggle ('inactive')
        desktopMenu.classList.toggle ('inactive');
    }
    shoppingCartContainer.classList.toggle('inactive')
}

const productList = [];
productList.push({
    name: 'Pantalla',
    price: 150,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name: 'Computador',
    price: 420,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name: 'Bike',
    price: 178,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

function renderProducts(arr){
    for (product of productList) {
        const productCard = document.createElement('div');
        productCard.classList.add ('product-card');

        const productimg = document.createElement ('img');
        productimg.setAttribute('src', product.image);

        const productinfo = document.createElement('div');
        productinfo.classList.add ('product-info');

        const DivEmpty = document.createElement('div');

        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productinfo.innerText = product.name;

        DivEmpty.appendChild(productPrice)
        DivEmpty.appendChild(productName)

        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');

        productInfoFigure.appendChild(productImgCart);

        productinfo.appendChild(DivEmpty);
        productinfo.appendChild(productInfoFigure);

        productCard.appendChild (productimg);
        productCard.appendChild (productinfo);

        cardsContainer.appendChild (productCard)
      }
};

renderProducts(productList);

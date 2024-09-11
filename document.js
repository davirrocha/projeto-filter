let list = document.querySelector("#item")

const buttonDiscont = document.querySelector(".discont")
const buttonShowAll = document.querySelector(".show-all")
const buttonSum = document.querySelector(".sum-itens")
const buttonFilter = document.querySelector(".filter-all")



function showAll(porductArray) {
    let myProducts = '' // resetar a li

    porductArray.forEach(products => {
        myProducts += `
        <li class="products">
          
            <img src= ${products.src} class="img-product">
           
            <div class="text">
            <p>${products.name}</p>
            <p class="price-item">R$${products.price.toFixed(2)}</p>
            <p class="ingredient">${products.ingredient}</p>
          </div>
        </li>
    `
        list.innerHTML = myProducts
    })
}


function discontItem() {
    const discont = menuOptions.map((products) => ({
        ...products,
        price: products.price * 0.9 // OU, products.price = products.price - (products.price * 10) / 100,


    }))
    showAll(discont)
}


function filter() {
    const filterVegan = menuOptions.filter(product => product.vegan == true)

    showAll(filterVegan)
}


function sumItem() {
    const sum = menuOptions.reduce((acc, itens) => acc + itens.price, 0)
    const discontItens = sum * 0.9
    list.innerHTML = `
    <li class="div-total">
        <p class="total">Valor total de todos os itens, SEM DESCONTO: <span class="no-discont">${sum.toFixed(2)}</span></p>
        <p class="total">Valor total de todos os itens, COM DESCONTO:<span class="with-discont">${discontItens.toFixed(2)}</span></p>
    </li>
    `


}





buttonShowAll.addEventListener('click', () => showAll(menuOptions)) // ->  sempre que precisar passar um dado no addEventeListener colocar uma função anônima
buttonDiscont.addEventListener('click', discontItem)
buttonSum.addEventListener('click', sumItem)
buttonFilter.addEventListener('click', filter)

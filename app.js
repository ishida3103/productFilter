// Declaração de variáveis

const prd = [
    {   "prodName": "Headset HyperX Cloud Stinger",
        "prodType":"Headset",
        "preco":299.90
    } ,
    {
        "prodName": "Processador AMD Ryzen 5",    
        "prodType":"Processador",
        "preco":1729.90
    } ,
    {
        "prodName": "Notebook Acer Aspire 3",
        "prodType":"Notebook",
        "preco":3799.90
    } ,
    {
        "prodName": "Teclado Mecânico Gamer HyperX Allay Origins",
        "prodType":"Teclado",
        "preco":529.90
    } ,
    {   "prodName": "Notebook Gamer Lenovo Intel Core",
        "prodType":"Notebook",
        "preco": 5999.90
    } ,
    {   "prodName": "Processador Intel Core i9-10850K",
        "prodType":"Processador",
        "preco":3149.90
    } ,
    {
        "prodName": "Processador AMD Ryzen 7 3800X",
        "prodType":"Processador",
        "preco":2549.90
    },
    {
        "prodName":"Headset Gamer Redragon Scylla",
        "prodType":"Headset",
        "preco":129.90
    },
    {
        "prodName":"Headset Gamer Redragon Ares",
        "prodType":"Headset",
        "preco":89.90
    }
]

var sortSel = document.getElementById('orderSel')

var typeSel = document.getElementById('typeSel')


var btnApply = document.getElementById('btnApply')

var container = document.querySelector('.prodContainer')

// addEventListeners

btnApply.addEventListener('click', filtros)

// funções

function sortBy(prd){
    var sort = sortSel.value
    switch(sort){
        case 'nameAZ':
            prd.sort(function(a, b){
                return a.prodName < b.prodName ? -1 : a.prodName > b.prodName ? 1: 0;
            })
            break;
        case 'nameZA':
            prd.sort(function(a, b){
                return a.prodName > b.prodName ? -1 : a.prodName < b.prodName ? 1 : 0
            })
            break;
        case 'lowPrice':
            prd.sort(function(a, b){
                return a.preco - b.preco
            })
            break;
        case 'highPrice':
            prd.sort(function(a, b){
                return b.preco - a.preco
            })
            break;
    }   
}

function typeFilter(prd){
    var typeValue = typeSel.value
    switch(typeValue){
        case 'headset':
            typeValue = 'Headset'
            break
        case 'processador':
            typeValue = 'Processador'
            break
        case 'notebook':
            typeValue = 'notebook'
            break
    }
    const newPrd = []
    prd.forEach(function(e){
        if(e.prodType == typeValue){
            newPrd.push(e)
        }
    })
    sortBy(newPrd);
    return newPrd;
}

function filtros(){

    container.innerText = ''
    var newPrd = []
    sortBy(prd);
    newPrd = typeFilter(prd);
    if(newPrd.length == 0){
        prd.forEach(function(e){
            var nomeProd = e.prodName
            var tipoProd = e.prodType
            var precoProd = e.preco
            imprime(nomeProd, tipoProd, precoProd)
        })
    }else{
        newPrd.forEach(function(e){
            var nomeProd = e.prodName
            var tipoProd = e.prodType
            var precoProd = e.preco
            imprime(nomeProd, tipoProd, precoProd)
        })
    }
    
}

function imprime(nomeProd, tipoProd, precoProd){
    var card = document.createElement("section")
    var title = document.createElement("h2")
    var price = document.createElement("p")
    var type = document.createElement('p')
    title.className = "cardTitle"
    title.innerText = nomeProd
    price.innerText = "$" + precoProd
    price.className = "cardPrice"
    type.innerText = tipoProd
    type.className = tipoProd
    card.appendChild(title)
    card.appendChild(price)
    card.appendChild(type)
    card.className = "cardProd"
    container.appendChild(card)
}


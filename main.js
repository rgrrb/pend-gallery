'use strict'

function createContent(urlContent) {

    const gallery = document.getElementById('gallery')

    const card = document.createElement('div')
    card.classList.add('card')

    const img = document.createElement('img')

    img.src = urlContent.url

    card.style.setProperty('--legenda', `"${urlContent.subtitle}"`)

    card.appendChild(img)
    gallery.appendChild(card)

}

function loadImages() {
    const content = [{
            nome: 'animal',
            subtitle: 'Veado',
            url: './img/animal.png'
        },
        {
            nome: 'china',
            subtitle: 'China',
            url: './img/china.png'
        },
        {
            nome: 'couple',
            subtitle: 'Casal',
            url: './img/couple.png'
        },
        {
            nome: 'jump',
            subtitle: 'Pulo',
            url: './img/jump.png'
        },
        {
            nome: 'montain',
            subtitle: 'Montanha',
            url: './img/montanha.png'
        },
        {
            nome: 'Manhattan',
            subtitle: 'Cidade de Manhattan',
            url: './img/manhattan.png'
        },
        {
            nome: 'snow',
            subtitle: 'Carro na neve',
            url: './img/neve.png'
        },
        {
            nome: 'beach',
            subtitle: 'Praia',
            url: './img/praia.png'
        },
        {
            nome: 'Shoes',
            subtitle: 'Tênis',
            url: "./img/tenis.png"
        },
        {
            nome: 'Soldier',
            subtitle: 'Soldado',
            url: './img/soldados.png'
        }
        




    ]


    content.forEach(createContent)


}

loadImages()
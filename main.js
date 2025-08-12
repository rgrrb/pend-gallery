'use strict'

function createContent(urlContent) {

    const gallery = document.getElementById('gallery')
    const img = document.createElement('img')
    const subtitle = document.createElement('p')
    img.src = urlContent.url
    subtitle.textContent = urlContent.subtitle
    gallery.appendChild(img)
    document.documentElement.style.setProperty('--legenda', gallery.appendChild(subtitle))
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
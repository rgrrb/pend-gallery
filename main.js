'use strict'

function createImage(urlImage) {

    const gallery = document.getElementById('gallery')
    const img = document.createElement('img')
    img.src = urlImage.url

    gallery.appendChild(img)
}

function loadImages() {
    const images = [{
            nome: 'animal',
            url: './img/animal.png'
        },
        {
            nome: 'china',
            url: './img/china.png'
        },
        {
            nome: 'couple',
            url: './img/couple.png'
        },
        {
            nome: 'jump',
            url: './img/jump.png'
        },
        {
            nome: 'montain',
            url: './img/montanha.png'
        },
        {
            nome: 'Manhattan',
            url: './img/manhattan.png'
        },
        {
            nome: 'snow',
            url: './img/neve.png'
        },
        {
            nome: 'beach',
            url: './img/praia.png'
        },
        {
            nome: 'Shoes',
            url: "./img/tenis.png"
        },
        {
            nome: 'Soldier',
            url: './img/soldados.png'
        }




    ]


    images.forEach(createImage)


}
loadImages()
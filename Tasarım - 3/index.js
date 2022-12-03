const car = document.querySelector('.contents .car')
const carIMG = document.querySelector('.contents .car .carIMG')
const header = document.querySelector('.contents .header')
const logo = document.querySelector('.contents .header .content .up .logo')
const text = document.querySelector('.contents .header .content .up .text p')
const BackText = document.querySelector('.contents .header .content .down .textBack p')
const up = document.querySelector('.contents .header .content .up')
const down = document.querySelector('.contents .header .content .down')

function load() {
    window.onload = () => {
        setTimeout(() => {
            header.style.flex = '70%'
            car.style.flex = '30%'
            up.style.flex = '50%'
            logo.style.width = '6pc'
            logo.style.top = '50%'
            text.style.opacity = '1'
            text.style.visibility = 'visible'
            BackText.style.opacity = '1'
            BackText.style.visibility = 'visible'
        }, 2000);
    }
}load()

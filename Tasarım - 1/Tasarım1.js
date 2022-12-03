const img = document.querySelector('.img')

function image() {
    img.style.backgroundImage = 'url(./Pictures/porsche911.jpg)'
    img.style.backgroundSize = "100%"
    setTimeout(() => {
        img.style.backgroundImage = 'url(./Pictures/porsche911_2.jpg)'
        img.style.backgroundSize = "200%"
    }, 10000);

    setTimeout(() => {
        img.style.backgroundImage = 'url(./Pictures/porsche911_3.jpg)'
        img.style.backgroundSize = "100%"
    }, 20000);

    setTimeout(() => {
        return image()
    }, 30000);
} image()
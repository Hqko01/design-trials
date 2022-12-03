const loadPic = document.querySelector('.loadPic')
const page = document.querySelector('.page')

function pic() {
    window.onload = () => {
        setTimeout(() => {
            loadPic.style.opacity = '1'
            loadPic.style.top = '10%'
        }, 6000);
    }
}pic()


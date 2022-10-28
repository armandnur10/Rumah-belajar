let idx = 0
const textArray = [
    "Rumah Belajar",
    "Sahabat Al Fitrah"
]

setInterval(() => {
    document.title = textArray[idx++ % textArray.length]
}, 1500);
<<<<<<< HEAD
=======

const navHeader = document.querySelector('header')

window.addEventListener('scroll', e => {
    if(window.scrollY > 50) {
        navHeader.classList.add('on-scroll')
    }else {
        navHeader.classList.remove('on-scroll')
    }
})
>>>>>>> 350be7a9de1edef9e9e4b9123e7017f22bcde821

let idx = 0
const textArray = [
    "Rumah Belajar",
    "Sahabat Al Fitrah"
]

setInterval(() => {
    document.title = textArray[idx++ % textArray.length]
}, 1500);

const navHeader = document.querySelector('header')

window.addEventListener('scroll', e => {
    if(window.scrollY > 50) {
        navHeader.classList.add('on-scroll')
    }else {
        navHeader.classList.remove('on-scroll')
    }
})

const scriptURL = ''
        const form = document.forms['comment']
      
        form.addEventListener('submit', e => {
          e.preventDefault()
          fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => {
                console.log('Success!', response)
                document.getElementById("call-text").textContent = "Succes send the mail";
                document.getElementById("callout").style.right = "20px";
                form.reset()
            })
            .catch(error => {
                console.log('Success!', response)
                document.getElementById("call-text").textContent = "Succes send the mail";
                document.getElementById("callout").style.right = "20px";
                form.reset()
            })
        })

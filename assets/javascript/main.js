let idx = 0
const textArray = [
    "Rumah Belajar",
    "Sahabat Al Fitrah"
]

setInterval(() => {
    document.title = textArray[idx++ % textArray.length]
}, 1500);
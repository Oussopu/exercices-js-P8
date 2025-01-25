const myButton = document.getElementById("myButton")
const message = document.getElementById("message")

myButton.addEventListener('click', () => {
    message.innerHTML = "Bonjour, vous avez cliqué sur le bouton !"
})
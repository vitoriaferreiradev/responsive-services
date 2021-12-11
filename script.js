const button = document.querySelector('button.theme')

button.onclick = function changeTheme() {
    button.classList.toggle('fa-sun')
    document.body.classList.toggle('dark-theme')
}
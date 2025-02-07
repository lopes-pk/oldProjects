const buttonDarkMode = document.querySelector('#buttonDarkMode')
const iconDarkMode = document.querySelector('.icon-dark-mode')
const iconLightMode = document.querySelector('.icon-light-mode')
const $html = document.querySelector('html')

iconDarkMode.onclick = () =>{
    iconDarkMode.classList.add('hide')
    iconLightMode.classList.remove('hide')
    $html.classList.toggle('dark-mode')
}

iconLightMode.onclick = () =>{
    iconDarkMode.classList.remove('hide')
    iconLightMode.classList.add('hide')
    $html.classList.toggle('dark-mode')
}


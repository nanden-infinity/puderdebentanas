import HeaderElement from "./modules/header.js"

const header  = new HeaderElement('.container', 'header')

const modalContainer = document.querySelector('.modal');


const openModal = () =>{
   console.log('Hi Hello');
}

modalContainer.addEventListener('click', openModal)


// DEBUG VERIFICAR E REFATORAS O CODIGO ABAIXO

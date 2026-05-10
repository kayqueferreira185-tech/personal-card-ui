const botao = document.querySelector ('.botao-links');
const links = document.querySelector ('.redes');

botao.addEventListener('click',() =>{
 links.classList.toggle('mostrar-redes');
 if (links.classList.contains('mostrar-redes')){
    botao.textContent = 'ocultar'
 }else{
 botao.textContent ='Ver redes 👇';
 }
});

const botaoDark = document.querySelector ('.botao');
const body = document.querySelector ('body');

botaoDark.addEventListener('click',() =>{
   body.classList.toggle('body-dark-mode');

});
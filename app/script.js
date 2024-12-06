
/**
 * 
 */


//cambiar a descanso_corto
const btn_descanso_corto = document.querySelector(".btn__descanso__corto");
const body = document.body;

const imagen_principal = document.querySelector('.imagen_principal')

btn_descanso_corto.addEventListener('click', () => {


   body.style.background = 'linear-gradient(180deg, #0F725C 0%, #041832 48.44%, #01080E 100%)';
   imagen_principal.setAttribute('src', 'img/Camada 02.png');

})


//cambiar a enfoque

const btn_enfoque = document.querySelector(".btn_enfoque");
btn_enfoque.addEventListener('click', () => {
   body.style.background = ' linear-gradient(180deg, #8B1FF8 0%, #041832 48.44%, #01080E 100%)'
   imagen_principal.setAttribute('src', 'img/Camada 0 1.png')
})


// cambiar a descanso_largo
const btn__descanso__largo = document.querySelector('.btn__descanso__largo')

btn__descanso__largo.addEventListener('click', () => {

   body.style.background = 'linear-gradient(180deg, #1875E9 0%, #041832 48.44%, #01080E 100%)'
   imagen_principal.setAttribute('src', 'img/Camada 03.png')

})









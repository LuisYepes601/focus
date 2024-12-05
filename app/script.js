
/**
 * 
 */


//cambiar a descanso_corto
const btn_descanso_corto = document.querySelector(".btn__descanso__corto");
const body = document.body;

btn_descanso_corto.addEventListener('click', () => {

   body.style.background = 'linear-gradient(180deg, #0F725C 0%, #041832 48.44%, #01080E 100%)'
})


//cambiar a enfoque

const btn_enfoque = document.querySelector(".btn_enfoque");
btn_enfoque.addEventListener('click', () => {
   body.style.background = ' linear-gradient(180deg, #8B1FF8 0%, #041832 48.44%, #01080E 100%)'
})


// cambiar a descanso_largo
const btn__descanso__largo = document.querySelector('.btn__descanso__largo')

btn__descanso__largo.addEventListener('click', () => {

   body.style.background = 'linear-gradient(180deg, #1875E9 0%, #041832 48.44%, #01080E 100%)'

})



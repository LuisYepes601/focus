
/**
 * 
 */


//cambiar a descanso_corto
const btn_descanso_corto = document.querySelector(".btn__descanso__corto");
const body = document.body;
const btn_mod_oscuro = document.querySelector('.switch-modo__btn');
const imagen_principal = document.querySelector('.imagen_principal')
let estadoActual = 'enfoque';
const tituloSecciones = document.querySelector('.title');

function cambiarTiempo(minutos) {
   const tiempo = document.querySelector('.time').innerHTML = minutos
}

//Iniciar audio
const audio = document.querySelector('.switch__audio');
const obtenerAudio = document.querySelector('.audio')

function iniciarAudio() {
   obtenerAudio.play();
}

function pararAudio() {
   obtenerAudio.pause();
   obtenerAudio.currentTime = 0;
}

audio.addEventListener('change', () => {
   if (audio.checked) {
      iniciarAudio();
   } else {
      pararAudio();
   }
})




const estados = {
   descansoCorto: 'linear-gradient(180deg, #0F725C 0%, #041832 48.44%, #01080E 100%)',
   enfoque: 'linear-gradient(180deg, #8B1FF8 0%, #041832 48.44%, #01080E 100%)',
   descansoLargo: 'linear-gradient(180deg, #1875E9 0%, #041832 48.44%, #01080E 100%)'
};


btn_mod_oscuro.addEventListener('change', () => {
   if (btn_mod_oscuro.checked == true) {
      body.style.background = 'black'
   } else {
      body.style.background = estadoActual ? estados[estadoActual] : '';
   }
})

function cambiarSeccion(estado, img) {
   estadoActual = estado;
   body.style.background = btn_mod_oscuro.checked ? 'black' : estados[estado];
   imagen_principal.setAttribute('src', img);

   switch (estado) {
      case 'descansoCorto':
         tituloSecciones.innerHTML = '¿Qué tal tomar un respiro? <span>¡Haz una pausa corta!<span/>'
         break;
      case 'enfoque':
          tituloSecciones.innerHTML = 'Optimiza tu productividad, <span>sumérgete en lo que importa.</span>'
      break;
      case 'descansoLargo':
         tituloSecciones.innerHTML = 'Hora de volver a la superficie <span>Haz una pausa larga.<span/>'
         break;
      default:
         break;
   }

}
// secccion descanso corto
btn_descanso_corto.addEventListener('click', () => {

   cambiarSeccion('descansoCorto', 'img/Camada 02.png');
   cambiarTiempo('05:00')


})


//cambiar a enfoque

const btn_enfoque = document.querySelector(".btn_enfoque");
btn_enfoque.addEventListener('click', () => {

   cambiarSeccion('enfoque', 'img/Camada 0 1.png')
   cambiarTiempo('25:00')

})


// cambiar a descanso_largo
const btn__descanso__largo = document.querySelector('.btn__descanso__largo')

btn__descanso__largo.addEventListener('click', () => {
   cambiarSeccion('descansoLargo', 'img/Camada 03.png')
   cambiarTiempo('15:00')

})













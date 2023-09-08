const titulacionMenu = document.getElementById('menuTitulacion');
const titulacionBloque = document.getElementById('boqueTitulacion');

const certificacionMenu = document.getElementById('menuCertificacion');
const certificacionBloque = document.getElementById('bloqueCertificacion');

const titulacionLatamMenu = document.getElementById('menuTitulacionLatam');
const titulacionLatamBloque = document.getElementById('bloqueTitulacionLatam');

const tituloIntMenu = document.getElementById('menuTituloInt');
const tituloIntBloque = document.getElementById('bloqueTituloInt');

const certificadoParMenu= document.getElementById('menuCertificadoPar');
const certificadoparBloque = document.getElementById('boqueCertificadoPar');

const regularMenu = document.getElementById('menuRegular');
const regularBloque = document.getElementById('panelsStayOpen-collapseOne');

const art91Menu = document.getElementById('menuArt91');
const art91Bloque = document.getElementById('panelsStayOpen-collapseTwo');

const art52Menu = document.getElementById('menuArt52');
const art52Bloque = document.getElementById('panelsStayOpen-collapseThree');

const conCausaMenu = document.getElementById('menuConCausa');
const conCausaBloque = document.getElementById('panelsStayOpen-collapseFour');

const coachMenu = document.getElementById('menuCoach');
const coachBloque = document.getElementById('panelsStayOpen-collapseFive');

const trabajoMenu = document.getElementById('menuTrabajo');
const trabajoBloque = document.getElementById('panelsStayOpen-collapseSix');

const tiposIngresoSeMenu = document.getElementById('menuTiposIngresoSe');
const tiposIngresoSeBloque = document.getElementById('bloqueTiposIngresoSe');

const tramitesEscolaresMenu = document.getElementById('menuTramitesEscolares');
const tramitesEscolaresBloque = document.getElementById('bloqueTramitesEscolares');

const costosSeMenu = document.getElementById('menuCostosSe');
const costosSeBloque = document.getElementById('bloqueCostosSe');

const preguntas_fSeMenu = document.getElementById('menuPreguntas_fSe');
const preguntas_fSeBloque = document.getElementById('bloquePreguntas_fSe');

apartado();

const botonCerti = document.getElementById("botoncerti");

botonCerti.addEventListener("click", function(){
    var numLocal = 1;
    localStorage.setItem('numLocal', JSON.stringify( numLocal))
})

const botontitu = document.getElementById("botontitu");

botontitu.addEventListener("click", function(){
    var numLocal = 2;
    localStorage.setItem('numLocal', JSON.stringify( numLocal))
})

function apartado(){

var valorAlmacenado = JSON.parse(localStorage.getItem('numLocal'))
switch(valorAlmacenado){
    case 1:
        localStorage.clear('numLocal');    
    break;
    
    case 2:
        certificacionBloque.classList.remove('activo')
        certificacionMenu.classList.remove('activo')
        certificacionBloque.classList.add('noactivo')
        certificacionMenu.classList.add('noactivo')

        titulacionBloque.classList.remove('noactivo')
        titulacionMenu.classList.remove('noactivo')
        titulacionBloque.classList.add('activo')
        titulacionMenu.classList.add('activo')
        localStorage.clear('numLocal');    
               
        
    break;

    case 3:
        certificacionBloque.classList.remove('activo')
        certificacionMenu.classList.remove('activo')
        certificacionBloque.classList.add('noactivo')
        certificacionMenu.classList.add('noactivo')

        titulacionLatamBloque.classList.remove('noactivo')
        titulacionLatamMenu.classList.remove('noactivo')
        titulacionLatamBloque.classList.add('activo')
        titulacionLatamMenu.classList.add('activo')
        localStorage.clear('numLocal');       
        
    break;

    case 4:
        certificacionBloque.classList.remove('activo')
        certificacionMenu.classList.remove('activo')
        certificacionBloque.classList.add('noactivo')
        certificacionMenu.classList.add('noactivo')

        tituloIntBloque.classList.remove('noactivo')
        tituloIntMenu.classList.remove('noactivo')
        tituloIntBloque.classList.add('activo')
        tituloIntMenu.classList.add('activo')
        localStorage.clear('numLocal');       
    break;

    case 5:
        certificacionBloque.classList.remove('activo')
        certificacionMenu.classList.remove('activo')
        certificacionBloque.classList.add('noactivo')
        certificacionMenu.classList.add('noactivo')

        certificadoparBloque.classList.remove('noactivo')
        certificadoParMenu.classList.remove('noactivo')
        certificadoparBloque.classList.add('activo')
        certificadoParMenu.classList.add('activo')
        localStorage.clear('numLocal'); 
    break;

    case 6:
        regularMenu.classList.remove('collapsed')
        regularBloque.classList.add('show')
        localStorage.clear('numLocal');    
    break;

    case 7:
        art91Menu.classList.remove('collapsed')
        art91Bloque.classList.add('show')
        localStorage.clear('numLocal');    
    break;

    case 8:
        art52Menu.classList.remove('collapsed')
        art52Bloque.classList.add('show')
        localStorage.clear('numLocal');    
    break;

    case 9:
        conCausaMenu.classList.remove('collapsed')
        conCausaBloque.classList.add('show')
        localStorage.clear('numLocal');    
    break;

    case 10:
        coachMenu.classList.remove('collapsed')
        coachBloque.classList.add('show')
        localStorage.clear('numLocal');    
    break;

    case 11:
        trabajoMenu.classList.remove('collapsed')
        trabajoBloque.classList.add('show')
        localStorage.clear('numLocal');    
    break;

    case 12:
        
        localStorage.clear('numLocal');
    break;
    
    case 13:
        tiposIngresoSeBloque.classList.remove('activo')
        tiposIngresoSeMenu.classList.remove('activo')
        tiposIngresoSeBloque.classList.add('noactivo')
        tiposIngresoSeMenu.classList.add('noactivo')

        tramitesEscolaresBloque.classList.remove('noactivo')
        tramitesEscolaresMenu.classList.remove('noactivo')
        tramitesEscolaresBloque.classList.add('activo')
        tramitesEscolaresMenu.classList.add('activo')
        localStorage.clear('numLocal'); 
    break;
        
    case 14:
        tiposIngresoSeBloque.classList.remove('activo')
        tiposIngresoSeMenu.classList.remove('activo')
        tiposIngresoSeBloque.classList.add('noactivo')
        tiposIngresoSeMenu.classList.add('noactivo')

        costosSeBloque.classList.remove('noactivo')
        costosSeMenu.classList.remove('noactivo')
        costosSeBloque.classList.add('activo')
        costosSeMenu.classList.add('activo')
        localStorage.clear('numLocal'); 
    break;

    case 15:
        tiposIngresoSeBloque.classList.remove('activo')
        tiposIngresoSeMenu.classList.remove('activo')
        tiposIngresoSeBloque.classList.add('noactivo')
        tiposIngresoSeMenu.classList.add('noactivo')

        preguntas_fSeBloque.classList.remove('noactivo')
        preguntas_fSeMenu.classList.remove('noactivo')
        preguntas_fSeBloque.classList.add('activo')
        preguntas_fSeMenu.classList.add('activo')
        localStorage.clear('numLocal'); 
    break;
}
}





//Titulación

const titulacionMenu = document.getElementById('menuTitulacion');
const titulacionBloque = document.getElementById('boqueTitulacion');

const certificacionMenu = document.getElementById('menuCertificacion');
const certificacionBloque = document.getElementById('bloqueCertificacion');

const titulacionLatamMenu = document.getElementById('menuTitulacionLatam');
const titulacionLatamBloque = document.getElementById('bloqueTitulacionLatam');

const repgrafMenu = document.getElementById('menuRepGraf');
const repgrafBloque = document.getElementById('bloqueRepGraf');

const certificadoParMenu= document.getElementById('menuCertificadoPar');
const certificadoParBloque = document.getElementById('boqueCertificadoPar');

//Servicio social

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

//Titulación 
const botonCerti = document.getElementById("botoncerti");

botonCerti.addEventListener("click", function(){
    var numLocal = "certi";
    localStorage.setItem('numLocal', JSON.stringify(numLocal))
});

const botontitu = document.getElementById("botontitu");

botontitu.addEventListener("click", function(){
    var numLocal = "titu";
    localStorage.setItem('numLocal', JSON.stringify(numLocal))
});

const botontitulatam = document.getElementById("botontitulatam");

botontitulatam.addEventListener("click", function(){
    var numLocal = "titulatam";
    localStorage.setItem('numLocal', JSON.stringify(numLocal))
});

const botonrepgraf = document.getElementById("botonrepgraf");

botonrepgraf.addEventListener("click", function(){
    var numLocal = "repGraf";
    localStorage.setItem('numLocal', JSON.stringify(numLocal))
});

const botoncertpar = document.getElementById("botoncertpar");

botoncertpar.addEventListener("click", function(){
    var numLocal = "cerpar";
    localStorage.setItem('numLocal', JSON.stringify(numLocal))
});

//Convalidación

function apartado() {
    const valorAlmacenado = JSON.parse(localStorage.getItem('numLocal'));
    const clasesNoActivas = ['noactivo'];
    const clasesActivas = ['activo'];

    const elementos = {
        'certi': [],
        'titu': [['certificacion', 'titulacion']],
        'titulatam': [['certificacion', 'titulacionLatam']],
        'repGraf': [['certificacion', 'titulacion', 'repgraf']],
        'cerpar': [['certificacion', 'titulacion', 'certificadoPar']]
    };

    if (valorAlmacenado) {
        elementos[valorAlmacenado].forEach(seccion => {
            seccion.forEach(item => {
                const menuElemento = document.getElementById(`menu${item}`);
                const bloqueElemento = document.getElementById(`bloque${item}`);
                clasesActivas.forEach(clase => {
                    menuElemento.classList.remove(clase);
                    bloqueElemento.classList.remove(clase);
                });
                clasesNoActivas.forEach(clase => {
                    menuElemento.classList.add(clase);
                    bloqueElemento.classList.add(clase);
                });
            });
        });

        localStorage.clear('numLocal');
    }
}

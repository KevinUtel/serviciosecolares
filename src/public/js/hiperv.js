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


function apartado(){

var valorAlmacenado = JSON.parse(localStorage.getItem('numLocal'))
    switch(valorAlmacenado){
    case "certi":
        localStorage.clear('numLocal');    
    break;

    case "titu":
        certificacionBloque.classList.remove('activo');
        certificacionMenu.classList.remove('activo');
        certificacionBloque.classList.add('noactivo');
        certificacionMenu.classList.add('noactivo');

        titulacionBloque.classList.remove('noactivo');
        titulacionMenu.classList.remove('noactivo');
        titulacionBloque.classList.add('activo');
        titulacionMenu.classList.add('activo');

        titulacionLatamBloque.classList.remove('activo');
        titulacionLatamMenu.classList.remove('activo');
        titulacionLatamBloque.classList.add('noactivo');
        titulacionLatamMenu.classList.add('noactivo');

        repgrafBloque.classList.remove("activo")
        repgrafMenu.classList.remove("activo");
        repgrafBloque.classList.add("noactivo")
        repgrafMenu.classList.add("noactivo");
        
        certificadoParBloque.classList.remove("activo");
        certificadoParMenu.classList.remove("activo");
        certificadoParBloque.classList.add("noactivo");
        certificadoParMenu.classList.add("noactivo");
        
        localStorage.clear('numLocal');        

    break;

    case "titulatam":
        certificacionBloque.classList.remove('activo');
        certificacionMenu.classList.remove('activo');
        certificacionBloque.classList.add('noactivo');
        certificacionMenu.classList.add('noactivo');
    
        titulacionBloque.classList.remove('activo');
        titulacionMenu.classList.remove('activo');
        titulacionBloque.classList.add('noactivo');
        titulacionMenu.classList.add('noactivo');
    
        titulacionLatamBloque.classList.remove('noactivo');
        titulacionLatamMenu.classList.remove('noactivo');
        titulacionLatamBloque.classList.add('activo');
        titulacionLatamMenu.classList.add('activo');
    
        repgrafBloque.classList.remove("activo")
        repgrafMenu.classList.remove("activo");
        repgrafBloque.classList.add("noactivo")
        repgrafMenu.classList.add("noactivo");
        
        certificadoParBloque.classList.remove("activo");
        certificadoParMenu.classList.remove("activo");
        certificadoParBloque.classList.add("noactivo");
        certificadoParMenu.classList.add("noactivo");
            
        localStorage.clear('numLocal');   

    break;

    case "repGraf":
        certificacionBloque.classList.remove('activo');
        certificacionMenu.classList.remove('activo');
        certificacionBloque.classList.add('noactivo');
        certificacionMenu.classList.add('noactivo');
    
        titulacionBloque.classList.remove('activo');
        titulacionMenu.classList.remove('activo');
        titulacionBloque.classList.add('noactivo');
        titulacionMenu.classList.add('noactivo');
    
        titulacionLatamBloque.classList.remove('activo');
        titulacionLatamMenu.classList.remove('activo');
        titulacionLatamBloque.classList.add('noactivo');
        titulacionLatamMenu.classList.add('noactivo');
    
        repgrafBloque.classList.remove("noactivo")
        repgrafMenu.classList.remove("noactivo");
        repgrafBloque.classList.add("activo")
        repgrafMenu.classList.add("activo");
        
        certificadoParBloque.classList.remove("activo");
        certificadoParMenu.classList.remove("activo");
        certificadoParBloque.classList.add("noactivo");
        certificadoParMenu.classList.add("noactivo");
            
        localStorage.clear('numLocal');   
      
    break;

    case "cerpar":
        certificacionBloque.classList.remove('activo');
        certificacionMenu.classList.remove('activo');
        certificacionBloque.classList.add('noactivo');
        certificacionMenu.classList.add('noactivo');
    
        titulacionBloque.classList.remove('activo');
        titulacionMenu.classList.remove('activo');
        titulacionBloque.classList.add('noactivo');
        titulacionMenu.classList.add('noactivo');
    
        titulacionLatamBloque.classList.remove('activo');
        titulacionLatamMenu.classList.remove('activo');
        titulacionLatamBloque.classList.add('noactivo');
        titulacionLatamMenu.classList.add('noactivo');
    
        repgrafBloque.classList.remove("activo")
        repgrafMenu.classList.remove("activo");
        repgrafBloque.classList.add("noactivo")
        repgrafMenu.classList.add("noactivo");
        
        certificadoParBloque.classList.remove("noactivo");
        certificadoParMenu.classList.remove("noactivo");
        certificadoParBloque.classList.add("activo");
        certificadoParMenu.classList.add("activo");
            
        localStorage.clear('numLocal');  
    break;


    }
}





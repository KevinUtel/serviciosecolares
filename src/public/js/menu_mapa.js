const titulacion = document.getElementById('titulacion');
const serviciosocial = document.getElementById('serviciosocial');
const sees = document.getElementById('sees');
const recolecdocs = document.getElementById('recolecdocs');
const apostilla = document.getElementById('apostilla');
const directorio = document.getElementById('directorio');
const manuales = document.getElementById('manuales');
const preguntfrec = document.getElementById('preguntfrec');


   
function mostrarDocumento(x){
    var menu = x;
    switch(menu){
        case 1:
            serviciosocial.style.display = 'none';
            sees.style.display = 'none'
            recolecdocs.style.display = 'none';
            apostilla.style.display = 'none';
            directorio.style.display = 'none';
            manuales.style.display = 'none';
            preguntfrec.style.display = 'none';
            titulacion.style.display = 'block';
        break;
       
        case 2:
            titulacion.style.display = 'none';
            sees.style.display = 'none'
            recolecdocs.style.display = 'none';
            apostilla.style.display = 'none';
            directorio.style.display = 'none';
            manuales.style.display = 'none';
            preguntfrec.style.display = 'none';
            serviciosocial.style.display = 'block';
            break;

        case 3:
            titulacion.style.display = 'none';
            serviciosocial.style.display = 'none';
            recolecdocs.style.display = 'none';
            apostilla.style.display = 'none';
            directorio.style.display = 'none';
            manuales.style.display = 'none';
            preguntfrec.style.display = 'none';
            sees.style.display = 'block'
        break;

        case 4:
            titulacion.style.display = 'none';
            serviciosocial.style.display = 'none';
            sees.style.display = 'none'
            apostilla.style.display = 'none';
            directorio.style.display = 'none';
            manuales.style.display = 'none';
            preguntfrec.style.display = 'none';
            recolecdocs.style.display = 'block';

        break;

        case 5:
            titulacion.style.display = 'none';
            serviciosocial.style.display = 'none';
            sees.style.display = 'none'
            recolecdocs.style.display = 'none';
            directorio.style.display = 'none';
            manuales.style.display = 'none';
            preguntfrec.style.display = 'none';
            apostilla.style.display = 'block';
        break;

        case 6:
            titulacion.style.display = 'none';
            serviciosocial.style.display = 'none';
            sees.style.display = 'none'
            recolecdocs.style.display = 'none';
            apostilla.style.display = 'none';
            manuales.style.display = 'none';
            preguntfrec.style.display = 'none';
            directorio.style.display = 'block';
        break;
            
        case 7:
            titulacion.style.display = 'none';
            serviciosocial.style.display = 'none';
            sees.style.display = 'none'
            recolecdocs.style.display = 'none';
            apostilla.style.display = 'none';
            directorio.style.display = 'none';
            preguntfrec.style.display = 'none';
            manuales.style.display = 'block';
        break;

        case 8:
            titulacion.style.display = 'none';
            serviciosocial.style.display = 'none';
            sees.style.display = 'none'
            recolecdocs.style.display = 'none';
            apostilla.style.display = 'none';
            directorio.style.display = 'none';
            manuales.style.display = 'none';
            preguntfrec.style.display = 'block';
        break;
       
    }

}

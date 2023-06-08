const cardconster = document.getElementById('conster');
const cardCartPasant = document.getElementById('cartapas');
const cardHistAca = document.getElementById('historialA');
const cardEquivalencia = document.getElementById('equivalencia');
const cardRevalidacion = document.getElementById('credencial');
const cardTitInter = document.getElementById('tituloint');
const cardDiplomaMaster = document.getElementById('diplomaMaster');

const UtelHCostos =document.getElementById('UtelHCostos');
const UtelLCostos =document.getElementById('UtelLCostos');


   
function mostrarDocumento(x){
    var menu = x;
    switch(menu){
        case 1:
        cardCartPasant.style.display = 'none';
        cardHistAca.style.display = 'none'
        cardEquivalencia.style.display = 'none';
        cardRevalidacion.style.display = 'none';
        cardTitInter.style.display = 'none';
        cardconster.style.display = 'block';

        break;
       
        case 2:
            cardconster.style.display = 'none';
            cardHistAca.style.display = 'none'            
            cardEquivalencia.style.display = 'none';
            cardRevalidacion.style.display = 'none';
            cardTitInter.style.display = 'none';
            cardCartPasant.style.display = 'block';
        break;

        case 3:
            
            cardconster.style.display = 'none';
            cardCartPasant.style.display = 'none';
            cardEquivalencia.style.display = 'none';
            cardRevalidacion.style.display = 'none';
            cardTitInter.style.display = 'none';
            cardHistAca.style.display = 'block';
        break;

        case 4:
            cardconster.style.display = 'none';
            cardCartPasant.style.display = 'none';
            cardHistAca.style.display = 'none'
            cardRevalidacion.style.display = 'none';
            cardTitInter.style.display = 'none';
            cardEquivalencia.style.display = 'block';

        break;

        case 5:
            cardconster.style.display = 'none';
            cardCartPasant.style.display = 'none';
            cardHistAca.style.display = 'none'
            cardEquivalencia.style.display = 'none';
            cardTitInter.style.display = 'none';
            cardRevalidacion.style.display = 'block';
        break;

        case 6:
            cardconster.style.display = 'none';
            cardCartPasant.style.display = 'none';
            cardHistAca.style.display = 'none'
            cardEquivalencia.style.display = 'none';
            cardRevalidacion.style.display = 'none';
            cardDiplomaMaster.style.display = 'none';
            cardTitInter.style.display = 'block';
        break;

        case 7:
            cardconster.style.display = 'none';
            cardCartPasant.style.display = 'none';
            cardHistAca.style.display = 'none'
            cardEquivalencia.style.display = 'none';
            cardRevalidacion.style.display = 'none';
            cardTitInter.style.display = 'none';
            cardDiplomaMaster.style.display = 'block';
        break;
       
    }

}

function mostrarCosto(x){
    var menu = x;
    switch(menu){
        case 1:
        UtelHCostos.style.display = 'none';
        UtelLCostos.style.display = 'block';

        break;
       
        case 2:
        UtelLCostos.style.display = 'none';
        UtelHCostos.style.display = 'block';
        break;
       
    }

}
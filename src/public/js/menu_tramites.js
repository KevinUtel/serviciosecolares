const elementosTramite = [
    'conster',
    'cartapas',
    'historialA',
    'equivalencia',
    'credencial',
    'tituloint',
    'diplomaMaster'
];

const elementosCostos = [
    'UtelHCostos',
    'UtelLCostos'
];

function mostrarTramite(x) {
    elementosTramite.forEach((elemento, index) => {
        const card = document.getElementById(elemento);
        if (index + 1 === x) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

function mostrarCosto(x) {
    if (x === 1) {
        document.getElementById('UtelHCostos').style.display = 'none';
        document.getElementById('UtelLCostos').style.display = 'block';
    } else if (x === 2) {
        document.getElementById('UtelLCostos').style.display = 'none';
        document.getElementById('UtelHCostos').style.display = 'block';
    }
}
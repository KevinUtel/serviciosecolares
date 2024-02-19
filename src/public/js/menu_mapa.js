const elementosDocumento = [
    'titulacion',
    'serviciosocial',
    'sees',
    'recolecdocs',
    'apostilla',
    'directorio',
    'manuales',
    'preguntfrec'
];

function mostrarDocumento(x) {
    elementosDocumento.forEach((elemento, index) => {
        const documento = document.getElementById(elemento);
        if (index + 1 === x) {
            documento.style.display = 'block';
        } else {
            documento.style.display = 'none';
        }
    });
}
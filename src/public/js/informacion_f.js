
//TITULACION
const infoTitulacion = [

    {
    Titulo: '¿Qué es la certificación?', 
    Texto: 'Es el proceso por medio del cual Utel expide el certificado de término de estudios correspondiente a los programas de licenciatura, maestría y doctorado, de aquellos alumnos que han cubierto el 100% de su avance curricular.', 
    id: '0'
    },

    {
    Titulo: '¿Qué es la titulación?', 
    Texto: `
    Es una distinción dada por las instituciones educativas públicas y privadas , después de la terminación exitosa de algún programa de estudios.
    <br/><br/>
    Todos los programas (licenciatura, maestría, doctorado) de Utel cuentan con el registro correspondiente ante la Secretaría de Educación Pública (SEP). Por lo cual, al finalizar el programa de estudios, los alumnos tienen derecho a recibir un título. Utel realiza el registro de título correspondiente ante la Dirección General de Profesiones para que el egresado pueda tramitar la cédula profesional. Este es un trámite que solo el interesado puede realizar.
    `, 
    id: '1'
    },

    {
    Titulo: '¿Qué es la titulación LATAM?', 
    Texto: 'Es una distinción dada por Utel, después de la terminación exitosa de algún programa de estudios.</br> Todos los programas (licenciatura, maestría, doctorado) de Utel cuentan con el registro correspondiente ante la Secretaría de Educación (SEP) por lo cual al finalizar nuestros alumnos tienen derecho a recibir un título.', 
    id: '2'
    },

    {
    Titulo: '¿Qué es el Diploma intermedio?', 
    Texto: `
    El Diploma intermedio es un documento con valor curricular que avalará los conocimientos, habilidades y aptitudes académicas adquiridas al cursar la licenciatura hasta el momento 
    de su expedición.
    <br/>
    Dicha acreditación reconoce tu esfuerzo académico y te apoya en tu integración al mercado laboral o a la mejora de tu crecimiento profesional, optimizando así la inversión en tus 
    estudios.

    `,
     
    id: '3'
    },

    {
    Titulo: '¿Qué es la representación gráfica de titulo Utel?', 
    Texto: `
    
    La representación gráfica es un documento emitido en formato físico de un título, este título únicamente tiene validez simbólica, contiene datos del grado académico y del egresado.

    `,
        
    id: 'rg'
    },

    {
    Titulo: '¿Qué es la certificación?', 
    Texto: 'Es el proceso por medio del cual la Utel expide el certificado de término de estudios correspondiente a los programas de licenciatura, maestría y doctorado, de aquellos alumnos que han cubierto el 100% de su avance curricular.', 
    id: '4'
    },

    {
    Titulo: '¿Como es un proceso de titulación?', 
    Imagen: '.',
    Subtitulo: 'El proceso consta de:',   
    Texto: `
    
    1.-Certificado electrónico: tarda aproximadamente 2 meses en obtenerse autenticado. </br></br>

    2.- Registro de título electrónico: después del envío del certificado electrónico autenticado, se gestiona 
    el registro de su título electrónico ante la SEP, este trámite tarda aproximadamente 1 mes y a partir de 
    que se notifica que concluyó, el alumno puede tramitar la cédula profesional. </br></br>
    
    3. Expedición de constancia de título electrónico: una vez que concluye el registro del título, se comienza 
    la gestión de la constancia de título electrónico la cual tarda un tiempo aproximado de 1 mes. </br></br>
                              
    4.- Expedición de representación gráfica (documento físico simbólico): Tarda un tiempo aproximado de 2 meses. </br></br>
    
    El alumno deberá contar con el 100% de los créditos académicos y estar en estatus de egresado, haber concluido y liberado 
    el servicio social (En caso de maestría no es necesario) no tener saldos pendientes, documentación completa y contar con pago colegiatura final. </br></br>


    `, 
    aviso: 'El inicio del proceso también depende de la fecha en que finalizó sus materias y su cambio de estatus a egresado.',
    id: 'procesotitnacional'
    },




    //Certificación Mexico
    {
    Titulo: 'Licenciatura', 
    Texto:`
    El proceso de certificación demora aproximadamente 2 meses y el documento se comparte en digital en archivo pdf y xml. </br></br>
                
    Se deberán cubrir los siguientes requisitos: </br></br>

    ● 100% de créditos en avance curricular </br>
    ● Estatus de Egresado </br>
    ● No tener saldos pendientes </br>
    ● Pago colegiatura final o pago del documento </br>
    ●Documentación completa (acta de nacimiento, certificado de bachillerato o dictamen en caso de revalidación 
    o equivalencia).`, 
    id: 'clicenciatura'

            

    },

    {
    Titulo: 'Maestría', 
    Texto:`
    El proceso de certificación demora aproximadamente 2 meses y el documento se comparte en digital en archivo pdf y xml. </br></br>
                
    Se deberán cubrir los siguientes requisitos: </br></br>

    ● 100% de créditos en avance curricular </br>
    ● Estatus de Egresado </br>
    ● No tener saldos pendientes </br>
    ● Colegiatura final o pago del documento </br>
    ●Documentación completa (acta de nacimiento, certificado de licenciatura o dictamen en caso de revalidación o equivalencia).
        
    
    `, 
    id: 'cmaestria'
    },
    
    {
    Titulo: 'Doctorado', 
    Texto:`
    El proceso de certificación demora aproximadamente 2 meses y el documento se comparte en digital en archivo pdf y xml. </br></br>
                
    Se deberán cubrir los siguientes requisitos:</br></br>
    
    ● 100% de créditos en avance curricular </br>
    ● Estatus de Egresado </br>
    ● No tener saldos pendientes </br>
    ● Colegiatura final o pago del documento </br>
    ● Documentación completa (acta de nacimiento, certificado de maestría o dictamen en caso de revalidación o equivalencia, constancia de idioma inglés)
    `, 
    id: 'cdoctorado'
    },

    //Titulación México

    {
    Titulo: 'Licenciatura', 
    Texto:`
     El proceso de titulación se divide, en registro de título y expedición de constancia de autenticacion del titulo electrónico. </br></br>
                            
        Registro de título: demora aproximadamente 1 mes, se notifica por correo electrónico una vez que concluye y a
        partir de este momento se puede iniciar el trámite de cédula profesional. </br></br>

        Título digital: demora aproximadamente 1 mes, se comparte en digital en archivo pdf y xml.</br></br>

        Se deberán cubrir los siguientes requisitos:</br>

        ● 100% de créditos en avance curricular </br>
        ● Estatus de Egresado </br>
        ● No tener saldos pendientes </br>
        ● Colegiatura final</br>
        ● Servicio social liberado </br>
        ●Documentación completa (acta de nacimiento, certificado de bachillerato o dictamen en caso de revalidación o equivalencia).

        `, 
    id: 'tlicenciatura'
    },

    {
    Titulo: 'Maestría', 
    Texto:`
    El proceso de titulación se divide ,en registro de título y expedición de constancia de autenticacion del titulo electrónico. </br></br>
                    
    Registro de título: demora aproximadamente 1 mes, se notifica por correo electrónico una vez que concluye y a partir de este 
    momento se puede iniciar el trámite de cédula profesional </br></br>
    
    Título digital: demora aproximadamente 1 mes, se comparte en digital en archivo pdf y xml. </br></br>

    Se deberán cubrir los siguientes requisitos:</br>

    ● 100% de créditos en avance curricular </br>
    ● Estatus de Egresado </br>
    ● No tener saldos pendientes</br>
    ● Colegiatura final</br>
    ●Documentación completa (acta de nacimiento, certificado de licenciatura o dictamen en caso de revalidación o 
    equivalencia)</br>
    
    `, 
    id: 'tmaestria'
    },
    
    {
    Titulo: 'Doctorado', 
    Texto:`
    El proceso de titulación se divide ,en registro de título y expedición de constancia de autenticacion del titulo electrónico.</br></br>
                  
    Registro de título: demora aproximadamente 1 mes, se notifica por correo electrónico una vez que concluye y a partir de este 
    momento se puede iniciar el trámite de cédula profesional </br></br>

    Título digital: demora aproximadamente 1 mes, se comparte en digital en archivo pdf y xml. </br></br>

    Se deberán cubrir los siguientes requisitos:</br>

    ● 100% de créditos en avance curricular </br>
    ● Estatus de Egresado </br>
    ● No tener saldos pendientes </br>
    ● Colegiatura final </br>
    ●Documentación completa (acta de nacimiento, certificado de licenciatura  o dictamen en 
    caso de revalidación o equivalencia, constancia de idioma inglés)
    Para titulación directa promedio mínimo de 9.5.</br>
    `, 
    id: 'tdoctorado'
    },

    //Titulación LATAM

    {
    Titulo: 'Licenciatura LATAM', 
    Texto:`

    Se deberán cubrir los siguientes requisitos:</br>

    ● 100% de créditos en avance curricular </br>
    ● Estatus de Egresado </br>
    ● No tener saldos pendientes </br>
    ● Colegiatura final</br>
    ● Servicio social liberado en caso de revalidación</br>
    ●Documentación completa (acta de nacimiento, certificado de bachillerato o dictamen en caso de revalidación o equivalencia).

    `, 
    id: 'tlatamlicenciatura'
    },

    {
    Titulo: 'Maestría', 
    Texto:`


    Se deberán cubrir los siguientes requisitos:</br>

    ● 100% de créditos en avance curricular </br>
    ● Estatus de Egresado </br>
    ● No tener saldos pendientes </br>
    ● Colegiatura final </br>
    ●Documentación completa (acta de nacimiento, certificado de bachillerato o dictamen en caso de revalidación o equivalencia).</br>
    ● Trabajo de grado (En caso de no contar con él, no se continúa con la titulación)
    
    `, 
    id: 'tlatammaestria'
    },

    {
    Titulo: 'Doctorado', 
    Texto:`

    Se deberán cubrir los siguientes requisitos:</br>

    ● 100% de créditos en avance curricular </br>
    ● Estatus de Egresado </br>
    ● No tener saldos pendientes </br>
    ● Colegiatura final</br>
    ●Documentación completa (acta de nacimiento, certificado de bachillerato o dictamen en caso de revalidación o equivalencia).</br>
    ● Trabajo de grado (En caso de no contar con él, no se continúa con la titulación)
    `, 
    id: 'tlatamdoctorado'
    },
    


]

//Bloque ejemplo e imagen
const bloqueImagenTexto = [

    //Certificación Mexico
    {
    idtp: 'clicenciatura',
    ido: 'ejemplo-cer-lic',
    img: './img/titulacion/licenciatura/nacional/certificadolic.png',
    idoh: 'offcanvasBottomLabelEjemplo-cer-lic',
    Titulo:'Certificado total de Licenciatura',
    Texto: `
    <strong class="py-3 px-3" style="text-align: center;">Características del certificado</strong>
    Es un documento oficial que se otorga al alumno que haya acreditado el 100% de los créditos del plan de estudios y que requiere ser autenticado por la Secretaría de Educación Pública.</br>   </br>   

    El documento contiene:</br>   
    Datos generales del egresado </br>   
    Programa educativo</br>   
    Número de asignaturas aprobadas. </br>   
    Total de créditos que consta el programa educativo. </br>   
    Periodo en el que aprobó las asignaturas.</br>   </br>   


    Para obtenerlo se debe tener el expediente digital completo, no contar con saldos pendientes y el pago del documento.
    `, 
    id: 'btcl'
    },

    {
    idtp: 'cmaestria', 
    ido: 'ejemplo-cer-mae',
    img: 'img/titulacion/maestria/nacional/certificadomae.png',
    idoh: 'offcanvasBottomLabelEjemplo-cer-mae',
    Titulo:'Certificado total de Maestría',
    Texto: `
    <strong class="py-3 px-3" style="text-align: center;">Características del certificado</strong>
    
    Es un documento oficial que se otorga al alumno que haya acreditado el 100% de los créditos del plan de estudios y que requiere ser autenticado por la Secretaría de Educación Pública.</br>   </br>   

    El documento contiene:</br>   
    Datos generales del egresado </br>   
    Programa educativo</br>   
    Número de asignaturas aprobadas. </br>   
    Total de créditos que consta el programa educativo. </br>   
    Periodo en el que aprobó las asignaturas.</br>   </br>   


    Para obtenerlo se debe tener el expediente digital completo, no contar con saldos pendientes y el pago del documento.

    `, 
    id: 'btcm'
    },
    
    {
    idtp: 'cdoctorado', 
    ido: 'ejemplo-cer-doc',
    img: 'img/titulacion/doctorado/nacional/certificadodoc.png',
    idoh: 'offcanvasBottomLabelEjemplo-cer-doc',
    Titulo:'Certificado total de Doctorado',
    Texto: `
    <strong class="py-3 px-3" style="text-align: center;"> Características del certificado</strong>
    Es un documento oficial que se otorga al alumno que haya acreditado el 100% de los créditos del plan de estudios y que requiere ser autenticado por la Secretaría de Educación Pública.</br>   </br>   

    El documento contiene:</br>   
    Datos generales del egresado </br>   
    Programa educativo</br>   
    Número de asignaturas aprobadas. </br>   
    Total de créditos que consta el programa educativo. </br>   
    Periodo en el que aprobó las asignaturas.</br>   </br>   


    Para obtenerlo se debe tener el expediente digital completo, no contar con saldos pendientes y el pago del documento.

    `, 
    id: 'btcd'
    },

    //Titulación Mexico
    {
    idtp: 'tlicenciatura', 
    ido: 'ejemplo-tit-lic',
    img: 'img/titulacion/licenciatura/nacional/titulolic.png',
    idoh: 'offcanvasBottomLabelEjemplo-tit-lic',
    Titulo:'Titulo de Licenciatura',
    Texto: `
    <strong class="py-3 px-3"style="text-align: center;"> Características del titulo electrónico</strong>

    Documento que se otorga al alumno que haya acreditado el 100% de los créditos del plan de estudios de Licenciatura y que requiere ser autenticado por la Secretaría de Educación Pública.<br/><br/>

    El título profesional  avala que se ha  cursado estudios de nivel superior y acreditado satisfactoriamente las evaluaciones correspondientes. Por lo tanto se posee los conocimientos necesarios para practicar una  profesión.<br/><br/>

    Para obtenerlo se debe tener expediente digital completo, servicio social liberado, avance curricular al 100% (con estatus de egresado) y pago de la colegiatura final.


    `, 
    id: 'bttl'
    },

    {
    idtp: 'tmaestria', 
    ido: 'ejemplo-tit-mae',
    img: 'img/titulacion/maestria/nacional/titulomae.png',
    idoh: 'offcanvasBottomLabelEjemplo-tit-mae',
    Titulo:'Titulo de Maestria',
    Texto: `
    <strong class="py-3 px-3" style="text-align: center;"> Características del titulo electrónico</strong>
    Documento que se otorga al estudiante que haya acreditado el 100% de los créditos del plan de estudios de Licenciatura y que 
    requiere ser autenticado por la Secretaría de Educación Pública. </br></br>
    Un título profesional es un documento que avala que has cursado estudios de 
    nivel superior y acreditado satisfactoriamente las 
    evaluaciones correspondientes y que, por lo tanto, posees los 
    conocimientos necesarios para practicar tu profesión.</br></br>
    Para obtenerlo debes tener tu expediente digital completo, avance curricular al 100% (Con estatus de egresado) y pago de colegiatura final.</br></br>`, 
    id: 'bttm'
    },
    
    {
    idtp: 'tdoctorado', 
    ido: 'ejemplo-tit-doc',
    img: 'img/titulacion/doctorado/nacional/titulodoc.png',
    idoh: 'offcanvasBottomLabelEjemplo-tit-doc',
    Titulo:'Titulo de Doctorado',
    Texto: `
    <strong class="py-3 px-3" style="text-align: center;"> Características del titulo electrónico</strong>
    Documento que se otorga al estudiante que haya acreditado el 100% de los créditos del plan de estudios de Licenciatura y que 
    requiere ser autenticado por la Secretaría de Educación Pública. </br></br>
    Un título profesional es un documento que avala que has cursado estudios de 
    nivel superior y acreditado satisfactoriamente las 
    evaluaciones correspondientes y que, por lo tanto, posees los 
    conocimientos necesarios para practicar tu profesión.</br></br>
    Para obtenerlo debes tener tu expediente digital completo, constancia de inglés, avance curricular al 100% (Con estatus de egresado) y pago de colegiatura final.</br></br>`, 
    id: 'bttd'
    },

    //Certificación LATAM
    {
    idtp: 'tlatamlicenciatura', 
    ido: 'ejemplo-tit-latam-lic',
    img: 'img/titulacion/licenciatura/nacional/titulolic.png',
    img_carousel:`
    <div class="carousel-item active">
    <img src="img/titulacion/licenciatura/nacional/certificadolic.png" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
    <img src="img/titulacion/licenciatura/nacional/titulolic.png" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
    <img src="img/titulacion/apostille.png" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
    <img src="img/titulacion/cpa.png " class="d-block w-100" alt="...">
    </div>   
    `,
    idoh: 'offcanvasBottomLabelejemplo-tit-latam-lic',
    idc: 'carouselliclatam',
    Titulo:'Titulación licenciatura LATAM',
    Texto: `
    <strong class="py-3 px-3" style="text-align: center;"> Proceso</strong>
    
    1.-Certificado electrónico: 2 meses en obtenerse autenticado.
    </br></br>
    2.-Expedición de constancia de título electrónico: Tiempo aproximado de 2 meses.
    </br></br>
    3.-Apostilla de título digital: el proceso demora de 60 a 90 días hábiles.
    </br></br>
    4.-Expedición de representación gráfica de titulo Utel (documento físico simbólico): Tiempo aproximado de 2 meses.
    </br></br>
    5.-Certificado de programa académico: Tiempo estimado: 30 días hábiles.
    </br></br>
    6.-Envío internacional: 10 días a partir de que se cuente con la documentación elaborada.
    `, 
    id: 'btlataml'
    
    },

    {
    idtp: 'tlatammaestria', 
    ido: 'ejemplo-tit-latam-mae',
    img: 'img/titulacion/licenciatura/nacional/titulolic.png',
    img_carousel:`
    <div class="carousel-item active">
    <img src="img/titulacion/maestria/nacional/certificadomae.png" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
    <img src="img/titulacion/maestria/nacional/titulomae.png" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
    <img src="img/titulacion/apostille.png" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
    <img src="img/titulacion/cpa.png " class="d-block w-100" alt="...">
    </div>   
    `,
    idoh: 'offcanvasBottomLabelejemplo-tit-latam-lic',
    idc: 'carouselmaelatam',
    Titulo:'Titulación Maestría LATAM<',
    Texto: `
    <strong class="py-3 px-3" style="text-align: center;"> Proceso</strong></br></br>
    1.-Certificado electrónico: 2 meses en obtenerse autenticado.
    </br></br>
    2.-Expedición de constancia de título electrónico: Tiempo aproximado de 2 meses.
    </br></br>
    3.-Apostilla de título digital: el proceso demora de 60 a 90 días hábiles.
    </br></br>
    4.-Expedición de representación gráfica de titulo Utel (documento físico simbólico): Tiempo aproximado de 2 meses.
    </br></br>
    5.-Certificado de programa académico: Tiempo estimado: 30 días hábiles.
    </br></br>
    6.-Envío internacional: 10 días a partir de que se cuente con la documentación elaborada.
    </br></br>
    Es importante contar con el trabajo de grado realizado, de lo contrario el trámite se detiene.
    `, 
    id: 'btlatamm'
    
    },

    {
    idtp: 'tlatamdoctorado', 
    ido: 'ejemplo-tit-latam-doc',
    img: 'img/titulacion/titulo.png',
    img_carousel:`
    <div class="carousel-item active">
    <img src="img/titulacion/doctorado/nacional/certificadodoc.png" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
    <img src="img/titulacion/doctorado/nacional/titulodoc.png" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
    <img src="img/titulacion/apostille.png" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
    <img src="img/titulacion/cpa.png" class="d-block w-100" alt="...">
    </div>   
    `,
    idoh: 'offcanvasBottomLabelejemplo-tit-latam-lic',
    idc: 'carouseldoclatam',
    Titulo:'Titulación Doctorado LATAM',
    Texto: `
    <strong class="py-3 px-3" style="text-align: center;"> Proceso</strong></br></br>
    1.-Certificado electrónico: 2 meses en obtenerse autenticado.
    </br></br>
    2.-Expedición de constancia de título electrónico: Tiempo aproximado de 2 meses.
    </br></br>
    3.-Apostilla de título digital: el proceso demora de 60 a 90 días hábiles.
    </br></br>
    4.-Expedición de representación gráfica de titulo Utel (documento físico simbólico): Tiempo aproximado de 2 meses.
    </br></br>
    5.-Certificado de programa académico: Tiempo estimado: 30 días hábiles.
    </br></br>
    6.-Envío internacional: 10 días a partir de que se cuente con la documentación elaborada.
    </br></br>
    Es importante contar con el trabajo de grado realizado, de lo contrario el trámite se detiene.
    `, 
    id: 'btlatamd'
    
    },
]


//Aviso
const InfoAvisoRojo = [
    
    {

    Texto: `
    
    Es importante aclarar que si no se cuenta con un expediente digital en el archivo Utel y no se cumple con alguno de los estatutos mencionados, el proceso de elaboración de certificado digital es DETENIDO. Apegados al acuerdo 17/11/17 artículo 62 y 63 donde se indica que el área de Servicios Escolares es la responsable de la revisión física de la documentación de todo estudiante evitando y detectando así desviaciones que puedan tener un impacto.
    <br/><br/>
    Cabe destacar que si el egresado cumple con todos los puntos antes mencionados el proceso continúa.
    `,
    id: 'avisolic' 
    }


]


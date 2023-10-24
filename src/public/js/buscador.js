const pfTitulacionMenu = document.getElementById('menuPreguntasFrecuentesTitulacion');
const pfTulacionBloque = document.getElementById('bloquePreguntasFrecuentesTitulacion');

const pfServicioSocialMenu = document.getElementById('menuPreguntasFrecuentesServicioSocial');
const pfServicioSocialBloque = document.getElementById('bloquePreguntasFrecuentesServicioSocial');

const pfControlDocumentalMenu = document.getElementById('menuPreguntasFrecuentesControlDocumental');
const pfControlDocumentalBloque = document.getElementById('bloquePreguntasFrecuentesControlDocumental');

const pfFrecuentesEscolaresMenu = document.getElementById('menuPreguntasFrecuentesEscolares');
const pfFrecuentesEscolaresBloque = document.getElementById('bloquePreguntasFrecuentesEscolares');

const pfExitoMenu = document.getElementById('menuPreguntasFrecuentesExito');
const pfExitoBloque = document.getElementById('bloquePreguntasFrecuentesExito');





const preguntasDF = [

    //Titulación
    {nombre: '¿Se puede solicitar un certificado total sin servicio social?', 
    valor: 'onclick="selecNum(1)"', 
    id: '#spsuctsss'},

    {nombre: '¿Cuanto tiempo dura el tramite de titulación?', 
    valor: 'onclick="selecNum(1)"', 
    id: '#ctdetdt'},

    {nombre: '¿Qué documentación es necesaria para el trámite de titulación?', 
    valor: 'onclick="selecNum(1)"', 
    id: '#ceecdpdt'},

    {nombre: '¿Cuál es el costo de la colegiatura final?', 
    valor: 'onclick="selecNum(1)"', 
    id: '#ctdetdt'},

    {nombre: '¿Qué hacer si un alumno no quiere realizar trámite de máster a maestría?', 
    valor: 'onclick="selecNum(1)"', 
    id: '#qhsuanqrtdmam'},
    
  
    //Servicio social 

    {nombre: '¿Qué necesito para realizar mi servicio social?', 
    valor: 'onclick="selecNum(2)"', 
    id: '#RequisitosSS'},

    {nombre: '¿Dónde puedo realizar el servicio social?', 
    valor: 'onclick="selecNum(2)"', 
    id: '#DondeRealizarSS'},

    {nombre: '¿Qué actividades debo realizar en la empresa donde haré mi servicio social?',
     valor: 'onclick="selecNum(2)"', 
     id: '#ActividadesSS'},

    {nombre: '¿Quién tiene qué firmar mis documentos?', 
    valor: 'onclick="selecNum(2)"', 
    id: '#FirmasDocsSS'},

    {nombre: '¿Cuentan con algún listado de empresas en donde pueda ver opciones para realizar el servicio social?', 
    valor: 'onclick="selecNum(2)"', 
    id: '#ListaEmpresasSS'},

    {nombre: '¿Si elegí una empresa del listado de convenios, ¿qué tengo que hacer?', 
    valor: 'onclick="selecNum(2)"', 
    id: '#conveniosProcedimientoSS'},

    {nombre: '¿Con quién me dirijo para registrar mi servicio social?', 
    valor: 'onclick="selecNum(2)"', 
    id: '#ResponsableSS'},

    {nombre: '¿Puedo hacer el servicio social en la empresa en la que laboro?', 
    valor: 'onclick="selecNum(2)"', 
    id: '#SSTrabajoLaborando'},

    {nombre: '¿Cuántas horas tengo que cubrir para liberar el servicio social?', 
    valor: 'onclick="selecNum(2)"', 
    id: '#HorasSS'},

    {nombre: '¿Puedo hacer las horas en un tiempo menor?', 
    valor: 'onclick="selecNum(2)"', 
    id: '#HorasMenosSS'},

    {nombre: '¿Yo trabajo en una Institución de Gobierno, ¿también tengo que hacer servicio social?', 
    valor: 'onclick="selecNum(2)"', 
    id: '#ART91SS'},

    {nombre: 'Tengo 60 años, ¿qué hago para liberar el servicio social?', 
    valor: 'onclick="selecNum(2)"', 
    id: '#ART52SS'},

    {nombre: '¿Soy una persona incapacitada para realizar el servicio social, ¿Qué necesito para liberarlo?', 
    valor: 'onclick="selecNum(2)"', 
    id: '#ART52SSDiscapacidad'},

    {nombre: '¿Me gustaría saber si la empresa donde quiero hacer mi servicio social tiene convenio con ustedes?', 
    valor: 'onclick="selecNum(2)"', 
    id: '#VerificarConvenio'},

    {nombre: 'Inicié mi servicio social desde hace tiempo pero no le avisé a nadie, ¿qué puedo hacer?', 
    valor: 'onclick="selecNum(2)"', 
    id: '#SSsinNotificar'},

    {nombre: 'Tengo ya tiempo trabajando para una empresa privada, ¿puedo liberar mi servicio social por experiencia profesional?', 
    valor: 'onclick="selecNum(2)"', 
    id: '#SSExpLaboral'},

    {nombre: 'Si yo entré por equivalencia, ¿ya no tengo que hacer servicio social?', 
    valor: 'onclick="selecNum(2)"', 
    id: '#EquivalenciaSS'},

    {nombre: 'Estoy estudiando una segunda licenciatura, yo ya hice el servicio social cuando estudiaba esa licenciatura, ¿Es necesario volver a hacerlo?',
     valor: 'onclick="selecNum(2)"', 
     id: '#RevalidaSS'},

    {nombre: '¿Puedo poner en pausa mi servicio social?', 
    valor: 'onclick="selecNum(2)"', 
    id: '#PausaSS'},


    {nombre: '¿Puedo hacer el servicio social en UTEL?', 
    valor: 'onclick="selecNum(2)"', 
    id: '#SSUTEL'},

    //Control documental
    {nombre: '¿Qué es una dictaminación de un documento?', 
    valor: 'onclick="selecNum(3)"', 
    id: '#qeuddud'},

    {nombre: '¿Qué documentos requiren legalización?', 
    valor: 'onclick="selecNum(3)"', 
    id: '#qdrl'},

    {nombre: '¿Dónde puede legalizar un documento?', 
    valor: 'onclick="selecNum(3)"', 
    id: '#dplud'},

    {nombre: '¿Otra persona puede recoger mi documentación?', 
    valor: 'onclick="selecNum(3)"', 
    id: '#opprmd'},

    {nombre: '¿Qué hacer si se identifica un CURP duplicado?', 
    valor: 'onclick="selecNum(3)"', 
    id: '#qhssiucd'},

    //Escolares

    {nombre: 'Constancia de estudios', 
    valor: 'onclick="selecNum(4)"', 
    id: '#conses'},

    {nombre: 'Documentos para revalidación', 
    valor: 'onclick="selecNum(4)"', 
    id: '#docrev'},

    {nombre: '¿Se puede agregar a una constancia de termino algo referente a la titulación?', 
    valor: 'onclick="selecNum(4)"', 
    id: '#spaaucdtaralt'},

    {nombre: 'Alumno no recibe documento solicitado', 
    valor: 'onclick="selecNum(4)"', 
    id: '#anrds'},

    {nombre: 'Se puede solicitar un documento en físico', 
    valor: 'onclick="selecNum(4)"', 
    id: '#spsudenf'},


    //Éxito estudiantil
    {nombre: '¿Cómo realizo un cambio de Licenciatura?', 
    valor: 'onclick="selecNum(5)"', 
    id: '#crucdl'},

    {nombre: '¿Cómo puedo ver el avance curricular?', 
    valor: 'onclick="selecNum(5)"', 
    id: '#cpveac'},

    {nombre: 'Requisitos de la jornada Super intensiva para Licenciatura', 
    valor: 'onclick="selecNum(5)"', 
    id: '#rdljsipl'},

    {nombre: '¿Cómo ingreso al Sistema de Información Universitaria (SIU)?', 
    valor: 'onclick="selecNum(5)"', 
    id: '#ciasdiu'},

    {nombre: 'Pago de incorporación SEP', 
    valor: 'onclick="selecNum(5)"', 
    id: '#pdis'},

 
    ]

    const formulario = document.querySelector('#formulario');
    const resultado = document.querySelector('#resultado')
    const filtrar = ()=>{
    
    resultado.innerHTML = '';

    const texto = formulario.value.toLowerCase();

        if (texto == ''){
            resultado.style.display = 'none';
        }

        for (let preguntaDF of preguntasDF ){

            let nombre = preguntaDF.nombre.toLowerCase();
            if(nombre.indexOf(texto) !== -1){
            resultado.innerHTML += `                              
            <a href="${preguntaDF.id}"><li class="menuBuscador p-2" style="list-style: none; " id="preguntaBusqueda" ${preguntaDF.valor}> ${preguntaDF.nombre} </li> </a>     
            `
            }
        }

        if(resultado.innerHTML === ''){
            resultado.innerHTML += `
            <li class="menuBuscador" style="list-style: none;"> No existen resultados... </li>
            `
        }

        if (texto !== ''){
            resultado.style.display = 'block';
        }

    }

    formulario.addEventListener('keyup', filtrar)
    
    filtrar();

    function selecNum(Num){
        
        switch(Num){
            case 1:

            pfServicioSocialMenu.classList.remove('activo')
            pfServicioSocialBloque.classList.remove('activo')
            pfServicioSocialMenu.classList.add('noactivo')
            pfServicioSocialBloque.classList.add('noactivo')

            pfControlDocumentalBloque.classList.remove('activo')
            pfControlDocumentalMenu.classList.remove('activo')
            pfControlDocumentalBloque.classList.add('noactivo')
            pfControlDocumentalMenu.classList.add('noactivo')
             
            pfFrecuentesEscolaresBloque.classList.remove('activo')
            pfFrecuentesEscolaresMenu.classList.remove('activo')
            pfFrecuentesEscolaresBloque.classList.add('noactivo')
            pfFrecuentesEscolaresMenu.classList.add('noactivo')

            pfExitoBloque.classList.remove('activo')
            pfExitoMenu.classList.remove('activo')
            pfExitoBloque.classList.add('noactivo')
            pfExitoMenu.classList.add('noactivo')
    
            pfTitulacionMenu.classList.remove('noactivo')
            pfTulacionBloque.classList.remove('noactivo')
            pfTitulacionMenu.classList.add('activo')
            pfTulacionBloque.classList.add('activo')

            formulario.value = "";
            resultado.innerHTML = '';

            break;
            
            case 2:
                pfTitulacionMenu.classList.remove('activo')
                pfTulacionBloque.classList.remove('activo')
                pfTitulacionMenu.classList.add('noactivo')
                pfTulacionBloque.classList.add('noactivo')

                pfControlDocumentalBloque.classList.remove('activo')
                pfControlDocumentalMenu.classList.remove('activo')
                pfControlDocumentalBloque.classList.add('noactivo')
                pfControlDocumentalMenu.classList.add('noactivo')
                 
                pfFrecuentesEscolaresBloque.classList.remove('activo')
                pfFrecuentesEscolaresMenu.classList.remove('activo')
                pfFrecuentesEscolaresBloque.classList.add('noactivo')
                pfFrecuentesEscolaresMenu.classList.add('noactivo')

                pfExitoBloque.classList.remove('activo')
                pfExitoMenu.classList.remove('activo')
                pfExitoBloque.classList.add('noactivo')
                pfExitoMenu.classList.add('noactivo')
        
                pfServicioSocialMenu.classList.remove('noactivo')
                pfServicioSocialBloque.classList.remove('noactivo')
                pfServicioSocialMenu.classList.add('activo')
                pfServicioSocialBloque.classList.add('activo')
                formulario.value = "";
                resultado.innerHTML = '';
                
            break;
        
            case 3:
                pfTitulacionMenu.classList.remove('activo')
                pfTulacionBloque.classList.remove('activo')
                pfTitulacionMenu.classList.add('noactivo')
                pfTulacionBloque.classList.add('noactivo')

                pfServicioSocialMenu.classList.remove('activo')
                pfServicioSocialBloque.classList.remove('activo')
                pfServicioSocialMenu.classList.add('noactivo')
                pfServicioSocialBloque.classList.add('noactivo')
                 
                pfFrecuentesEscolaresBloque.classList.remove('activo')
                pfFrecuentesEscolaresMenu.classList.remove('activo')
                pfFrecuentesEscolaresBloque.classList.add('noactivo')
                pfFrecuentesEscolaresMenu.classList.add('noactivo')

                pfExitoBloque.classList.remove('activo')
                pfExitoMenu.classList.remove('activo')
                pfExitoBloque.classList.add('noactivo')
                pfExitoMenu.classList.add('noactivo')

                pfControlDocumentalBloque.classList.remove('noactivo')
                pfControlDocumentalMenu.classList.remove('noactivo')
                pfControlDocumentalBloque.classList.add('activo')
                pfControlDocumentalMenu.classList.add('activo')
        
                
                formulario.value = "";
                resultado.innerHTML = '';
            break;    
        
            case 4:

                pfTitulacionMenu.classList.remove('activo')
                pfTulacionBloque.classList.remove('activo')
                pfTitulacionMenu.classList.add('noactivo')
                pfTulacionBloque.classList.add('noactivo')

                pfServicioSocialMenu.classList.remove('activo')
                pfServicioSocialBloque.classList.remove('activo')
                pfServicioSocialMenu.classList.add('noactivo')
                pfServicioSocialBloque.classList.add('noactivo')
                 
                pfControlDocumentalBloque.classList.remove('activo')
                pfControlDocumentalMenu.classList.remove('activo')
                pfControlDocumentalBloque.classList.add('noactivo')
                pfControlDocumentalMenu.classList.add('noactivo')

                pfExitoBloque.classList.remove('activo')
                pfExitoMenu.classList.remove('activo')
                pfExitoBloque.classList.add('noactivo')
                pfExitoMenu.classList.add('noactivo')

                pfFrecuentesEscolaresBloque.classList.remove('noactivo')
                pfFrecuentesEscolaresMenu.classList.remove('noactivo')
                pfFrecuentesEscolaresBloque.classList.add('activo')
                pfFrecuentesEscolaresMenu.classList.add('activo')

                formulario.value = "";
                resultado.innerHTML = '';   
            break;
        
            case 5:

                pfTitulacionMenu.classList.remove('activo')
                pfTulacionBloque.classList.remove('activo')
                pfTitulacionMenu.classList.add('noactivo')
                pfTulacionBloque.classList.add('noactivo')

                pfServicioSocialMenu.classList.remove('activo')
                pfServicioSocialBloque.classList.remove('activo')
                pfServicioSocialMenu.classList.add('noactivo')
                pfServicioSocialBloque.classList.add('noactivo')
                 
                pfControlDocumentalBloque.classList.remove('activo')
                pfControlDocumentalMenu.classList.remove('activo')
                pfControlDocumentalBloque.classList.add('noactivo')
                pfControlDocumentalMenu.classList.add('noactivo')

                pfFrecuentesEscolaresBloque.classList.remove('activo')
                pfFrecuentesEscolaresMenu.classList.remove('activo')
                pfFrecuentesEscolaresBloque.classList.add('noactivo')
                pfFrecuentesEscolaresMenu.classList.add('noactivo')

                pfExitoBloque.classList.remove('noactivo')
                pfExitoMenu.classList.remove('noactivo')
                pfExitoBloque.classList.add('activo')
                pfExitoMenu.classList.add('activo')

            
                formulario.value = "";
                resultado.innerHTML = '';   
            break;
        }

    }

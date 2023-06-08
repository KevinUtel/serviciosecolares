const pfTitulacionMenu = document.getElementById('menuPreguntasFrecuentesTitulacion');
const pfTulacionBloque = document.getElementById('bloquePreguntasFrecuentesTitulacion');

const pfServicioSocialMenu = document.getElementById('menuPreguntasFrecuentesServicioSocial');
const pfServicioSocialBloque = document.getElementById('bloquePreguntasFrecuentesServicioSocial');

const pfControlDocumentalMenu = document.getElementById('menuPreguntasFrecuentesControlDocumental');
const pfControlDocumentalBloque = document.getElementById('bloquePreguntasFrecuentesControlDocumental');

const pfFrecuentesEscolaresMenu = document.getElementById('menuPreguntasFrecuentesEscolares');
const pfFrecuentesEscolaresBloque = document.getElementById('bloquePreguntasFrecuentesEscolares');

const pfTutoriaMenu = document.getElementById('menuPreguntasFrecuentesTutoria');
const pfTutoriaBloque = document.getElementById('bloquePreguntasFrecuentesTutoria');





const preguntasDF = [

    //Titulación

    {nombre: 'Requisitos tramite titulación', valor:1000},
    {nombre: 'Tiempos titulación', valor:1000},
    {nombre: '¿Se puede solicitar un certificado total sin servicio social?', valor:1000},
    {nombre: 'Servicio social regular.', valor:1000},
    {nombre: 'Servicio social por articulo 52', valor:1000},
    {nombre: 'Servicio social en UTEL como coach universitario', valor:1000},
    {nombre: 'Solictar constancia de termino', valor:1000},

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

    {nombre: 'Solicitar carta pasante', valor:1000},
    {nombre: 'Equivalencia', valor:1000},
    {nombre: 'Revalidación', valor:1000},
    {nombre: 'Como validar un documento.', valor:1000},
    {nombre: 'Como tramitar cedula', valor:1000},
    {nombre: 'Como realizar un registro en CRM', valor:1000},
    {nombre: 'Documentos apocrifos', valor:1000},
    {nombre: 'Escolares', valor:1000},
    {nombre: 'Graduaciones', valor:1000},
    {nombre: 'Cobranza', valor:1000},
    {nombre: 'Facturación', valor:1000},
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
                
            break;
            
            case 2:
                pfTitulacionMenu.classList.remove('activo')
                pfTulacionBloque.classList.remove('activo')
                pfTitulacionMenu.classList.add('noactivo')
                pfTulacionBloque.classList.add('noactivo')
        
                pfServicioSocialMenu.classList.remove('noactivo')
                pfServicioSocialBloque.classList.remove('noactivo')
                pfServicioSocialMenu.classList.add('activo')
                pfServicioSocialBloque.classList.add('activo')
                formulario.value = "";
                resultado.innerHTML = '';
                
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
        }

    }

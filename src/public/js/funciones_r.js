
//Aviso
const avisoRojo = document.querySelectorAll('.avisoRojo');

avisoRojo.forEach((cadaLi, i) => {

    const mostrarTexto = ()=>{

          let solicitarTexto = ()=>{
            for (let InfosAvisoRojo of InfoAvisoRojo){

                let idp = InfosAvisoRojo.id.toLowerCase();
                if(idp.indexOf(avisoRojo[i].id) !== -1){
                    
                resultado = `${InfosAvisoRojo.Texto}`
                }
            }

        return resultado;
        }


        avisoRojo[i].innerHTML = '';
        avisoRojo[i].innerHTML = `                              
        <div class="border-3 card card-importante mx-3 mb-5 justify-content-center ">
          <div class="card-body">
            <p class="card-text">
            ${solicitarTexto()}
            </p>
          </div>
        </div>          
            `           
}

avisoRojo[i].addEventListener('onload', mostrarTexto)
mostrarTexto();
})



//Imagen y texto
const ImagenYTexto = document.querySelectorAll('.ImagenTituloYTexto');

ImagenYTexto.forEach((cadaLi, i) => {

    const mostrarImagenTituloYTexto = ()=>{
        let resultado; 
        let solicitarIdtp = ()=>{
            for (let bloquesImagenTexto of bloqueImagenTexto){

                let idp = bloquesImagenTexto.id.toLowerCase();
                if(idp.indexOf(ImagenYTexto[i].id) !== -1){
                    
                resultado = `${bloquesImagenTexto.idtp}`
                }
            }

        return resultado;
        }
        
        let solicitarIdo = ()=>{
          for (let bloquesImagenTexto of bloqueImagenTexto){

              let idp = bloquesImagenTexto.id.toLowerCase();
              if(idp.indexOf(ImagenYTexto[i].id) !== -1){
                  
              resultado = `${bloquesImagenTexto.ido}`
              }
          }

        return resultado;
        }

        let solicitaridoh = ()=>{
          for (let bloquesImagenTexto of bloqueImagenTexto){

              let idp = bloquesImagenTexto.id.toLowerCase();
              if(idp.indexOf(ImagenYTexto[i].id) !== -1){
                  
              resultado = `${bloquesImagenTexto.idoh}`
              }
          }

        return resultado;
        }

        let solicitarimg = ()=>{
          for (let bloquesImagenTexto of bloqueImagenTexto){

              let idp = bloquesImagenTexto.id.toLowerCase();
              if(idp.indexOf(ImagenYTexto[i].id) !== -1){
                  
              resultado = `${bloquesImagenTexto.img}`
              }
          }

      return resultado;
      }


        ImagenYTexto[i].innerHTML = '';
        ImagenYTexto[i].innerHTML = ` 

          <!--Bloque ejemplo doc-->
          <div class="card border-0 mb-3" >

            <div class="row g-0">

              <!--Contenido Tarjeta-->
              <div class="col-lg-8">
                <div class="TituloYTexto" id="${solicitarIdtp()}">
                </div>
              </div>

              <!--Imagen ejemplo-->
              <div class="col-lg-4">
                <div class="text-center">
                  <button class="col btn botonejemdoc btntit" type="button" data-bs-toggle="offcanvas" data-bs-target="#${solicitarIdo()}" aria-controls="offcanvasBottom"><img style=" max-height: 400px;"src="${solicitarimg()}"></i></button>
                </div>
                <!--Contenido ejemplo-->
                <div class="offcanvas offcanvas-bottom" tabindex="-1" id="${solicitarIdo()}" aria-labelledby="offcanvasBottomLabel">

                <!--Title-->
                <div class="offcanvas-header">
                  <h5 class="offcanvas-title" id="${solicitaridoh()}">Certificación</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>

                <!--Boddy-->
                <div class="container card border border-0">
                  <div class="row row-cols-1 row-cols-xl-2 row-cols-md-2">

                    <!--Imagen ejemplo-->
                    <div class="col">

                      <img src="${solicitarimg()}" class="d-block w-100" alt="...">
                      
                    </div>
                    
                    <!--Texto descripción-->
                    <div class="col card border border-0">

                      <strong class="py-3 px-3"> Caracteristicas de la certificacion</strong>
                      Documento que se otorga al estudiante que haya acreditado el 100% de los créditos del plan de estudios de Maestría y que 
                      requiere ser autenticado por la Secretaría de Educación Pública. </br></br>
                      Para obtenerlo debes tener tu expediente físico completo.</br>

                    </div>

                  </div>   
                </div>
                </div> 
              </div>

            </div>
          </div>`           
    }

    ImagenYTexto[i].addEventListener('onload', mostrarImagenTituloYTexto)
    mostrarImagenTituloYTexto();
})

//Imagen, texto y carrusel
const ImagenTextoCarrusel = document.querySelectorAll('.ImagenTextoCarrusel');

ImagenTextoCarrusel.forEach((cadaLi, i) => {

    const mostrarImagenTextoCarrusel = ()=>{
        let resultado; 

        let solicitarIdtp = ()=>{
            for (let bloquesImagenTexto of bloqueImagenTexto){

                let idp = bloquesImagenTexto.id.toLowerCase();
                if(idp.indexOf(ImagenTextoCarrusel[i].id) !== -1){
                    
                resultado = `${bloquesImagenTexto.idtp}`
                }
            }

        return resultado;
        }
        
        let solicitarIdo = ()=>{
          for (let bloquesImagenTexto of bloqueImagenTexto){

              let idp = bloquesImagenTexto.id.toLowerCase();
              if(idp.indexOf(ImagenTextoCarrusel[i].id) !== -1){
                  
              resultado = `${bloquesImagenTexto.ido}`
              }
          }

        return resultado;
        }

        let solicitaridoh = ()=>{
          for (let bloquesImagenTexto of bloqueImagenTexto){

              let idp = bloquesImagenTexto.id.toLowerCase();
              if(idp.indexOf(ImagenTextoCarrusel[i].id) !== -1){
                  
              resultado = `${bloquesImagenTexto.idoh}`
              }
          }

        return resultado;
        }

        let solicitarimg = ()=>{
          for (let bloquesImagenTexto of bloqueImagenTexto){

              let idp = bloquesImagenTexto.id.toLowerCase();
              if(idp.indexOf(ImagenTextoCarrusel[i].id) !== -1){
                  
              resultado = `${bloquesImagenTexto.img}`
              }
          }

        return resultado;
        }

        let img_carousel = ()=>{
          for (let bloquesImagenTexto of bloqueImagenTexto){

              let idp = bloquesImagenTexto.id.toLowerCase();
              if(idp.indexOf(ImagenTextoCarrusel[i].id) !== -1){
                  
              resultado = `${bloquesImagenTexto.img_carousel}`
              }
          }

        return resultado;
        }

        let idc = ()=>{
          for (let bloquesImagenTexto of bloqueImagenTexto){

              let idp = bloquesImagenTexto.id.toLowerCase();
              if(idp.indexOf(ImagenTextoCarrusel[i].id) !== -1){
                  
              resultado = `${bloquesImagenTexto.idc}`
              }
          }

        return resultado;
        }

        let Texto = ()=>{
          for (let bloquesImagenTexto of bloqueImagenTexto){

              let idp = bloquesImagenTexto.id.toLowerCase();
              if(idp.indexOf(ImagenTextoCarrusel[i].id) !== -1){
                  
              resultado = `${bloquesImagenTexto.Texto}`
              }
          }

        return resultado;
        }


        ImagenTextoCarrusel[i].innerHTML = '';
        ImagenTextoCarrusel[i].innerHTML = ` 

          <div class="card border-0 mb-3" >
              <div class="row g-0">
              
                <!--Contenido Tarjeta-->
                <div class="col-lg-8">
                  <div class="TituloYTexto" id="${solicitarIdtp()}">
                  </div>
                </div>
                
                <!--imagen bloque-->
                <div class="col-lg-4">
                  <!--Imagen/boton-->

                  <div class="text-center">
                  <button class="col btn botonejemdoc btntit" type="button" data-bs-toggle="offcanvas" data-bs-target="#${solicitarIdo()}" aria-controls="offcanvasBottom"><img style=" max-height: 400px;"src="${solicitarimg()}"></i></button>
                  </div>

                  <div class="offcanvas offcanvas-bottom" tabindex="-1" id="${solicitarIdo()}" aria-labelledby="offcanvasBottomLabel">
                    <div class="offcanvas-header">
                      <h5 class="offcanvas-title" id="${solicitaridoh()}"></h5>
                      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="container card border border-0">
                      <!--Cuerpo canvas-->
                      <div class="row row-cols-1 row-cols-xl-2 row-cols-md-2">

                        <!--Carrusel-->
                        <div class="col">
                          <div id="${idc()}" class="carousel carousel-ejemplo slide">
                            <div class="carousel-inner carousel-inner-ejemplo">
                            ${img_carousel()}
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#${idc()}" data-bs-slide="prev">
                              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                              <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#${idc()}" data-bs-slide="next">
                              <span class="carousel-control-next-icon" aria-hidden="true"></span>
                              <span class="visually-hidden">Next</span>
                            </button>
                          </div>
                          
                        </div>
                        <!--Proceso y botones-->
                        <div class="col card border border-0">
                          <p>
                          ${Texto()}
                          <p>

                          <div class="row py-3">
    
                            <a class="Botonmanual col py-3 px-3" href="apostille.html">Apostilla</a>
                            <a class="Botonmanual col py-3 px-3" href="apostille.html">Convalidación</a>
                            <a class="Botonmanual col py-3 px-3" href="apostille.html">Documentación LATAM</a>

                          </div>
                        </div>
                      </div>   
                    </div>
                  </div> 
                </div>
              </div>
            </div>
          `           
    }

    ImagenTextoCarrusel[i].addEventListener('onload', mostrarImagenTextoCarrusel)
    mostrarImagenTextoCarrusel();
})

//TITULO Y TEXTO
const tituloYTexto = document.querySelectorAll('.TituloYTexto');
console.log(tituloYTexto)
tituloYTexto.forEach((cadaLi, i) => {

    const mostrarTituloYTexto = ()=>{

        let solicitarTitulo = ()=>{
            for (let infosTitulacion of infoTitulacion ){

                let idp = infosTitulacion.id.toLowerCase();
                if(idp.indexOf(tituloYTexto[i].id) !== -1){

                titulo = `${infosTitulacion.Titulo}`
                }
            }

        return titulo;
        }

        let solicitarTexto = ()=>{
            for (let infosTitulacion of infoTitulacion ){

                let idp = infosTitulacion.id.toLowerCase();
                if(idp.indexOf(tituloYTexto[i].id) !== -1){
                    
                texto = `${infosTitulacion.Texto}`
                }
            }

        return texto;
        }

        tituloYTexto[i].innerHTML = '';
        tituloYTexto[i].innerHTML = `                              
            <div class="border border-0 card mt-1">
            <div class="card-body">
              <h5 class="card-title" >${solicitarTitulo()}</h5>
              <p class="card-text">
              ${solicitarTexto()}
              </p>
            </div>
            </div>            
            `           
    }

    tituloYTexto[i].addEventListener('onload', mostrarTituloYTexto)
    mostrarTituloYTexto();
})

//Proceso tit nacional
const procesoTitNacional = document.querySelectorAll('.procesoTitNacional');

procesoTitNacional.forEach((cadaLi, i) => {

    const mostrarTituloYTexto = ()=>{

        let solicitarTitulo = ()=>{
            for (let infosTitulacion of infoTitulacion ){

                let idp = infosTitulacion.id.toLowerCase();
                if(idp.indexOf(procesoTitNacional[i].id) !== -1){

                titulo = `${infosTitulacion.Titulo}`
                }
            }

        return titulo;
        }

        let solicitarTexto = ()=>{
            for (let infosTitulacion of infoTitulacion ){

                let idp = infosTitulacion.id.toLowerCase();
                if(idp.indexOf(procesoTitNacional[i].id) !== -1){
                    
                texto = `${infosTitulacion.Texto}`
                }
            }

        return texto;
        }

        procesoTitNacional[i].innerHTML = '';
        procesoTitNacional[i].innerHTML = `                              
        <h2 class="text-center">${solicitarTitulo()}</h2>  
        <img class="img-proceso" src="img/ProcesoT.PNG">
        <div class="card border-0 card-proceso col-lg-9 ">
          <h5 class="card-title" >El proceso consta de:</h5> </br>
          <p class="card-text">                                      
          ${solicitarTexto()}            
          </p>
          
        </div>

        <h5>Manuales</h5>

        <div class="row py-3">
          
          <a class="Botonmanual col py-3 px-3" href="Manual-tit-nacional.pdf" target="_blank" >INICIO DE TRAMITE FLOKZU</a>
          <a class="Botonmanual col py-3 px-3" href="Manual-tit-nacional.pdf" target="_blank">INICIO DE TRAMITE FLOKZU LATAM</a>
          <a class="Botonmanual col py-3 px-3" href="Manual-tit-nacional.pdf" target="_blank">CONTINUACIÓN DE TRAMITE DE TITULACIÓN</a>
          <a class="Botonmanual col py-3 px-3" href="Cedula.pdf" target="_blank">TRAMITE DE CÉDULA PROFESIONAL</a>

        </div>
        `           
    }

    procesoTitNacional[i].addEventListener('onload', mostrarTituloYTexto)
    mostrarTituloYTexto();
})


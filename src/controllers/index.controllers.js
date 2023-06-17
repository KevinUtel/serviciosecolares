const indexCtrl = {};

indexCtrl.renderIndex = (req, res) =>{
    res.render('index')
}

indexCtrl.renderAbout= (req, res) =>{
    res.render('about')
}

indexCtrl.rendertitulacion= (req, res) =>{
    res.render('titulacion')
}

indexCtrl.renderServiciosocial= (req, res) =>{
    res.render('serviciosocial')
}

indexCtrl.renderMapa= (req, res) =>{
    res.render('mapa')
}

indexCtrl.renderRecolecion= (req, res) =>{
    res.render('recoleccion')
}


module.exports = indexCtrl;
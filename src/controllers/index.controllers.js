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


indexCtrl.renderDirectorio= (req, res) =>{
    res.render('directorio')
}

indexCtrl.renderServicioses= (req, res) =>{
    res.render('servicioses')
}

indexCtrl.renderLatam= (req, res) =>{
    res.render('latam')
}

indexCtrl.renderDudas= (req, res) =>{
    res.render('preguntas')
}

module.exports = indexCtrl;
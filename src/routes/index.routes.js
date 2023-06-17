const { Router } = require('express');
const router = Router();

const { renderIndex, renderAbout, rendertitulacion, renderServiciosocial, renderMapa, renderRecolecion} = require('../controllers/index.controllers')

const {isAuthenticated} = require('../helpers/auth')

router.get('/', isAuthenticated, renderIndex);

router.get('/about', isAuthenticated, renderAbout);

router.get('/titulacion', isAuthenticated, rendertitulacion);

router.get('/serviciosocial', isAuthenticated, renderServiciosocial);

router.get('/mapa', isAuthenticated, renderMapa);

router.get('/recoleccion', isAuthenticated, renderRecolecion);




module.exports = router;
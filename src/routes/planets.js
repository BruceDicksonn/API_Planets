const express = require('express');
const routes = express.Router();
const PlanetController = require('../../controller/PlanetController');

routes.get('/planets', PlanetController.findAll);
routes.get('/planets/:id', PlanetController.find);
routes.post('/planets', PlanetController.insert);
routes.put('/planets/:id', PlanetController.update);
routes.delete('/planets/:id', PlanetController.remove);

module.exports = routes;

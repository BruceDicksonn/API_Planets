const express = require('express');
const routes = express.Router();
const SateliteController = require('../../controller/SateliteController');

routes.get('/planets/:planetId/satelites', SateliteController.findAll);
routes.get('/planets/:planetId/satelites/:id', SateliteController.find);
routes.post('/planets/:planetId/satelites', SateliteController.insert);
routes.put('/planets/:planetId/satelites/:id', SateliteController.update);
routes.delete('/planets/:planetId/satelites/:id', SateliteController.remove);

module.exports = routes;
const express = require('express');
const routes = express.Router();
const SpaceshipsController = require('../../controller/SpaceshipsController');

routes.get('/spaceships/', SpaceshipsController.findAll);
routes.get('/spaceships/:id', SpaceshipsController.find);
routes.post('/spaceships/:capId', SpaceshipsController.insert);
routes.put('/spaceships/:capId/:id', SpaceshipsController.update);
routes.delete('/spaceships/:capId/:id', SpaceshipsController.remove);

module.exports = routes;

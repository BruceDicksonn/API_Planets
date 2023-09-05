const express = require('express');
const routes = express.Router();
const CapsController = require('../../controller/CapsController');

routes.get('/caps', CapsController.findAll);
routes.get('/caps/:id', CapsController.find);
routes.post('/caps', CapsController.insert);
routes.put('/caps/:id', CapsController.update);
routes.delete('/caps/:id', CapsController.remove);

module.exports = routes;

const express = require('express');
const app = express();
const port = 3000;
const routes = require('./src/routes/routes');

// sempre executar o arquivo de associacoes
require("./config/associations");

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(routes);

app.listen(port, () => console.log(`Servidor ativo na porta: ${port}`));

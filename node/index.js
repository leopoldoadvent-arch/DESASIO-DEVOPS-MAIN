const express = require('express')
const routes = require('./routes')

const app = express()
const port = 3000

app.use(routes);

app.listen(port, '0.0.0.0', () => {
    console.log('Rodando na porta ' + port)
})
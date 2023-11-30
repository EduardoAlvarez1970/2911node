
const express = require('express')
const app = express()


app.get('/api', (req, res) => {
    res.status(200).send('Ola, mundo!!')
})

app.post('/api', (req, res) => {
    res.status(200).send('Requisição POST!')
})



app.listen(3000, () => console.log('O servidor esta pronto'))
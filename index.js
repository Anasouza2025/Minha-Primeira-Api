const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.json({message: "Olá"})
})

app.listen(3000, () => {
    console.log("O servidor esta rodando na porta 3000")
})
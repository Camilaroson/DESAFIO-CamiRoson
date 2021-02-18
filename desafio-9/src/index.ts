import express from 'express';
const app = express()
var router = express.Router()
app.use(express.json())


app.use('/api', require('./productos'))


app.listen(8888 , () =>{
    console.log('Servidor listo!')
})
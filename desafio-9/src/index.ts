import express from 'express';
const app = express()
var router = express.Router()
app.use(express.json())
app.use(express.urlencoded({extended:true}));
app.use(express.static(__dirname + 'public'));




app.use('/api', require('./productos'))


app.listen(8888 , () =>{
    console.log('Servidor listo!')
})
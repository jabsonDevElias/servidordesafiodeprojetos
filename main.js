// const { SerialPort, ReadlineParser } = require('serialport')
const express = require('express');
// const socketIo = require('socket.io');
const http = require('http');
const { dirname } = require('path');

const conecat = require('./db/Conecta');

//SERVIDOR
const app = express();
const server = http.createServer(app);

app.use(express.static('public')); //ADICIONA ARQUIVOS ESTÁTIVOS

app.get('/tecnologias/:tipo',(req,res,next) => {
    // res.sendFile(__dirname + '/public/index.html');
    const tipo = req.params.tipo;
    if(tipo){
      const obj = {
        nome: "Jabson Elias",
        idade:10
      }
      res.json(obj);
    }
})

server.listen(9999,()=>{
    console.log("Servidor rodando!");
})



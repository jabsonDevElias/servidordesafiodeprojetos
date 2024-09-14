// const { SerialPort, ReadlineParser } = require('serialport')
const express = require('express');
// const socketIo = require('socket.io');
const http = require('http');
const { dirname } = require('path');

// const conecta = require('./db/Conecta');
const Categorias = require('./db/Categorias');
const Tecnologias = require('./db/Tecnologias');



//SERVIDOR
const app = express();
const server = http.createServer(app);

app.use(express.static('public')); //ADICIONA ARQUIVOS ESTÁTIVOS

app.get('/tecnologias/:tipo',(req,res,next) => {
    const tipo = req.params.tipo;
    if(tipo){

      (async () => {
        try {
          // Buscar todas as categorias
          const categorias = await Categorias.findAll();  
          // Exibir os resultados
          res.json(categorias);
        } catch (error) {
          console.error('Erro ao buscar categorias:', error);
        }
      })();
    }
})

app.get('/categorias/',(req,res,next) => {

  const idCategoria = req.params.id;
    (async () => {
      try {
        // Buscar todas as categorias
        const categorias = await Categorias.findAll();  
        // Exibir os resultados
        res.json(categorias);
      } catch (error) {
        console.error('Erro ao buscar categorias:', error);
      }
    })();
})

server.listen(9999,()=>{
    console.log("Servidor rodando!");
})



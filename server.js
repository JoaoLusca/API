//importação da biblioteca 'express'
import express from 'express'

const app = express()

/*
    1º tipo de Rota / Método HTTP
    2º Endereço. Exemplo: www.lojadoseuze.com.br/usuarios
*/
app.get('/users', (req, res) /*requisição e resposta*/ => {
    
}) //lista todos os usuários


app.post('/users') //Cria um novo usuário
app.put('/users') //editar o usuário
app.delete('/users') //Delete um usuário

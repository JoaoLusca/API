//importação da biblioteca 'express'
import express from 'express'

const app = express()
app.use(express.json())//avisando o express que estou usando JSON

const users = []

/*
    1º tipo de Rota / Método HTTP
    2º Endereço. Exemplo: www.lojadoseuze.com.br/usuarios
*/

//1º Criar um usuário
app.post('/users', (req, res) => {

    users.push(req.body)

    //mensagem de usuario criado com sucesso e mostrar o que criei
    res.status(201).json(req.body)
})

app.get('/users', (req, res) /*requisição e resposta*/ => {

    //mensagem que tudo foi 'ok'
    res.status(200).json(users)
    
}) //lista todos os usuários

app.listen(3000)

/*
    CRIAR API DE USERS (PASSOS):

    1º Criar um usuário;
    2º listar todos os usuários;
    3º Editar um usuário;
    4º Deletar um usuário;

*/

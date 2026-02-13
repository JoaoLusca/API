//importando prisma cliente
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

//importação da biblioteca 'express'
import express from 'express'

const app = express()
app.use(express.json())//"avisa" o express que estou usando JSON

const users = []

/*
    1º tipo de Rota / Método HTTP
    2º Endereço. Exemplo: www.lojadoseuze.com.br/usuarios
*/

//1º Criar um usuário
app.post('/users', async (req, res) => {
    await prisma.user.create({
        data: {
            email: req.body.email,
            name: req.body.name,
            age: req.body.age
        }
    })

    //mensagem de usuario criado com sucesso e mostrar o que criei
    res.status(201).json(req.body)
})

app.get('/users', async (req, res) /*requisição e resposta*/ => {

    let users = []

    if (req.query) {
        users = await prisma.user.findMany({
            where: {
                email: req.query.email,
                name: req.query.name,
                age: req.query.age
            }
        })
    } else {
        users = await prisma.user.findMany()
    }
    //mensagem que tudo foi 'ok'
    res.status(202).json(users)

}) //lista todos os usuários

app.put('/users/:id'/*Esse ":id" serve para indicar que o que vem é uma variável*/, async (req, res) => {

    await prisma.user.update({
        where: {
            id: req.params.id
        },
        data: {
            email: req.body.email,
            name: req.body.name,
            age: req.body.age
        },
    })

    res.status(203).json(req.body)
})//Edita um usuário

app.delete('/users/:id', async (req, res) => {
    await prisma.user.delete({
        where: {
            id: req.params.id
        }
    })

    res.status(200).json({ message: 'usuario deletado' })
})//deleta usuário

app.listen(3000)

/*
    CRIAR API DE USERS (PASSOS):

    1º Criar um usuário;
    2º listar todos os usuários;
    3º Editar um usuário;
    4º Deletar um usuário;

*/

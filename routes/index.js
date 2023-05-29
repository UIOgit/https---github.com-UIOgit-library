const express = require('express');
const classes = require('../models/classes');

const router = express.Router();

//GET
router.get('/api/books', (request, response)=>
{
    const {books} = classes.library;
    response.json(books);
})
router.get('/api/books/:id', (request, response)=>
{
    const {books} = classes.library; 
    const {id} = request.params;
    const index = books.findIndex(element => element.id === id);

    if(index != -1)
        {
            response.json(books[index]);
        }
        else
        {
            response.status(404);
            response.json ('404 | Страница не найдена');
        }
})

//POST
router.post('/api/user',(request, response)=>
{
    response.status(201);
    response.json({"id": "1", "mail":"test@mail.ru"});
})
router.post('/api/books/', (request, response)=>
{
    const {books} = classes.library; 
    const {title,description,authors,favorite,fileCover,fileName} = request.body;
    const newBook = new Book(title,description,authors,favorite,fileCover,fileName);
    books.push(newBook);
    response.status(201);
    response.json(newBook);
});
//PUT
router.put('/api/books/:id', (request, response)=>
{
    const {books} = classes.library; 
    const {id} = request.params;
    const {title,description,authors,favorite,fileCover,fileName} = request.body;
    const index = books.findIndex(element => element.id === id);

    if(index != -1)
        {
            books[index] = {...books[index],title,description,authors,favorite,fileCover,fileName};
            response.json(books[index]);
        }
        else
        {
            response.status(404);
            response.json ('404 | Страница не найдена');
        }
});
//DELETE
router.delete('/api/books/:id', (request, response)=>
{
    const {books} = classes.library; 
    const {id} = request.params;
    const index = books.findIndex(element => element.id === id);

    if(index != -1)
        {
            books.splice(index,1);
            response.json(true);
        }
        else
        {
            response.status(404);
            response.json ('404 | Страница не найдена');
        }
});

module.exports = router;

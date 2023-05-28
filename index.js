const express = require('express');
const {v4 : uuid} = require('uuid');

class Book
{
    constructor(title="",description="",authors="",favorite="",fileCover="",fileName="",id = uuid())
    {
        this.title = title;
        this.description = description;
        this.authors=authors;
        this.favorite=favorite;
        this.fileCover= fileCover;
        this.fileName= fileName;
        this.id = id;
    } 
}
const library =
{
    books: 
    [
        new Book(),
        new Book(),
        new Book(),
    ],
};
const app = express();
app.use(express.json());

//GET
app.get('/api/books', (request, response)=>
{
    response.json(library);
})
app.get('/api/books/:id', (request, response)=>
{
    const {books} = library; 
    const {id} = request.params;
    const index = books.findIndex(element => element.id === id)

    if(index != -1)
        {
            response.json(books[index]);
        }
        else
        {
            response.status(404);
            response.json ('404 | Страница не найдена')
        }
})

//POST
app.post('/api/user',(request, response)=>
{
    response.status(201);
    response.json({"id": "1", "mail":"test@mail.ru"});
})
app.post('/api/books/', (request, response)=>
{
    const {books} = library; 
    const {title,description,authors,favorite,fileCover,fileName} = request.body;
    const newBook = new Book(title,description,authors,favorite,fileCover,fileName);
    books.push(newBook);
    response.status(201);
    response.json(newBook);

})
//PUT
app.put('/api/books/:id', (request, response)=>
{
    const {books} = library; 
    const {id} = request.params;
    const {title,description,authors,favorite,fileCover,fileName} = request.body;
    const index = books.findIndex(element => element.id === id)

    if(index != -1)
        {
            books[index] = {...books[index],title,description,authors,favorite,fileCover,fileName};
            response.json(books[index]);
        }
        else
        {
            response.status(404);
            response.json ('404 | Страница не найдена')
        }
})
//DELETE
app.delete('/api/books/:id', (request, response)=>
{
    const {books} = library; 
    const {id} = request.params;
    const index = books.findIndex(element => element.id === id)

    if(index != -1)
        {
            books.splice(index,1);
            response.json(true);
        }
        else
        {
            response.status(404);
            response.json ('404 | Страница не найдена')
        }
})

const PORT = process.env.PORT || 3000
app.listen(PORT)
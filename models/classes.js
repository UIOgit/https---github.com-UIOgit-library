const {v4 : uuid} = require('uuid');

class Book
{
    // constructor(title="",description="",authors="",favorite=false,fileCover="",fileName="",fileBook="",id = uuid())
    // {
    //     this.title = title;
    //     this.description = description;
    //     this.authors=authors;
    //     this.favorite=favorite;
    //     this.fileCover= fileCover;
    //     this.fileName= fileName;
    //     this.fileBook = fileBook;
    //     this.id = id;
    // }
    constructor(fileBook,id = uuid())
    {
        this.title = "";
        this.description = "";
        this.authors="";
        this.favorite=false;
        this.fileCover= "";
        this.fileName= "";
        this.fileBook = fileBook;
        this.id = id;
    }
}
const library =
{
    books:
    [
        new Book(fileBook="1.pdf"),
        new Book(fileBook="/public/library/books/2.pdf"),
        new Book(fileBook="/public/library/books/3.pdf"),
    ],
};

module.exports =
{
    Book,
    library,
};
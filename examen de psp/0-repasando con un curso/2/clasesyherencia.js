//clases y herencias

class Documento {

    constructor(titulo , autor , ispublished){
            this.titulo = titulo
            this.autor = autor
            this.ispublished=ispublished
    }

    public(){
        this.ispublished = true;
    }
    
    static publisBook(book){
        return book.public()
    }
}


class Book extends Documento{
    constructor(titulo , autor ,topic){
        super(titulo , autor , true)
        this.topic = to
    }


}
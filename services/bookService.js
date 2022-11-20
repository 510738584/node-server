const Book = require('../model/Book');

exports.addBook = async function(bookObj){
  const ins = Book.create(bookObj);
  return ins;
}

exports.deleteBook = async function(bookId){
  const ins = await Book.destroy({
    where:{
      id: bookId
    }
  });
  return ins;
}

exports.updateBook = async function(bookId, bookObj){
  const ins = await Book.update(bookObj, {
    where:{
      id: bookId,
    }
  });
  return ins
}
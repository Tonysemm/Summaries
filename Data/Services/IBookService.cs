using System.Collections.Generic;

namespace Summaries.Data
{
    public interface IBookService
    {
        List<Book> GetAllBooks();
        Book GetBookById(int id);
        void AddBook(Book newBook);
        void UpdateBook(int id, Book newBook);
        void DeleteBook(int id);
    }
}
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  _baseURL = 'api/Books';

  constructor(private http: HttpClient) { }

  getAllBooks() {
    return this.http.get<Book[]>(this._baseURL + '/GetBooks');
  }

  addBook(book: Book) {
    return this.http.post(this._baseURL + '/AddBook/', book);
  }

  getBookById(bookId: number) {
    return this.http.get(this._baseURL + '/SingleBook/' + bookId);
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
// import { Observable } from 'rxjs';
import { BookService } from 'src/app/services/book.service';
import { AppState } from 'src/app/store/app.state';
// import * as bookActions from './../../store/book.actions';
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  public books: Book[];
  // public books$: Observable<any>;

  constructor(private service: BookService, private store: Store<AppState>, private router: Router) {
    // this.books$ = this.store.select<any>('applicationState');
  }

  ngOnInit() {
    this.service.getAllBooks().subscribe(data => this.books = data);
    // this.store.dispatch(new bookActions.LoadBooksAction());
    // this.books$.subscribe((state: AppState) => this.books = state.books);
  }

  showBook(bookId: number) {
    this.router.navigate(['/show-book/' + bookId]);
  }

  updateBook(bookId: number) {
    this.router.navigate(['/update-book/' + bookId]);
  }

  deleteBook(bookId: number) {
    this.router.navigate(['/delete-book/' + bookId]);
  }
}

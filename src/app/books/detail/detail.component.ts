import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { APIService } from '../../API.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  books: any;
  searchTerm!: any;
  constructor(
    private bookService: APIService,
    private store: Store<AppState>,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.bookService.ListBooks().then((books) => {
      this.books = books.items;
      //   this.store.dispatch(loadDatabase({ books: books as unknown as Book[] }));
      //   this.store.select(selectAllBook).subscribe((books) => {
      console.log(books);
    });
  }

  editBook(book: any): void {
    this.router.navigate(['/edit'], {
      queryParams: {
        id: book.id,
      },
    });
  }

  deleteBook(_id: string) {
    this.bookService.DeleteBook({ id: _id }).then((value) => {
      this.books = this.books.filter((book: any) => book.id !== _id);
    });
  }

  /*
    
  searchBook() {
    this.bookService.SearchBooks(this.searchTerm)
      .then((books: any) => {
        this.books = books;
      });
    
  }}

  function searchBook() {
    throw new Error('Function not implemented.');
  }
  /*
  searchBook(title: string) {
    this.bookService.SearchBooks({ title: title }).then((value) => {
      console.log(value);
    });
  }
}*/
}

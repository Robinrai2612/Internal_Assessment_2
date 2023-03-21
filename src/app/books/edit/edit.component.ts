import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { APIService } from 'src/app/API.service';
import { AppState } from 'src/app/app.state';
import { Book } from 'src/app/books';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  bookForm: FormGroup;
  id!: string;
  book!: Book;
  isbn!: string;
  title!: string;
  author!: string;
  published_year!: number;
  publisher!: string;

  constructor(
    private store: Store<AppState>,
    private fb: FormBuilder,
    private bookService: APIService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    ('');
    this.bookForm = this.fb.group({
      id: ['', Validators.required],
      isbn: ['', Validators.required],
      title: ['', Validators.required],
      author: ['', Validators.required],
      published_year: ['', Validators.required],
      publisher: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.id = params['id'];
    });
    console.log(this.id);
    this.bookService.GetBook(this.id).then((value) => {
      console.log('inside get Book', value);
      this.bookForm = this.fb.group({
        id: value.id,
        isbn: value.isbn,
        title: value.title,
        author: value.author,
        published_year: value.published_year,
        publisher: value.publisher,
      });
    });
  }

  /*
  
    // let x = 0;
    this.store.select(selectAllBook).subscribe((books) => {
      // for (let b of books) {
      //   if (b._id === this._id) break;
      //   x++;
      // }
     // this.bookService.GetBook(this.books).then((book) => {
      const book: Book = books.filter((book) => book._id === this._id)[0];
      this.title = book.title;
      this.author = book.author!;
      this.isbn = book.isbn!;
      this.publisher = book.publisher!;
      this.published_year = book.published_year!;
    });
  }*/
  //     console.log('inside get Book', books);

  //     // this.title = <string>value.title;
  //     // this.description = <string>value.description;
  //     // this.isbn = <string>value.isbn;
  //     // this.author = <string>value.author;
  //     // this.publisher = <string>value.publisher;
  //     // this.book = value;

  updateBook(): void {
    if (this.bookForm.invalid) {
      return;
    }

    const reqBody = {
      id: this.id,
      isbn: this.bookForm.value.isbn,
      title: this.bookForm.value.title,
      author: this.bookForm.value.author,
      published_year: this.bookForm.value.published_year,
      publisher: this.bookForm.value.publisher,
    };

    this.bookService.UpdateBook(reqBody).then(() => {
      this.router.navigateByUrl('/');
    });
  }
}

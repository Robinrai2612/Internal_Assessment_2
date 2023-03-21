import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { APIService, Book } from 'src/app/API.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { addBookaction } from 'src/app/store/books.action';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit {
  public createForm: FormGroup;
  title?: string;
  isbn?: string;
  author?: string;
  published_year?: number;
  publisher?: string;

  constructor(
    private store: Store,
    private bookService: APIService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.createForm = this.fb.group({
      title: ['', Validators.required],
      isbn: ['', Validators.required],
      author: ['', Validators.required],
      published_year: ['', Validators.required],
      publisher: ['', Validators.required],
    });
  }
  ngOnInit() {
    //this.bookService.LiBook(reqBody).then((value: any) => {
    //this.store.dispatch(addBookaction({ book: value }));
    this.bookService.ListBooks().then((books) => {
      console.log(books);
    });
  }

  public onCreate(values: any) {
    this.bookService
      .CreateBook(values)
      .then((data) => {
        console.log( data);
        this.createForm.reset();
      })
      .catch((e: any) => {
        console.log('error creating book...', e);
      });
    this.router.navigate(['']);
  }
/*
  onSubmit(): void {
    const reqBody = {
      title: this.title,
      isbn: this.isbn,
      author: this.author,
      published_year: this.published_year,
      publisher: this.publisher,
    };
    this.bookService
      .CreateBook(reqBody)
      .then((value: any) => {
        console.log(value);
        //this.bookService.CreateBook;
      })
      .catch((e: any) => {
        console.log('error creating book...', e);
      });
  }
}
*/}
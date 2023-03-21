import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { APIService, SearchableBookFilterInput } from 'src/app/API.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  books: any;
  searchTerm: string = '';
  constructor(private bookService: APIService) {}

  ngOnInit(): void {}
  search(author: string) {
    let filter: SearchableBookFilterInput = { author: { eq: author } };
    this.bookService.SearchBooks(filter).then((books) => {
      this.books = books;
    });
  }
}

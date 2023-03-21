import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { APIService, Book } from './API.service';
import { AppState } from './app.state';
/** Subscription type will be inferred from this library */
import { ZenObservable } from 'zen-observable-ts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  private subscription: ZenObservable.Subscription | null = null;
  title = 'frontend';
  constructor(
    private store: Store<AppState>,
    private bookService: APIService
  ) {}
  async ngOnInit() {}
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    this.subscription = null;
  }
};

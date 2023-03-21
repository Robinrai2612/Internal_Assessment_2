import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComponent } from './books/add/add.component';
import { EditComponent } from './books/edit/edit.component';
import { DetailComponent } from './books/detail/detail.component';
import { StoreModule } from '@ngrx/store';
import { bookreducer } from './store/books.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home/home.component';
import { RouterModule } from '@angular/router';
import { SearchComponent } from './books/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailComponent,
    AddComponent,
    EditComponent,
    HomeComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule,
    ApolloModule,
    AppRoutingModule,
    AmplifyAuthenticatorModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ library: bookreducer }),
    StoreDevtoolsModule.instrument({}),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

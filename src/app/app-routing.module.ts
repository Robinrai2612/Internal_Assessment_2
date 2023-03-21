import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './books/add/add.component';
import { DetailComponent } from './books/detail/detail.component';
import { EditComponent } from './books/edit/edit.component';
import { SearchComponent } from './books/search/search.component';

const routes: Routes = [
  {
    path: 'add',
    component: AddComponent,
  },
  {
    path: '',
    component: DetailComponent,
  },
  {
    path: 'edit',
    component: EditComponent,
  },
  {
    path: 'search',
    component: SearchComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

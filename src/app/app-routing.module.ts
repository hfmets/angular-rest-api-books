import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookPageComponent } from './book-page/book-page.component';
import { MessagePageComponent } from './message-page/message-page.component';

const routes: Routes = [
  { path: 'messages', component: MessagePageComponent },
  { path: 'books', component: BookPageComponent },
  { path: '', redirectTo: 'messages', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

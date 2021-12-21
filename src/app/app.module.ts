import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessageCardComponent } from './message-card/message-card.component';
import { BookCardComponent } from './book-card/book-card.component';
import { MessagePageComponent } from './message-page/message-page.component';
import { BookPageComponent } from './book-page/book-page.component';
import { NewBookModalComponent } from './new-book-modal/new-book-modal.component';
import { EditBookModalComponent } from './edit-book-modal/edit-book-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    MessageCardComponent,
    BookCardComponent,
    MessagePageComponent,
    BookPageComponent,
    NewBookModalComponent,
    EditBookModalComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

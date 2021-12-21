import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BookPageComponent } from '../book-page/book-page.component';
import { BookService } from '../book.service';
import { Book } from '../models/book';

@Component({
  selector: 'app-new-book-modal',
  templateUrl: './new-book-modal.component.html',
  styleUrls: ['./new-book-modal.component.css'],
})
export class NewBookModalComponent implements OnInit {
  @Output() refreshEmitter = new EventEmitter();
  title: string = '';
  subtitle: string = '';
  description: string = '';
  author: string = '';
  pages: number = 0;
  price: number = 0;

  constructor(private bookService: BookService) {}

  ngOnInit(): void {}

  newBook() {
    this.bookService
      .createNewBook({
        title: this.title,
        subtitle: this.subtitle,
        description: this.description,
        author: this.author,
        pages: this.pages,
        price: this.price,
      })
      .subscribe(
        (res) => console.log(res),
        (error) => {},
        () => {
          this.refreshEmitter.emit(null);
        }
      );
  }
}

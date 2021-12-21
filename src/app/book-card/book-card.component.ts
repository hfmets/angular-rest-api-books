import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../models/book';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css'],
})
export class BookCardComponent implements OnInit {
  @Input()
  book!: Book;
  @Output() bookEmitter: EventEmitter<Book> = new EventEmitter<Book>();
  @Output() refreshEmitter = new EventEmitter();

  constructor(private bookService: BookService) {}

  ngOnInit(): void {}

  toggleModal() {
    this.bookEmitter.emit(this.book);
  }

  deleteBook(id: number) {
    console.log('delete');
    this.bookService.deleteBookById(id).subscribe(
      (res) => console.log(res),
      (error) => {},
      () => {
        this.refreshEmitter.emit(null);
      }
    );
  }
}

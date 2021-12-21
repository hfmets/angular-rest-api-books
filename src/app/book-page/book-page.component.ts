import { Component, OnInit, SimpleChanges } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../models/book';

@Component({
  selector: 'app-book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.css'],
})
export class BookPageComponent implements OnInit {
  books: Book[] = [];
  selectedBook: Book = {
    title: '',
    subtitle: '',
    author: '',
    published: new Date(),
    publisher: '',
    pages: 0,
    description: '',
    website: '',
    inCart: false,
    price: 0,
    id: 0,
  };

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.bookService.getAllBooks().subscribe((res) => (this.books = res));
  }

  onToggle(data: Book) {
    this.selectedBook = data;
  }

  onRefresh() {
    console.log('refresh');
    this.bookService.getAllBooks().subscribe((res) => {
      this.books = res;
    });
  }

  ngOnChanges(changes: SimpleChanges) {}
}

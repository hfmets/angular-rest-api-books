import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../models/book';

@Component({
  selector: 'app-edit-book-modal',
  templateUrl: './edit-book-modal.component.html',
  styleUrls: ['./edit-book-modal.component.css'],
})
export class EditBookModalComponent implements OnInit {
  @Output() refreshEmitter = new EventEmitter();
  @Input()
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
  title: string = this.selectedBook.title || '';
  subtitle: string = this.selectedBook.subtitle || '';
  description: string = this.selectedBook.description || '';
  author: string = this.selectedBook.author || '';
  pages: number = this.selectedBook.pages || 0;
  price: number = this.selectedBook.price || 0;

  constructor(private bookService: BookService) {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges) {
    this.title = this.selectedBook.title;
    this.subtitle = this.selectedBook.subtitle;
    this.description = this.selectedBook.description;
    this.author = this.selectedBook.author;
    this.pages = this.selectedBook.pages;
    this.price = this.selectedBook.price;
  }

  updateBook() {
    this.bookService
      .updateBookById(
        {
          title: this.title,
          subtitle: this.subtitle,
          description: this.description,
          author: this.author,
          pages: this.pages,
          price: this.price,
        },
        this.selectedBook.id
      )
      .subscribe(
        (res) => console.log(res),
        (error) => {},
        () => this.refreshEmitter.emit(null)
      );
  }
}

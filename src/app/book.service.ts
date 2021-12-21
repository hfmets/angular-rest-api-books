import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from './models/book';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  url: string = 'http://localhost:8082/api/books';

  constructor(private http: HttpClient) {}

  getAllBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.url);
  }

  deleteBookById(id: number): Observable<Book> {
    return this.http.delete<Book>(this.url + '/' + id);
  }

  createNewBook(postData: any): Observable<Book> {
    return this.http.post<Book>(this.url, postData);
  }

  updateBookById(postData: any, id: number): Observable<Book> {
    return this.http.put<Book>(this.url + '/' + id, postData);
  }
}

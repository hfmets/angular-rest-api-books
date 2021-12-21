import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Message } from './models/message';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  url: string = 'http://localhost:8082/api/messages';
  constructor(private http: HttpClient) {}

  getMessages(): Observable<Message[]> {
    return this.http.get<Message[]>(this.url);
  }
}

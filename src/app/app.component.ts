import { Component, OnInit } from '@angular/core';
import { MessageService } from './message.service';
import { Message } from './models/message';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'angular-api-rest';

  constructor() {}

  ngOnInit(): void {}
}

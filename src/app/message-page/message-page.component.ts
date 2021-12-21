import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import { Message } from '../models/message';

@Component({
  selector: 'app-message-page',
  templateUrl: './message-page.component.html',
  styleUrls: ['./message-page.component.css'],
})
export class MessagePageComponent implements OnInit {
  messages: Message[] = [];

  constructor(private messageService: MessageService) {}

  ngOnInit(): void {
    this.messageService.getMessages().subscribe((res) => (this.messages = res));
  }
}

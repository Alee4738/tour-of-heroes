import { Component, Inject, OnInit } from '@angular/core';
import { IMessageService, MessageServiceToken } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
})
export class MessagesComponent implements OnInit {
  constructor(
    @Inject(MessageServiceToken) public messageService: IMessageService
  ) {}

  ngOnInit() {}
}

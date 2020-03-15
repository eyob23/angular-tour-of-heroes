import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  constructor() {}

  messages: string[] = [];

  add(message: string) {
    // this.messages.push(message);
    this.messages = [...this.messages, message];
  }
  clear() {
    this.messages = [];
  }
}

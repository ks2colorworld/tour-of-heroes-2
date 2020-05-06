import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: string[] = [];

  add(message: string) {
    this.messages.unshift(message); // push 대신 unshift
  }

  clear() {
    this.messages = [];
  }
}

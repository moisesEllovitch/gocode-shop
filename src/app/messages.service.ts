import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  messages: string[] = [];
  constructor() { }

  clear(){
    this.messages = [];
  }

  add(message : string){
    this.messages.push(message);
  }

  
}

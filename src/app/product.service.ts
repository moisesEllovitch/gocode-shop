import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { MessagesService } from './messages.service';
import { PRODUCTS } from './mock-products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private messagesService : MessagesService) { }

  getProducts(){
    this.messagesService.add('Products found!');
    return of(PRODUCTS);
  }
  
  getProduct(id : number){
    this.messagesService.add('Products found!');
    return of(PRODUCTS.find(p => p.id == id));
  }
}

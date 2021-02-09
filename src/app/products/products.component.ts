import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MessagesService } from '../messages.service';
import { PRODUCTS } from '../mock-products';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  @Input() filterByCategory: string = "";

  products : Product[] = [];
  
  constructor(private productService : ProductService, private messageService : MessagesService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((products) => { this.products = products });
  }

  clickProduct(id : number){
    this.messageService.add(`product ID ${id} selected`);
  }
}
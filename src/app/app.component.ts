import { Component } from '@angular/core';
import { PRODUCTS } from './mock-products';
import { Product } from './product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gocode-shop';
  products : Product[] = PRODUCTS;
}

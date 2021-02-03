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


// add stage
// commit
// push to (origin ....)
// npm run deploy (ou "deploy": "ng deploy --base-href=/gocode-shop/",)

// https://moisesellovitch.github.io/gocode-shop/

import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  product : Product | undefined;

  constructor(private _location: Location, private route : ActivatedRoute, private productsService : ProductService) { }

  ngOnInit(): void {
    this.getProduct();
  }

  backToProducts(){
    this._location.back();
  }

  getProduct(){
    const id : number = <number><unknown>this.route.snapshot.paramMap.get('id');
    this.productsService.getProduct(id).subscribe(p => {
      this.product = p;
    });
  }
}

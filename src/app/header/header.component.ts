import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { CATEGORIES } from '../mock-products';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() filterCatChange = new EventEmitter<string>();

  categories = CATEGORIES;
  selectCat = "";
  
  constructor() {}

  ngOnInit(): void {
  }

  filterCat(){
    this.filterCatChange.emit(this.selectCat);
  }

}
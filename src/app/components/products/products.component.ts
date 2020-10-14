import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  displayChild = true;
  msg = 'Popular now';
  constructor() { }

  ngOnInit(): void {
  }
  componentToggle(): void {
    alert('Added to your cart!');
    this.displayChild = !this.displayChild;
  }
}

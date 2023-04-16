import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { HttpService } from 'src/app/shared/services/http.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products : Product[] = [];
  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.httpService.getProducts().subscribe( res => {
      this.products = res;
    })
  }

}

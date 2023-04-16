import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Product } from 'src/app/models/product.model';
import { QUANTITY } from 'src/app/shared/constans/constant';
import { CartService } from 'src/app/shared/services/cart.service';
import { HttpService } from 'src/app/shared/services/http.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  quantity = QUANTITY;
  product!: Product;
  selectedQuantity = 1;

  constructor(
    private activatedRouter: ActivatedRoute,
    private router : Router,
    private httpService: HttpService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.activatedRouter.params
      .pipe(
        switchMap((res) => {
          return this.httpService.getProductsById(parseInt(res['id']));
        })
      )
      .subscribe((product) => {
        this.product = product;
      });
  }

  backToProducts() {
    this.router.navigate(['/..', 'products']);
  }

  addToCart() {
    if (typeof this.selectedQuantity === 'string') {
      this.selectedQuantity = parseInt(this.selectedQuantity);
    }
    const product = { ...this.product, quantity: this.selectedQuantity };
    this.cartService.addToCart(product)
  }
}

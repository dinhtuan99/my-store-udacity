import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { QUANTITY } from 'src/app/shared/constans/constant';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  @Input()
  product!: Product;
  quantity = QUANTITY;
  selectedQuantity = 1;
  constructor(private cartService: CartService) {}

  ngOnInit(): void {}

  addToCart() {
    if (typeof this.selectedQuantity === 'string') {
      this.selectedQuantity = parseInt(this.selectedQuantity);
    }
    const product = { ...this.product, quantity: this.selectedQuantity };
    this.cartService.addToCart(product)
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { QUANTITY } from 'src/app/shared/constans/constant';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
})
export class CartItemComponent implements OnInit {
  @Input()
  product!: Product;
  quantity = QUANTITY;
  constructor(private cartService: CartService) {}

  ngOnInit(): void {}

  onChangeQuantity(quantity: number) {
    if (typeof quantity === 'string') {
      quantity = parseInt(quantity);
    }
    const product = { ...this.product, quantity: quantity };
    this.cartService.addToCart(product, true);
  }
}

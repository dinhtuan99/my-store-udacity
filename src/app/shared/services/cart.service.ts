import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import Swal from 'sweetalert2';

export interface OrderConfirm {
  name: string;
  total: number;
}

@Injectable({
  providedIn: 'root',
})
export class CartService {
  selectedProducts: Product[] = [];
  selectedProducts$: BehaviorSubject<Product[]> = new BehaviorSubject(
    this.selectedProducts
  );
  orderConfirm$ = new BehaviorSubject({} as OrderConfirm);
  constructor() {}

  addToCart(product: Product, isCart = false) {
    const findProduct = this.selectedProducts.find(
      (item) => product.id === item.id
    );
    if (
      findProduct &&
      findProduct.quantity !== undefined &&
      product.quantity !== undefined
    ) {
      if (isCart) {
        if (product.quantity > 0) {
          findProduct.quantity = product.quantity;
        } else {
          this.selectedProducts = this.selectedProducts.filter(
            (item) => item.id !== product.id
          );
          Swal.fire('Delete product success!');
        }
      } else {
        findProduct.quantity += product.quantity;
      }
    } else {
      Swal.fire('Add product to cart success!');
      this.selectedProducts.push(product);
    }
    this.selectedProducts$.next(this.selectedProducts);
  }

  getSelectedProducts() {
    return this.selectedProducts$;
  }

  resetSelectedProducts() {
    this.selectedProducts$.next([]);
  }

  setOrderConfirm(name: string, total: number) {
    const data: OrderConfirm = { name, total };
    this.orderConfirm$.next(data);
  }

  getOrderConfirm() {
    return this.orderConfirm$;
  }
}

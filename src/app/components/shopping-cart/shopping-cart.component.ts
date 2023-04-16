import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { UserInfor } from 'src/app/models/infor.model';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
})
export class ShoppingCartComponent implements OnInit, OnDestroy {
  selectedProduct: Product[] = [];
  totalPrice = 0;
  userInfor!: UserInfor;
  unsubcribe$: Subject<void> = new Subject();
  constructor(private cartService: CartService, private router: Router) {}

  ngOnDestroy(): void {
    this.unsubcribe$.next();
    this.unsubcribe$.complete();
  }

  ngOnInit(): void {
    this.cartService
      .getSelectedProducts()
      .pipe(takeUntil(this.unsubcribe$))
      .subscribe((res) => {
        this.totalPrice = 0;
        this.selectedProduct = [];
        this.selectedProduct = res;
        this.totalPrice = this.selectedProduct.reduce(
          (sum, item) => sum + item.price * (item.quantity as number),
          0
        );
      });
  }

  onSubmit(userInfor: UserInfor) {
    this.userInfor = userInfor;
    this.cartService.setOrderConfirm(this.userInfor.name, this.totalPrice);
    this.router.navigate(['/..','order-comfirm'])
  }
}

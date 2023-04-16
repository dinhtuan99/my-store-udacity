import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-order-confirm',
  templateUrl: './order-confirm.component.html',
  styleUrls: ['./order-confirm.component.css'],
})
export class OrderConfirmComponent implements OnInit, OnDestroy {
  unsubcribe$: Subject<void> = new Subject();
  name = '';
  total = 0;
  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    this.cartService
      .getOrderConfirm()
      .pipe(takeUntil(this.unsubcribe$))
      .subscribe((res) => {
        console.log(res);
        this.name = res.name;
        this.total = res.total;
      });
  }

  ngOnDestroy(): void {
    this.unsubcribe$.next();
    this.unsubcribe$.complete();
  }

  backToProducts() {
    this.router.navigate(['/..', 'products']);
    this.cartService.resetSelectedProducts();
  }
}

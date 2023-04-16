import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserInfor } from 'src/app/models/infor.model';

@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.css'],
})
export class CheckoutFormComponent implements OnInit {
  @Output() onSubmitUserInfor = new EventEmitter();
  @Input() selectedProductLength = 0;
  constructor() {}

  ngOnInit(): void {}

  onSubmit(formValue: UserInfor) {
    this.onSubmitUserInfor.emit(formValue);
  }
}

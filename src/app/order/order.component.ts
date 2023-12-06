import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OrderDetailsService } from '../services/order-details.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrl: './order.component.scss',
})
export class OrderComponent {
  orderForm = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    tel: [''],
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private detailsService: OrderDetailsService
  ) {}

  startOrder() {
    if (!this.orderForm.invalid) {
      this.detailsService.details = {
        name: this.orderForm.controls.name.value,
        tel: this.orderForm.controls.tel.value,
      };
      this.router.navigate(['salad']);
    }
  }
}

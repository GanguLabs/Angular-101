import { Component, OnInit } from '@angular/core';

import { ICustomer } from '../../shared/interfaces';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
})
export class CustomersListComponent implements OnInit {
  filteredCustomers: ICustomer[] = [];
  customersOrdertotal: number;
  currencyCode: string = 'USD';
  constructor() {}

  ngOnInit() {}

  calculateOrders() {
    this.customersOrdertotal = 0;
    this.filteredCustomers.forEach((cust: ICustomer) => {
      this.customersOrdertotal += cust.orderTotal || 0;
    });
  }
}

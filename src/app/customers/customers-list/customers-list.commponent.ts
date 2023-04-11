import { Component, OnInit } from '@angular/core';

import { ICustomer } from '../../shared/interfaces';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
})
export class CustomersListComponent implements OnInit {
  filteredCustommers: ICustomer[] = [];
  customersOrdertotal: number;
  currencyCode: string = 'USD';
  constructor() {}

  ngOnInit() {}
}

import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-customers-list',
    templateUrl: './customers-list.component.html'
})
export class CustomersListComponent implements OnInit {
    filteredCustommers: any[] = [];
    customersOrdertotal: number;
    currencyCode: string = 'USD';
    constructor() {}
    
    ngOnInit() {

    }
}
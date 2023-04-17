import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`, // './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title: string = 'angular-101';

  constructor() {}

  ngOnInit(): void {
    // this.title = "Hello World";
  }
}

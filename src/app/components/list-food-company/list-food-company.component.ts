import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-food-company',
  templateUrl: './list-food-company.component.html',
  styleUrls: ['./list-food-company.component.css']
})
export class ListFoodCompanyComponent implements OnInit {

@Input() quotations: string;

  constructor() {}

  ngOnInit() {
  }
}

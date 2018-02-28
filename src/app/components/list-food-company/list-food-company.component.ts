import { Component, OnInit } from '@angular/core';
import { QuotationsService } from './../../services/quotations.service';
@Component({
  selector: 'app-list-food-company',
  templateUrl: './list-food-company.component.html',
  styleUrls: ['./list-food-company.component.css']
})
export class ListFoodCompanyComponent implements OnInit {

  quotations: Array<any>;
  constructor(private quotationsService: QuotationsService) {}

  ngOnInit() {
    this.quotationsService
      .getList()
      .then(quotations => (this.quotations = quotations));
  }
}

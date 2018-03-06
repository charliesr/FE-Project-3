import { Component, OnInit } from '@angular/core';
import { QuotationsService } from './../../services/quotations.service';

@Component({
  selector: 'app-profile-food-company',
  templateUrl: './profile-food-company.component.html',
  styleUrls: ['./profile-food-company.component.css']
})
export class ProfileFoodCompanyComponent implements OnInit {

  quotations: Array<any>;
  constructor(private quotationsService: QuotationsService, ) { }

  ngOnInit() {
    this.quotationsService
      .getList()
      .then(quotations => (this.quotations = quotations));
  }

}

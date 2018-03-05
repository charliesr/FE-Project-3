import { Component, OnInit } from '@angular/core';
import { QuotationsService } from './../../services/quotations.service';


@Component({
  selector: 'app-profile-packaging-company',
  templateUrl: './profile-packaging-company.component.html',
  styleUrls: ['./profile-packaging-company.component.css']
})
export class ProfilePackagingCompanyComponent implements OnInit {

  quotations: Array<any>;

  constructor(private quotationsService: QuotationsService) { }

  ngOnInit() {
    this.quotationsService
      .getFullList()
      .then(quotations => (this.quotations = quotations));
  }
}

import { Component, OnInit } from '@angular/core';
import { QuotationsService } from '../../services/quotations.service';

@Component({
  selector: 'app-quotation',
  templateUrl: './quotation.component.html',
  styleUrls: ['./quotation.component.css']
})
export class QuotationComponent implements OnInit {

  constructor(private quotationsService: QuotationsService) { }

  quotations: Array<any>;
  ngOnInit() {
    this.quotationsService
      .getOne()
      .then(quotations => (this.quotations = quotations));
  }

}

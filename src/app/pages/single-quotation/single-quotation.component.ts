import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuotationsService } from './../../services/quotations.service';

@Component({
  selector: 'app-single-quotation',
  templateUrl: './single-quotation.component.html',
  styleUrls: ['./single-quotation.component.css']
})
export class SingleQuotationComponent implements OnInit {
  quotationid: String;
  quotations: Array<any>;



  constructor(private quotationsService: QuotationsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe((params) => this.quotationid = String(params['_id']));
    this.quotationsService
      .getOne(this.quotationid)
      .then(quotations => {
        this.quotations = quotations;
        console.log(this.quotations);
      });
  }
}

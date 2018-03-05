import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-quotation',
  templateUrl: './single-quotation.component.html',
  styleUrls: ['./single-quotation.component.css']
})
export class SingleQuotationComponent implements OnInit {
  @Input() quotations: string;
  quotationID: Number;
  constructor(private route: ActivatedRoute) { }


  ngOnInit() {
    this.route.params
    .subscribe((params) => this.quotationID = Number(params['id']));
  }

}

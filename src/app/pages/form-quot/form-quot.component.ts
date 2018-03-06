import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuotationsService } from '../../services/quotations.service';

@Component({
  selector: 'app-form-quot',
  templateUrl: './form-quot.component.html',
  styleUrls: ['./form-quot.component.scss']
})
export class FormQuotComponent implements OnInit {
  quotations;
  constructor(private quotationsService: QuotationsService, private router: Router) { }

  ngOnInit() {
  }

  handleSubmitForm(event) {

    this.quotationsService
      .addTask(event)
      .then(quotations => (this.quotations = quotations))
      .then(result => this.router.navigate(['/profile']));
    console.log(event);
  }
}

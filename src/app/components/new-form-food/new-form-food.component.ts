import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { QuotationsService } from '../../services/quotations.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-form-food',
  templateUrl: './new-form-food.component.html',
  styleUrls: ['./new-form-food.component.css']
})
export class NewFormFoodComponent implements OnInit {
  name: any;
  feedbackEnabled = false;
  error = null;
  processing = false;

  @Output() submitForm = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {}

  newQuotationForm(form) {
    this.error = '';
    this.feedbackEnabled = true;
    if (form.valid) {
      this.processing = true;
      this.submitForm.emit(this.name);
      this.processing = false;
      this.feedbackEnabled = false;
      } else {
      this.feedbackEnabled = false;
    }

    }
  }




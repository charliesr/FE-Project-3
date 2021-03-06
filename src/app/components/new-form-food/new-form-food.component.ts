import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { QuotationsService } from '../../services/quotations.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-new-form-food',
  templateUrl: './new-form-food.component.html',
  styleUrls: ['./new-form-food.component.scss']
})
export class NewFormFoodComponent implements OnInit {
  name: any;
  width: any;
  height: any;
  colors: any;
  feedbackEnabled = false;
  error = null;
  processing = false;

  @Output() submitForm = new EventEmitter<any>();
  constructor(private _location: Location) { }

  backClicked() {
    this._location.back();
  }

  ngOnInit() {}

  newQuotationForm(form) {
    this.error = '';
    this.feedbackEnabled = true;
    if (form.valid) {
      const data = {
        name: this.name,
        width: this.width,
        height: this.height,
        colors: this.colors
      };
      this.processing = true;
      this.submitForm.emit(data);
      this.processing = false;
      this.feedbackEnabled = false;
      } else {
      this.feedbackEnabled = false;
    }

    }
  }




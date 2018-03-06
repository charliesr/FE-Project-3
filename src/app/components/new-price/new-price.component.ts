import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-new-price',
  templateUrl: './new-price.component.html',
  styleUrls: ['./new-price.component.css']
})
export class NewPriceComponent implements OnInit {
  processing = false;
  price: any;
  feedbackEnabled = false;

  @Output() putPrice = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {}

  handlePutPrice(form) {
    this.feedbackEnabled = true;
    if (form.valid) {
      this.processing = true;
      this.putPrice.emit(this.price);
      this.processing = false;
      this.feedbackEnabled = false;
      console.log(this.putPrice);
    } else {
      this.feedbackEnabled = true;
    }
  }
}

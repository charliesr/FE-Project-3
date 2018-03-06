import { Component, OnInit, Output } from '@angular/core';
import { QuotationsService } from './../../services/quotations.service';
import { AuthService } from './../../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-pack-price',
  templateUrl: './pack-price.component.html',
  styleUrls: ['./pack-price.component.css']
})
export class PackPriceComponent implements OnInit {



  constructor(private route: ActivatedRoute,
   private quotationsService: QuotationsService, private authService: AuthService, private router: Router) { }
  user: any;
  quotations: any;
  price;
  id: any;

  ngOnInit() {
    this.route.params.subscribe(params => {

      this.id = params['id']; // (+) converts string 'id' to a number
      console.log('lololol', this.id);
      console.log(this.quotations);
            // In a real app: dispatch action to load the details here.
    });
  }

  putPrice(event) {
    this.quotationsService.updateQuotation(event, this.id)
    .then((price) => {
      this.price = price;
      this.router.navigate(['company']);
    });

  }
}

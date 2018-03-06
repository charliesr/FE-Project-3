import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-quotation',
  templateUrl: './quotation.component.html',
  styleUrls: ['./quotation.component.css']
})
export class QuotationComponent implements OnInit {
  @Input() quotations: any;
  user: any;
  id: any;
  constructor(private route: ActivatedRoute, private authService: AuthService, private router: Router) { }


  ngOnInit() {

    this.route.params.subscribe(params => {

    this.id = params['_id']; // (+) converts string 'id' to a number
      console.log('lololol', this.id);
      // In a real app: dispatch action to load the details here.
    });

    this.authService
      .me()
      .then((user) => {
        this.user = user;
        console.log(user);
      });
  }

}

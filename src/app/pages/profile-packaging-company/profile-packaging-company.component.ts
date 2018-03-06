import { Component, OnInit } from '@angular/core';
import { QuotationsService } from './../../services/quotations.service';
import { AuthService } from './../../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';




@Component({
  selector: 'app-profile-packaging-company',
  templateUrl: './profile-packaging-company.component.html',
  styleUrls: ['./profile-packaging-company.component.scss']
})
export class ProfilePackagingCompanyComponent implements OnInit {
  user: any;
  quotations: Array<any>;

  constructor(private quotationsService: QuotationsService, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.quotationsService
      .getFullList()
      .then(quotations => {
        (this.quotations = quotations);
      });
      this.authService
      .me()
      .then((user) => {
          this.user = user;
          console.log(user);
        });

  }
}

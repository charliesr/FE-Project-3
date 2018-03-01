import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';

import { AuthService } from '../services/auth.service';

@Injectable()
export class RequireFoodService implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }
  canActivate(): Promise<boolean> {
    return this.authService
      .me()
      .then(user => {
        if (user.foodCompany === true) {
          return true;
        } else {
          this.router.navigate(['/company']);
          return false;
        }
      })
      .catch(error => {
        console.error(error);
        return false;
      });
  }
}

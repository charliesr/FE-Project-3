import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-signup',
  templateUrl: './auth-signup.component.html',
  styleUrls: ['./auth-signup.component.scss']
})
export class AuthSignupComponent implements OnInit {
  feedbackEnabled = false;
  error = null;
  processing = false;

  username: String;
  password: String;
  // ... model (e,g. username: String)

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}

  submitForm(form) {
    this.error = '';
    this.feedbackEnabled = true;
    const data = {
      username: this.username,
      password: this.password,
    };
    if (form.valid) {
      this.processing = true;
      this.authService
        .signup(data)
        .then(result => {
          if (result.foodCompany === true) {
            this.router.navigate(['/company']);
          } else {
            this.router.navigate(['/profile']);
          }

        })
        .catch(err => {
          this.error = err.error.error;
          this.processing = false;
          this.feedbackEnabled = false;
        });
    }
  }
}

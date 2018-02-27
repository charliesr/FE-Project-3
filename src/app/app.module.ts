import { AuthService } from './services/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';


import { RequireAnonGuardService } from './guards/require-anon-guard.service';
import { RequireUserGuardService } from './guards/require-user-guard.service';
import { InitAuthGuardService } from './guards/init-auth-guard.service';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';


// -- routes

 const routes: Routes = [
   { path: '',  component: AppComponent, canActivate: [ InitAuthGuardService ] },
  //  { path: 'login',  component: AuthLoginPageComponent, canActivate: [ RequireAnonGuardService ] },
  //  { path: 'signup',  component: AuthSignupPageComponent, canActivate: [ RequireAnonGuardService ] },
  //  { path: 'page',  component: ... , canActivate: [ RequireUserGuardService ] },
   { path: '**', redirectTo: '' }
 ];

@NgModule({
  declarations: [
    AppComponent,
    ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    HttpModule
  ],
  providers: [InitAuthGuardService,
    RequireAnonGuardService,
    RequireUserGuardService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

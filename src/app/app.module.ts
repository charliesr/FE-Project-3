import { AuthService } from './services/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import {TabModule} from 'angular-tabs-component';



import { RequireAnonGuardService } from './guards/require-anon-guard.service';
import { RequireUserGuardService } from './guards/require-user-guard.service';
import { InitAuthGuardService } from './guards/init-auth-guard.service';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthLoginComponent } from './components/auth-login/auth-login.component';
import { AuthSignupComponent } from './components/auth-signup/auth-signup.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProfileFoodCompanyComponent } from './pages/profile-food-company/profile-food-company.component';
import { ProfilePackagingCompanyComponent } from './pages/profile-packaging-company/profile-packaging-company.component';



// -- routes

 const routes: Routes = [
   { path: '',  component: HomePageComponent, canActivate: [ InitAuthGuardService ] },
   { path: 'logout',  component: HomePageComponent, canActivate: [ RequireUserGuardService ] },
   { path: 'profile',  component: ProfileFoodCompanyComponent, canActivate: [ RequireUserGuardService ] },
   { path: 'company',  component: ProfilePackagingCompanyComponent, canActivate: [ RequireUserGuardService ] },
  //  { path: 'page',  component: ... , canActivate: [ RequireUserGuardService ] },
   { path: '**', redirectTo: '' }
 ];

@NgModule({
  declarations: [
    AppComponent,
    AuthLoginComponent,
    AuthSignupComponent,
    HomePageComponent,
    ProfileFoodCompanyComponent,
    ProfilePackagingCompanyComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    HttpModule,
    FormsModule,
    TabModule
  ],
  providers: [
    InitAuthGuardService,
    RequireAnonGuardService,
    RequireUserGuardService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

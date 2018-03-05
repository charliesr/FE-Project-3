import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { TabModule } from 'angular-tabs-component';

import { AuthService } from './services/auth.service';
import { QuotationsService } from './services/quotations.service';

import { RequireAnonGuardService } from './guards/require-anon-guard.service';
import { RequireUserGuardService } from './guards/require-user-guard.service';
import { InitAuthGuardService } from './guards/init-auth-guard.service';
import { RequireFoodService } from './guards/require-food.service';
import { PackUserService } from './guards/pack-user.service';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthLoginComponent } from './components/auth-login/auth-login.component';
import { AuthSignupComponent } from './components/auth-signup/auth-signup.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProfileFoodCompanyComponent } from './pages/profile-food-company/profile-food-company.component';
import { ProfilePackagingCompanyComponent } from './pages/profile-packaging-company/profile-packaging-company.component';
import { NewFormFoodComponent } from './components/new-form-food/new-form-food.component';
import { ListFoodCompanyComponent } from './components/list-food-company/list-food-company.component';
import { FormQuotComponent } from './pages/form-quot/form-quot.component';
import { QuotationComponent } from './pages/quotation/quotation.component';
import { SingleQuotationComponent } from './components/single-quotation/single-quotation.component';




// -- routes

 const routes: Routes = [
   { path: '', component: HomePageComponent, canActivate: [RequireAnonGuardService ] },
   { path: 'profile', component: ProfileFoodCompanyComponent, canActivate: [RequireFoodService ] },
   { path: 'company', component: ProfilePackagingCompanyComponent, canActivate: [PackUserService ] },
   { path: 'newQuotation', component: FormQuotComponent, canActivate: [ RequireUserGuardService ] },
   { path: ':id', component: SingleQuotationComponent, canActivate: [RequireFoodService] },

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
    ProfilePackagingCompanyComponent,
    NewFormFoodComponent,
    ListFoodCompanyComponent,
    FormQuotComponent,
    QuotationComponent,
    SingleQuotationComponent,
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
    RequireFoodService,
    PackUserService,
    AuthService,
    QuotationsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

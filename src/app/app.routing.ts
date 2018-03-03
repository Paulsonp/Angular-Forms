import { ModuleWithProviders, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppSignUpComponent } from './app-sign-up/app-sign-up.component';
import { AppSignUpReactiveComponent } from './app-sign-up-reactive/app-sign-up-reactive.component';
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { LandingPageComponent } from './app-components/landing-page/landing-page.component';
// import { AppForgotResetComponent } from './app-forgot-reset/app-forgot-reset.component';
// import { AuthGuard } from './store/login/login-auth.guard';

const appRoutes: Routes = [
    { path: '', redirectTo: 'form-template', pathMatch: 'full'},
    { path: '', component: AppLayoutComponent, // canActivate: [AuthGuard],
        children: [
          {
            path: 'list',
            loadChildren: 'app/app-components/app-list/app-list.module#AppListModule'
          }
        ],
    },
    { path: 'form-template', component: AppSignUpComponent },
    { path: 'form-reactive', component: AppSignUpReactiveComponent }
      // { path: 'forgot', loadChildren: 'app/app-forgot/app-forgot.module#AppForgotModule'}
      //   , canActivate: [UnauthenticatedGuard] , canActivate: [AuthGuard]
  ];

  @NgModule({
    imports: [
      RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }

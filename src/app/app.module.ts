import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule, MatInputModule, MatCheckboxModule } from '@angular/material';
import { MatButtonModule, MatSelectModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';

import { AppComponent } from './app.component';
import { AppSignUpComponent } from './app-sign-up/app-sign-up.component';
import { AppSignUpReactiveComponent } from './app-sign-up-reactive/app-sign-up-reactive.component';

const appRoutes: Routes = [
  { path: '',   redirectTo: '/form-template', pathMatch: 'full' },
  { path: 'form-template', component: AppSignUpComponent },
  { path: 'form-reactive', component: AppSignUpReactiveComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    AppSignUpComponent,
    AppSignUpReactiveComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

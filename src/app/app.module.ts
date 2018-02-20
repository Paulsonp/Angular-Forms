import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule, MatInputModule, MatCheckboxModule } from '@angular/material';
import { MatButtonModule, MatSelectModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { reducer } from './store/list.reducer';
import { ListEffects } from './store/list.effect';
import { FirebaseService } from './firebase.service';

import { AppComponent } from './app.component';
import { AppSignUpComponent } from './app-sign-up/app-sign-up.component';
import { AppSignUpReactiveComponent } from './app-sign-up-reactive/app-sign-up-reactive.component';

const appRoutes: Routes = [
  { path: '',   redirectTo: '/form-template', pathMatch: 'full' },
  { path: 'form-template', component: AppSignUpComponent },
  { path: 'form-reactive', component: AppSignUpReactiveComponent },
];

export const firebaseCredentials = {
  apiKey: "AIzaSyAdFCC-SI4IpvamGRAOL--JzmcIye0Qc_U",
  authDomain: "angular-ngrx-33e70.firebaseapp.com",
  databaseURL: "https://angular-ngrx-33e70.firebaseio.com",
  projectId: "angular-ngrx-33e70",
  storageBucket: "",
  messagingSenderId: "403966704805"
}

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
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseCredentials),
    StoreModule.forRoot({reducer}),
    EffectsModule.forRoot([ListEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 60
    }),
    HttpClientModule,
    HttpModule,
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
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }

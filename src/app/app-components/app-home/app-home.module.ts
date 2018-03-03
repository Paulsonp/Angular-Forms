import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppHomeComponent } from './app-home.component';
import { AppHomeRoutingModule } from './app-home.routing';


@NgModule({
  imports: [
    AppHomeRoutingModule
  ],
  declarations: [
    AppHomeComponent
  ]
})

export class AppHomeModule { }

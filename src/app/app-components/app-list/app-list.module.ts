import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { ListDataComponent } from './list-data/list-data.component';
import { ListService } from './../../store/list/list.service';
import { ListEffects } from './../../store/list/list.effect';
import { listReducer } from '../../store/list/list.reducer';
import { ListRoutingModule } from './app-list.routing';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    HttpModule,
    ReactiveFormsModule,
    ListRoutingModule,
    StoreModule.forFeature('ListReducer', listReducer),
    EffectsModule.forFeature([ListEffects]),
    MatCardModule,
    FlexLayoutModule
  ],
  providers: [ ListService ],
  declarations: [
    ListDataComponent
  ]
})

export class AppListModule { }

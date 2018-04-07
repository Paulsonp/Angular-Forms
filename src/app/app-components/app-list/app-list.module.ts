import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ToastrModule, ToastrService } from 'ngx-toastr';

import { AddListComponent } from './list-add/list-add.component';
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
    MatProgressSpinnerModule,
    MatButtonModule,
    MatDialogModule,
    FlexLayoutModule,
    MatInputModule,
    FormsModule,
    ToastrModule.forRoot()
  ],
  providers: [ListService, ToastrService],
  declarations: [ListDataComponent, AddListComponent],
  entryComponents: [AddListComponent]
})
export class AppListModule {}

import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { ListDataComponent } from './list-data/list-data.component';

const listRoutes: Routes = [
    {
        path: '',
        component: ListDataComponent
    }
];

export const ListRoutingModule: ModuleWithProviders = RouterModule.forChild(listRoutes);

import { AppHomeComponent } from './app-home.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

const appRoutes: Routes = [
    {
        path: '',
        component: AppHomeComponent
    }
];

export const AppHomeRoutingModule: ModuleWithProviders = RouterModule.forChild(appRoutes);

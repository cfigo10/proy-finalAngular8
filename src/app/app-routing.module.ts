import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './shared/layouts/admin-layout/admin-layout.component';


const routes: Routes = [
    { path: '', redirectTo: '', pathMatch: 'full' },
    {
      path: '',
      component: AdminLayoutComponent,
      children: [
        { path: '', loadChildren: './shared/layouts/admin-layout/admin-layout.module#AdminLayoutModule' },
      ]
    }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

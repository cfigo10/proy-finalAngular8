import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminLayoutRoutingModule } from './admin-layout-routing.module';
import { HomeComponent } from 'src/app/components/home/home.component';
import { CardComponent } from 'src/app/components/card/card.component';
import { MaterialModule } from 'src/app/modules/material.module';
import { idFilterPipe } from 'src/app/pipes/idFilter.pipe';
import { SearchPipe } from 'src/app/pipes/search.pipe';
import { levelFilterPipe } from 'src/app/pipes/levelFilter.pipe';




@NgModule({
  declarations: [
    HomeComponent,
    CardComponent,
    idFilterPipe,
    SearchPipe,
    levelFilterPipe,
  ],
  imports: [
    CommonModule,
    AdminLayoutRoutingModule,
    MaterialModule
  ]
})
export class AdminLayoutModule { }

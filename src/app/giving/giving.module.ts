import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GivingComponent } from './giving.component';
import { GivingRoutingModule } from './giving-routing.module';



@NgModule({
  declarations: [
    GivingComponent
  ],
  imports: [
    CommonModule,
    GivingRoutingModule
  ]
})
export class GivingModule { }

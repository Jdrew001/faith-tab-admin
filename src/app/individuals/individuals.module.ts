import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndividualsRoutingModule } from './individuals-routing.module';
import { IndividualsComponent } from './individuals.component';
import {TableModule} from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';


@NgModule({
  declarations: [
    IndividualsComponent
  ],
  imports: [
    CommonModule,
    IndividualsRoutingModule,
    TableModule,
    ButtonModule,
    TooltipModule
  ]
})
export class IndividualsModule { }

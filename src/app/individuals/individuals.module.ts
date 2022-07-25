import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndividualsRoutingModule } from './individuals-routing.module';
import { IndividualsComponent } from './individuals.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { AccordionModule } from 'primeng/accordion';
import { DialogModule } from 'primeng/dialog';
import { DetailsComponent } from './details/details.component';
import { CreateComponent } from './create/create.component';
import { RadioButtonModule } from 'primeng/radiobutton';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule } from 'primeng/inputtext';


@NgModule({
  declarations: [
    IndividualsComponent,
    DetailsComponent,
    CreateComponent
  ],
  imports: [
    CommonModule,
    IndividualsRoutingModule,
    TableModule,
    ButtonModule,
    TooltipModule,
    DialogModule,
    AccordionModule,
    RadioButtonModule,
    InputTextModule
  ]
})
export class IndividualsModule { }

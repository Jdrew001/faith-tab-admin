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
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { TabViewModule } from 'primeng/tabview';
import { AvatarModule } from 'primeng/avatar';
import { CardModule } from 'primeng/card';
import { TimelineModule } from 'primeng/timeline';
import { DividerModule } from 'primeng/divider';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    IndividualsComponent,
    DetailsComponent,
    CreateComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    IndividualsRoutingModule,
    TableModule,
    ButtonModule,
    TooltipModule,
    DialogModule,
    AccordionModule,
    RadioButtonModule,
    InputTextModule,
    DropdownModule,
    CalendarModule,
    InputTextareaModule,
    TabViewModule,
    AvatarModule,
    CardModule,
    TimelineModule,
    DividerModule
  ]
})
export class IndividualsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNavigationComponent } from './component/top-navigation/top-navigation.component';
import { LeftNavigationComponent } from './component/left-navigation/left-navigation.component';
import { RouterModule } from '@angular/router';
import {TooltipModule} from 'primeng/tooltip';
import { GraphCardComponent } from './component/graph-card/graph-card.component';
import {ChartModule} from 'primeng/chart';

@NgModule({
  declarations: [
    TopNavigationComponent,
    LeftNavigationComponent,
    GraphCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    TooltipModule,
    ChartModule
  ],
  exports: [
    TopNavigationComponent,
    LeftNavigationComponent,
    GraphCardComponent
  ]
})
export class SharedModule { }

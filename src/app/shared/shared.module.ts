import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNavigationComponent } from './component/top-navigation/top-navigation.component';
import { LeftNavigationComponent } from './component/left-navigation/left-navigation.component';
import { RouterModule } from '@angular/router';
import {TooltipModule} from 'primeng/tooltip';



@NgModule({
  declarations: [
    TopNavigationComponent,
    LeftNavigationComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    TooltipModule
  ],
  exports: [
    TopNavigationComponent,
    LeftNavigationComponent
  ]
})
export class SharedModule { }

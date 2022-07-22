import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNavigationComponent } from './component/top-navigation/top-navigation.component';
import { LeftNavigationComponent } from './component/left-navigation/left-navigation.component';



@NgModule({
  declarations: [
    TopNavigationComponent,
    LeftNavigationComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TopNavigationComponent,
    LeftNavigationComponent
  ]
})
export class SharedModule { }

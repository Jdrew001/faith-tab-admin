import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNavigationComponent } from './component/top-navigation/top-navigation.component';
import { LeftNavigationComponent } from './component/left-navigation/left-navigation.component';
import { RouterModule } from '@angular/router';
import {TooltipModule} from 'primeng/tooltip';
import { GraphCardComponent } from './component/graph-card/graph-card.component';
import { ChartModule } from 'primeng/chart';
import { HistoryComponent } from './component/history/history.component';
import { TimelineModule } from 'primeng/timeline';
import { UpcomingTaskComponent } from './component/upcoming-task/upcoming-task.component';
import { ButtonModule } from 'primeng/button';
import { InboxComponent } from './component/inbox/inbox.component';
import { PanelModule } from 'primeng/panel';
import { ChipModule } from 'primeng/chip';
import { CardModule } from 'primeng/card';
import { TimelineDividerPipe } from './pipes/timeline-divider.pipe';

@NgModule({
  declarations: [
    TopNavigationComponent,
    LeftNavigationComponent,
    GraphCardComponent,
    HistoryComponent,
    UpcomingTaskComponent,
    InboxComponent,
    TimelineDividerPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    TooltipModule,
    ChartModule,
    TimelineModule,
    ButtonModule,
    PanelModule,
    ChipModule,
    CardModule
  ],
  exports: [
    TopNavigationComponent,
    LeftNavigationComponent,
    GraphCardComponent,
    HistoryComponent,
    UpcomingTaskComponent,
    InboxComponent,
    TimelineDividerPipe
  ]
})
export class SharedModule { }

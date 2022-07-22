import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule),
    canActivate: []
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
    canActivate: []
  },
  {
    path: 'groups',
    loadChildren: () => import('./groups/groups.module').then(m => m.GroupsModule),
    canActivate: []
  },
  {
    path: 'interactions',
    loadChildren: () => import('./interactions/interactions.module').then(m => m.InteractionsModule),
    canActivate: []
  },
  {
    path: 'giving',
    loadChildren: () => import('./giving/giving.module').then(m => m.GivingModule),
    canActivate: []
  },
  {
    path: 'schedule',
    loadChildren: () => import('./schedule/schedule.module').then(m => m.ScheduleModule),
    canActivate: []
  },
  {
    path: 'report',
    loadChildren: () => import('./reports/reports.module').then(m => m.ReportsModule),
    canActivate: []
  },
  {
    path: 'attendance',
    loadChildren: () => import('./attendance/attendance.module').then(m => m.AttendanceModule),
    canActivate: []
  },
  { path: '/', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

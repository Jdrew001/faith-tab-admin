import { Component, OnInit } from '@angular/core';
import { GraphCardConfig } from '../shared/component/graph-card/model/graph-card.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  graphCards: Array<GraphCardConfig> = [
    {
      icon: 'pi-users',
      label: 'First Time Guests',
      value: '120',
      color: '#1B92D4'
    },
    {
      icon: 'pi-users',
      label: 'First Time Guests',
      value: '120',
      color: '#1B92D4'
    },
    {
      icon: 'pi-users',
      label: 'First Time Guests',
      value: '120',
      color: '#1B92D4'
    },
    {
      icon: 'pi-users',
      label: 'First Time Guests',
      value: '120',
      color: '#1B92D4'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

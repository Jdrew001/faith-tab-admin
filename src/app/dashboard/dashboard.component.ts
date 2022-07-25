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
      label: 'Monthly First Time Guests',
      value: '120',
      color: '#1B92D4',
      graphData: {
        labels: ['', '', '', '', '', '', ''],
        datasets: [
            {
                label: 'First Dataset',
                data: [10, 2, 3, 2, 0, 2, 15],
                fill: true,
                borderColor: '#1B92D4',
                orderRadius: 15,
                tension: .4,
                backgroundColor: '#1B92D4',
                gridLines: {
                  display: false
              }
            }
        ]
      }
    },
    {
      icon: 'pi-users',
      label: 'Weekly Attendance',
      value: '120',
      color: '#896FF4',
      graphData: {
        labels: ['', '', '', '', '', '', ''],
        datasets: [
            {
                label: 'First Dataset',
                data: [65, 59, 35, 40, 56, 23, 25],
                fill: true,
                borderColor: '#896FF4',
                orderRadius: 15,
                tension: .4,
                backgroundColor: '#896FF4',
                gridLines: {
                  display: false
              }
            }
        ]
      }
    },
    {
      icon: 'pi-users',
      label: 'Pending Tasks',
      value: '10',
      color: '#DE911D',
      graphData: {
        labels: ['', '', '', '', '', '', ''],
        datasets: [
            {
                label: 'First Dataset',
                data: [2, 0, 2, 3, 5, 4, 3],
                fill: true,
                borderColor: '#DE911D',
                orderRadius: 15,
                tension: .4,
                backgroundColor: '#DE911D',
                gridLines: {
                  display: false
              }
            }
        ]
      }
    },
    {
      icon: 'pi-users',
      label: 'Completed Tasks',
      value: '10',
      color: '#27AB83',
      graphData: {
        labels: ['', '', '', '', '', '', ''],
        datasets: [
            {
                label: 'First Dataset',
                data: [10, 11, 12, 13, 10, 8, 12],
                fill: true,
                borderColor: '#27AB83',
                orderRadius: 15,
                tension: .4,
                backgroundColor: '#27AB83',
                gridLines: {
                  display: false
              }
            }
        ]
      }
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

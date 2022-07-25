import { Component, Input, OnInit } from '@angular/core';
import { GraphCardConfig } from './model/graph-card.model';

@Component({
  selector: 'app-graph-card',
  templateUrl: './graph-card.component.html',
  styleUrls: ['./graph-card.component.scss']
})
export class GraphCardComponent implements OnInit {

  @Input() config: GraphCardConfig = new GraphCardConfig();

  basicOptions = {
    responsive: true,
    maintainAspectRatio: false,
    width: "100%",
    height: "50%",
    layout: {
      padding: {
        left: -10,
        bottom: -10
      }
    },
    gridLines: {
      display: false
    },
    elements: {
      point:{
          radius: 0
      }
    },
    scales: {
      x: {
        grid: {
          display: false,
          drawBorder: false
        },
        ticks: {
          display: false
        } 
      },
      y: {
        grid: {
          display: false,
          drawBorder: false
        },
        ticks: {
          display: false
        }
      },
    },
    plugins: {
      legend: {
          display: false
      },
      title: {
        display: false
      },
    }
  };

  constructor() { }

  ngOnInit(): void {
  }

}

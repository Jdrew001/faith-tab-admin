import { Component, Input, OnInit } from '@angular/core';
import { GraphCardConfig } from './model/graph-card.model';

@Component({
  selector: 'app-graph-card',
  templateUrl: './graph-card.component.html',
  styleUrls: ['./graph-card.component.scss']
})
export class GraphCardComponent implements OnInit {

  @Input() config: GraphCardConfig = new GraphCardConfig();

  basicData = {
    labels: ['', '', '', '', '', '', ''],
    datasets: [
        {
            label: 'First Dataset',
            data: [65, 59, 80, 81, 56, 100, 150],
            fill: true,
            borderColor: '#42A5F5',
            orderRadius: 15,
            tension: .4,
            backgroundColor: '#42A5F5',
            gridLines: {
              display: false
           }
        }
    ]
  };

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

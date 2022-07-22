import { Component, Input, OnInit } from '@angular/core';
import { LeftNavModel } from './model/left-nav.model';

@Component({
  selector: 'app-left-navigation',
  templateUrl: './left-navigation.component.html',
  styleUrls: ['./left-navigation.component.scss']
})
export class LeftNavigationComponent implements OnInit {

  @Input() leftMenuConfig: Array<LeftNavModel> = [];

  constructor() { }

  ngOnInit(): void {
  }

  onMenuClick(menuItem: LeftNavModel) {

  }

}

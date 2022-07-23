import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AppConstant } from './app.constant';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'faith-tab-admin';
  leftMenuConfig = AppConstant.LEFT_MENU

  get isLogin(): boolean { return this.route.url.includes('login') ?? false; }

  constructor(
    public route: Router
  ) {

  }

  ngOnInit(): void {
  }
}

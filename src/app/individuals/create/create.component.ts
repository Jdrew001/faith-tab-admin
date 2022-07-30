import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  selectedValue = null;
  addressType = null;
  addressTypes = [
    {name: 'Residental', value: 'RESIDENTIAL'},
    {name: 'Mailing', value: 'MAILING'},
    {name: 'Mailing & Residental', value: 'MAILING_RESIDENTAL'}
  ];
  value: any = null;
  property: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}

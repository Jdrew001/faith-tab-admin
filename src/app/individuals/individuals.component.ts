import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-individuals',
  templateUrl: './individuals.component.html',
  styleUrls: ['./individuals.component.scss']
})
export class IndividualsComponent implements OnInit {

  display: boolean = false;

  individuals = [
    {
      firstName: 'Drew',
      lastName: 'Atkison',
      phone: '682-414-0386',
      email: 'dtatkison@gmail.com'
    },
    {
      firstName: 'Drew',
      lastName: 'Atkison',
      phone: '682-414-0386',
      email: 'dtatkison@gmail.com'
    },
    {
      firstName: 'Drew',
      lastName: 'Atkison',
      phone: '682-414-0386',
      email: 'dtatkison@gmail.com'
    },
    {
      firstName: 'Drew',
      lastName: 'Atkison',
      phone: '682-414-0386',
      email: 'dtatkison@gmail.com'
    },
    {
      firstName: 'Drew',
      lastName: 'Atkison',
      phone: '682-414-0386',
      email: 'dtatkison@gmail.com'
    },
    {
      firstName: 'Drew',
      lastName: 'Atkison',
      phone: '682-414-0386',
      email: 'dtatkison@gmail.com'
    },
    {
      firstName: 'Drew',
      lastName: 'Atkison',
      phone: '682-414-0386',
      email: 'dtatkison@gmail.com'
    },
    {
      firstName: 'Drew',
      lastName: 'Atkison',
      phone: '682-414-0386',
      email: 'dtatkison@gmail.com'
    },
    {
      firstName: 'Drew',
      lastName: 'Atkison',
      phone: '682-414-0386',
      email: 'dtatkison@gmail.com'
    },
    {
      firstName: 'Drew',
      lastName: 'Atkison',
      phone: '682-414-0386',
      email: 'dtatkison@gmail.com'
    },
    {
      firstName: 'Drew',
      lastName: 'Atkison',
      phone: '682-414-0386',
      email: 'dtatkison@gmail.com'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  addNewUser() {
    this.display = true;
  }

}

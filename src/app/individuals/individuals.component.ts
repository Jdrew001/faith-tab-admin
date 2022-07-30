import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-individuals',
  templateUrl: './individuals.component.html',
  styleUrls: ['./individuals.component.scss']
})
export class IndividualsComponent implements OnInit {
  
  formType: 'ADD' | 'DETAILS' | 'LIST' = 'DETAILS';

  individuals = [
    {
      id: '123',
      firstName: 'Drew',
      lastName: 'Atkison',
      phone: '682-414-0386',
      email: 'dtatkison@gmail.com'
    },
    {
      id: '123',
      firstName: 'Drew',
      lastName: 'Atkison',
      phone: '682-414-0386',
      email: 'dtatkison@gmail.com'
    },
    {
      id: '123',
      firstName: 'Drew',
      lastName: 'Atkison',
      phone: '682-414-0386',
      email: 'dtatkison@gmail.com'
    },
    {
      id: '123',
      firstName: 'Drew',
      lastName: 'Atkison',
      phone: '682-414-0386',
      email: 'dtatkison@gmail.com'
    },
    {
      id: '123',
      firstName: 'Drew',
      lastName: 'Atkison',
      phone: '682-414-0386',
      email: 'dtatkison@gmail.com'
    },
    {
      id: '123',
      firstName: 'Drew',
      lastName: 'Atkison',
      phone: '682-414-0386',
      email: 'dtatkison@gmail.com'
    },
    {
      id: '123',
      firstName: 'Drew',
      lastName: 'Atkison',
      phone: '682-414-0386',
      email: 'dtatkison@gmail.com'
    },
    {
      id: '123',
      firstName: 'Drew',
      lastName: 'Atkison',
      phone: '682-414-0386',
      email: 'dtatkison@gmail.com'
    },
    {
      id: '123',
      firstName: 'Drew',
      lastName: 'Atkison',
      phone: '682-414-0386',
      email: 'dtatkison@gmail.com'
    },
    {
      id: '123',
      firstName: 'Drew',
      lastName: 'Atkison',
      phone: '682-414-0386',
      email: 'dtatkison@gmail.com'
    },
    {
      id: '123',
      firstName: 'Drew',
      lastName: 'Atkison',
      phone: '682-414-0386',
      email: 'dtatkison@gmail.com'
    }
  ];
  interactions = [
    {
      action: "Phone Call",
      assignTo: "Jon Harris",
      date: '02/23/2022'
    },
    {
      action: "Text Message",
      assignTo: "Jon Harris",
      date: '02/23/2022'
    }
  ];
  documents = [
    {
      documentName: 'Some Document',
      uploadedBy: 'Jonathon Harris'
    },
    {
      documentName: 'Some Document',
      uploadedBy: 'Jonathon Harris'
    },
    {
      documentName: 'Some Document',
      uploadedBy: 'Jonathon Harris'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  viewUserDetails(member: any) {
    this.formType = 'DETAILS';
    console.log('member', member);
  }

  addNewUser() {
    this.formType = 'ADD';
  }

  discardCreate() {
    this.formType = 'LIST';
  }

}

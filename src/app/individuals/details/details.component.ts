import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

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
  familyMembers = [
    {
      firstName: 'Drew',
      lastName: 'Atkison',
      relationship: 'Main'
    },
    {
      firstName: 'Elizabeth',
      lastName: 'Atkison',
      relationship: 'Spouse'
    },
    {
      firstName: 'Noah',
      lastName: 'Atkison',
      relationship: 'Son'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

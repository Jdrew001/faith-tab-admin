import { Component, OnInit } from '@angular/core';
import { PrimeIcons } from 'primeng/api';
import { TimelineData, TimelineEvent } from '../models/timeline-events.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  givingDisplay: boolean = false;

  timelineData: TimelineData = {
    sections: [
      { sectionId: 0, sectionName: 'Today' },
      { sectionId: 1, sectionName: 'This Month' },
      { sectionId: 2, sectionName: 'August 2022' }
    ],
    events: [
      {sectionId: 0, action: 'Visited', detail: 'Visited by Pastor Harris', date: 'Jul 30, 2022', day: 'Saturday', icon: PrimeIcons.SHOPPING_CART, color: '#9C27B0'},
      {sectionId: 1, action: 'Phone Call', detail: 'Called by Melissa Harris', date: 'Jul 21, 2022', day: 'Thursday', icon: PrimeIcons.COG, color: '#673AB7'},
      {sectionId: 1, action: 'Phone Call', detail: 'Pastor Harris Called', date: 'Jul 16, 2022', day: 'Saturday', icon: PrimeIcons.SHOPPING_CART, color: '#9C27B0'},
      {sectionId: 1, action: 'Phone Call', detail: 'Pastor Harris Called', date: 'Jul 15, 2022', day: 'Friday', icon: PrimeIcons.SHOPPING_CART, color: '#9C27B0'},
      {sectionId: 2, action: 'First Added', detail: 'Added by Melissa Harris', date: 'June 22, 2022', day: 'Wednesday', icon: PrimeIcons.COG, color: '#673AB7'}
    ]
  }

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
  ];
  givingData = [
    { date: '07/30/2022', category: 'General', source: 'Input', details: 'Some notes bla bla bla', amount: '$200.00'},
    { date: '07/30/2022', category: 'General', source: 'Input', details: 'Some notes bla bla bla', amount: '$200.00'},
    { date: '07/30/2022', category: 'General', source: 'Input', details: 'Some notes bla bla bla', amount: '$200.00'}
  ];

  categories = [
    {
      label: 'Tithe', value: 'TITHE'
    },
    {
      label: 'General Offering', value: 'GENERAL_OFFERING'
    },
    {
      label: 'Building Fund', value: 'BUILDING_FUND'
    }
  ];

  givingItems = [
    {
      category: '',
      date: '',
      amount: '',
      checkNumber: '',
      notes: ''
    },
    {
      category: '',
      date: '',
      amount: '',
      checkNumber: '',
      notes: ''
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  addGivingItem() {
    this.givingItems.push(
      {
        category: '',
        date: '',
        amount: '',
        checkNumber: '',
        notes: ''
      }
    );
  }

  showGivingDialog() {
    console.log('hello??');
    this.givingDisplay = true;
  }

  closeDialog() {
    this.givingDisplay = false;
  }

}

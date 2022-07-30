import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';

import { IndividualsComponent } from './individuals.component';

describe('IndividualsComponent', () => {
  let component: IndividualsComponent;
  let fixture: ComponentFixture<IndividualsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndividualsComponent ],
      imports: [
        TableModule,
        TooltipModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndividualsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call add new user', () => {
    spyOn(component, 'addNewUser').and.callThrough();
    component.addNewUser();
    expect(component.addNewUser).toHaveBeenCalled();
    expect(component.formType).toBe('ADD');
  })
});

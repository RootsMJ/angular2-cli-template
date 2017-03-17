import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketDepartmentComponent } from './ticket-department.component';

describe('TicketDepartmentComponent', () => {
  let component: TicketDepartmentComponent;
  let fixture: ComponentFixture<TicketDepartmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketDepartmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

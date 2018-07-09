import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddactordetailsComponent } from './addactordetails.component';

describe('AddactordetailsComponent', () => {
  let component: AddactordetailsComponent;
  let fixture: ComponentFixture<AddactordetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddactordetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddactordetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

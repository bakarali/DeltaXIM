import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddproducerdetailsComponent } from './addproducerdetails.component';

describe('AddproducerdetailsComponent', () => {
  let component: AddproducerdetailsComponent;
  let fixture: ComponentFixture<AddproducerdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddproducerdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddproducerdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

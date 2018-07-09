import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmoviesdetailsComponent } from './addmoviesdetails.component';

describe('AddmoviesdetailsComponent', () => {
  let component: AddmoviesdetailsComponent;
  let fixture: ComponentFixture<AddmoviesdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddmoviesdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddmoviesdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

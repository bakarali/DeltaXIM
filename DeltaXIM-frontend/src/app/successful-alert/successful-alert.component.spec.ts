import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessfulAlertComponent } from './successful-alert.component';

describe('SuccessfulAlertComponent', () => {
  let component: SuccessfulAlertComponent;
  let fixture: ComponentFixture<SuccessfulAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccessfulAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessfulAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

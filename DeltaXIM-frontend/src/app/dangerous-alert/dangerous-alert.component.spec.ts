import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DangerousAlertComponent } from './dangerous-alert.component';

describe('DangerousAlertComponent', () => {
  let component: DangerousAlertComponent;
  let fixture: ComponentFixture<DangerousAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DangerousAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DangerousAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

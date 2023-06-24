import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReserveDoctorComponent } from './reserve-doctor.component';

describe('ReserveDoctorComponent', () => {
  let component: ReserveDoctorComponent;
  let fixture: ComponentFixture<ReserveDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReserveDoctorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReserveDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

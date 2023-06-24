import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorRegMainComponent } from './doctor-reg-main.component';

describe('DoctorRegMainComponent', () => {
  let component: DoctorRegMainComponent;
  let fixture: ComponentFixture<DoctorRegMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorRegMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorRegMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

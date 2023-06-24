import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReserveMainComponent } from './reserve-main.component';

describe('ReserveMainComponent', () => {
  let component: ReserveMainComponent;
  let fixture: ComponentFixture<ReserveMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReserveMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReserveMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

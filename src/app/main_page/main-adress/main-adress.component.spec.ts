import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainAdressComponent } from './main-adress.component';

describe('MainAdressComponent', () => {
  let component: MainAdressComponent;
  let fixture: ComponentFixture<MainAdressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainAdressComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainAdressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

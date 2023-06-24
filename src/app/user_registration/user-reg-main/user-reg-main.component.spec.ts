import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRegMainComponent } from './user-reg-main.component';

describe('UserRegMainComponent', () => {
  let component: UserRegMainComponent;
  let fixture: ComponentFixture<UserRegMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserRegMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserRegMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

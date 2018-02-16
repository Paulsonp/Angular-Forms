import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSignUpComponent } from './app-sign-up.component';

describe('AppSignUpComponent', () => {
  let component: AppSignUpComponent;
  let fixture: ComponentFixture<AppSignUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppSignUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

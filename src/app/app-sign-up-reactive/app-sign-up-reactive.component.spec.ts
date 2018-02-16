import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSignUpReactiveComponent } from './app-sign-up-reactive.component';

describe('AppSignUpReactiveComponent', () => {
  let component: AppSignUpReactiveComponent;
  let fixture: ComponentFixture<AppSignUpReactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppSignUpReactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppSignUpReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

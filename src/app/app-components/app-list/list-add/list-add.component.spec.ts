import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppEmployeeListComponent } from './app-employee-list.component';

describe('AppEmployeeListComponent', () => {
  let component: AppEmployeeListComponent;
  let fixture: ComponentFixture<AppEmployeeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppEmployeeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppEmployeeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

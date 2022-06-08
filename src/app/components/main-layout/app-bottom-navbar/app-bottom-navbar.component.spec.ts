import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppBottomNavbarComponent } from './app-bottom-navbar.component';

describe('AppBottomNavbarComponent', () => {
  let component: AppBottomNavbarComponent;
  let fixture: ComponentFixture<AppBottomNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppBottomNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppBottomNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayactivityComponent } from './todayactivity.component';

describe('TodayactivityComponent', () => {
  let component: TodayactivityComponent;
  let fixture: ComponentFixture<TodayactivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodayactivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodayactivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

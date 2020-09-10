import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayactivitysComponent } from './todayactivitys.component';

describe('TodayactivitysComponent', () => {
  let component: TodayactivitysComponent;
  let fixture: ComponentFixture<TodayactivitysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodayactivitysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodayactivitysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

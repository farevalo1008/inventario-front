import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticaltabsComponent } from './verticaltabs.component';

describe('VerticaltabsComponent', () => {
  let component: VerticaltabsComponent;
  let fixture: ComponentFixture<VerticaltabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerticaltabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerticaltabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

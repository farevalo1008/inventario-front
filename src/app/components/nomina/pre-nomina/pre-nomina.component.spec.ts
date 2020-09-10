import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreNominaComponent } from './pre-nomina.component';

describe('PreNominaComponent', () => {
  let component: PreNominaComponent;
  let fixture: ComponentFixture<PreNominaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreNominaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreNominaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

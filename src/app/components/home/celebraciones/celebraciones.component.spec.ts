import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CelebracionesComponent } from './celebraciones.component';

describe('CelebracionesComponent', () => {
  let component: CelebracionesComponent;
  let fixture: ComponentFixture<CelebracionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CelebracionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CelebracionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

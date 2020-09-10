import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservacionContratoComponent } from './observacion-contrato.component';

describe('ObservacionContratoComponent', () => {
  let component: ObservacionContratoComponent;
  let fixture: ComponentFixture<ObservacionContratoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObservacionContratoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservacionContratoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

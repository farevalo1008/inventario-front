import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditoriaAccesoComponent } from './auditoria-acceso.component';

describe('AuditoriaAccesoComponent', () => {
  let component: AuditoriaAccesoComponent;
  let fixture: ComponentFixture<AuditoriaAccesoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuditoriaAccesoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditoriaAccesoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

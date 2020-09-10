import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditoriaActividadesComponent } from './auditoria-actividades.component';

describe('AuditoriaActividadesComponent', () => {
  let component: AuditoriaActividadesComponent;
  let fixture: ComponentFixture<AuditoriaActividadesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuditoriaActividadesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditoriaActividadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

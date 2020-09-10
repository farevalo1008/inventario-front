import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliticasAsistenciaComponent } from './politicas-asistencia.component';

describe('PoliticasAsistenciaComponent', () => {
  let component: PoliticasAsistenciaComponent;
  let fixture: ComponentFixture<PoliticasAsistenciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoliticasAsistenciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoliticasAsistenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

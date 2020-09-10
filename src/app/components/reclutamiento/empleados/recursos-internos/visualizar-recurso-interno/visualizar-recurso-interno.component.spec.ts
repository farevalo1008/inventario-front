import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarRecursoInternoComponent } from './visualizar-recurso-interno.component';

describe('VisualizarRecursoInternoComponent', () => {
  let component: VisualizarRecursoInternoComponent;
  let fixture: ComponentFixture<VisualizarRecursoInternoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualizarRecursoInternoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizarRecursoInternoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

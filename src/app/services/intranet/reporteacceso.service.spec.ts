import { TestBed } from '@angular/core/testing';

import { ReporteaccesoService } from './reporteacceso.service';

describe('ReporteaccesoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReporteaccesoService = TestBed.get(ReporteaccesoService);
    expect(service).toBeTruthy();
  });
});

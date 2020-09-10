import { TestBed } from '@angular/core/testing';

import { ReporteactividadesService } from './reporteactividades.service';

describe('ReporteactividadesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReporteactividadesService = TestBed.get(ReporteactividadesService);
    expect(service).toBeTruthy();
  });
});

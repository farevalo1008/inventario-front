import { TestBed } from '@angular/core/testing';

import { ControlActividadesService } from './control-actividades.service';

describe('ControlActividadesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ControlActividadesService = TestBed.get(ControlActividadesService);
    expect(service).toBeTruthy();
  });
});

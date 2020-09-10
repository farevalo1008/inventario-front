import { TestBed } from '@angular/core/testing';

import { PersonalActivoInactivoService } from './personal-activo-inactivo.service';

describe('PersonalActivoInactivoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PersonalActivoInactivoService = TestBed.get(PersonalActivoInactivoService);
    expect(service).toBeTruthy();
  });
});

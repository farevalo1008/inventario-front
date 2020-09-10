import { TestBed } from '@angular/core/testing';

import { RegistroartService } from './registroart.service';

describe('RegistroartService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegistroartService = TestBed.get(RegistroartService);
    expect(service).toBeTruthy();
  });
});

import { TestBed, inject } from '@angular/core/testing';

import { BoughtInputModalService } from './bought-input-modal.service';

describe('BoughtInputModalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BoughtInputModalService]
    });
  });

  it('should be created', inject([BoughtInputModalService], (service: BoughtInputModalService) => {
    expect(service).toBeTruthy();
  }));
});

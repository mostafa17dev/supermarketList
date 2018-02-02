import { TestBed, inject } from '@angular/core/testing';

import { BoughtItemService } from './bought-item.service';

describe('BoughtItemService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BoughtItemService]
    });
  });

  it('should be created', inject([BoughtItemService], (service: BoughtItemService) => {
    expect(service).toBeTruthy();
  }));
});

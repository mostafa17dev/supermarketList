import { TestBed, inject } from '@angular/core/testing';

import { NeededItemService } from './needed-item.service';

describe('NeededItemService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NeededItemService]
    });
  });

  it('should be created', inject([NeededItemService], (service: NeededItemService) => {
    expect(service).toBeTruthy();
  }));
});

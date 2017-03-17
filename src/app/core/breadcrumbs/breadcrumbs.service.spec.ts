import { TestBed, inject } from '@angular/core/testing';

import { BreadcrumbService } from './breadcrumbs.service';

describe('BreadcrumbService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BreadcrumbService]
    });
  });

  it('should ...', inject([BreadcrumbService], (service: BreadcrumbService) => {
    expect(service).toBeTruthy();
  }));
});

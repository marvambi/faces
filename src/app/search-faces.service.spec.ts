import { TestBed, inject } from '@angular/core/testing';

import { SearchFacesService } from './search-faces.service';

describe('SearchFacesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchFacesService]
    });
  });

  it('should be created', inject([SearchFacesService], (service: SearchFacesService) => {
    expect(service).toBeTruthy();
  }));
});

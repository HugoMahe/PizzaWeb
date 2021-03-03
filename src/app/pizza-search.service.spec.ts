import { TestBed } from '@angular/core/testing';

import { PizzaSearchService } from './pizza-search.service';

describe('PizzaSearchService', () => {
  let service: PizzaSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PizzaSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { ModifyFoodService } from './modify-food.service';

describe('ModifyFoodService', () => {
  let service: ModifyFoodService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModifyFoodService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

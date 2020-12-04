import { TestBed } from '@angular/core/testing';

import { MycompanyService } from './mycompany.service';

describe('MycompanyService', () => {
  let service: MycompanyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MycompanyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

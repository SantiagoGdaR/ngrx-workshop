import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { GithubApiService } from './github-api.service';

describe('GithubApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule
    ]
  }));

  it('should be created', () => {
    const service: GithubApiService = TestBed.get(GithubApiService);
    expect(service).toBeTruthy();
  });
});

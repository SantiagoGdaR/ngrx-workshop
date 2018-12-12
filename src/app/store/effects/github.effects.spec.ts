import { HttpClientModule } from '@angular/common/http';
import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { GithubEffects } from './github.effects';

describe('GithubEffects', () => {
  let actions$: Observable<any>;
  let effects: GithubEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule ],
      providers: [
        GithubEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(GithubEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
